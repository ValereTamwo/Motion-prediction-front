import os
import cv2
import shutil
import numpy as np 
import tensorflow as tf
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# Fonction pour intercepter la vidéo et la diviser en frames
def load_sequences_from_folder(folder, target_size,num_frames):
    filenames = sorted(os.listdir(folder))
    selected_filenames = filenames[-num_frames:]
    sequence = []
    for filename in selected_filenames:
        img_path = os.path.join(folder, filename)
        img = load_img(img_path, target_size=target_size)
        img_array = img_to_array(img)
        sequence.append(img_array)
    return np.array(sequence)


def pad_sequence(sequence, max_length):
    current_length = sequence.shape[0]
    if current_length < max_length:
        padding = np.zeros((max_length - current_length, *sequence.shape[1:]))
        sequence = np.vstack((sequence, padding))
    return sequence
def process_video(video_path, output_folder):
    '''
    -----------parametres
      video_path: le chemin de la video
      output_folder: le dossier dans lequel on doit stocker les frames
    ------------fonctionnement
    Cette fonction est utilisée pour récupérer la vidéo et stocker les 4 dernières secondes sous forme de frames dans un dossier pred
    ----------------sortie
    output_folder: le chemin où sont stockées les frames
    '''
    if not os.path.exists(video_path):
        print(f"Error: Video file not found at {video_path}")
        return None

    cap = cv2.VideoCapture(video_path)

    # Récupérer les métadonnées de la vidéo
    cap = cv2.VideoCapture(video_path)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    fps = int(cap.get(cv2.CAP_PROP_FPS))
    #duration = total_frames / fps
    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

    if fps == 0 or frame_count == 0:
        print(f"Error: Invalid video metadata (fps: {fps}, frame_count: {frame_count})")
        cap.release()
        return None

    duration_seconds = frame_count / fps

    # Définir le nombre de frames pour les séquences d'entrée et de sortie
    input_frame_count = min(int(fps * 4), frame_count)
    total_frame_count = min(int(fps * 6), frame_count)
    target_frame_count = total_frame_count - input_frame_count + 1

    # Diviser la vidéo en frames
    input_frames_dir = os.path.join(output_folder, "input_frames")
    target_frames_dir = os.path.join(output_folder, "target_frames")
    os.makedirs(input_frames_dir, exist_ok=True)
    os.makedirs(target_frames_dir, exist_ok=True)

    for frame_number in range(total_frame_count):
        ret, frame = cap.read()
        if not ret:
            break
        if frame_number < input_frame_count:
            input_frame_path = os.path.join(input_frames_dir, f"frame_{frame_number:04d}.jpg")
            cv2.imwrite(input_frame_path, frame)
        if frame_number >= input_frame_count - 1:
            target_frame_index = frame_number - (input_frame_count - 1)
            target_frame_path = os.path.join(target_frames_dir, f"frame_{target_frame_index:04d}.jpg")
            cv2.imwrite(target_frame_path, frame)

    # Fermer la capture vidéo
    cap.release()
    print('output',output_folder)
    return output_folder


def load_dataset(data_dir, num_videos=171,target_size=(128, 128),num2=300):
    input_sequences = []
    target_sequences = []
    video_folders = sorted(os.listdir(data_dir))[:num2]

    for video_folder in video_folders:
        input_frames_dir = os.path.join(data_dir, video_folder)
        target_frame_dir = os.path.join(data_dir, video_folder)

        input_sequence = load_sequences_from_folder(input_frames_dir, target_size,num_frames=59)
        target_sequence = load_sequences_from_folder(target_frame_dir, target_size,num_frames=59)
        
        input_sequences.append(input_sequence)
        target_sequences.append(target_sequence)
    input_sequences = [seq.astype('float32') / 255.0 for seq in input_sequences]
    target_sequences = [seq.astype('float32') / 255.0 for seq in target_sequences]
    return np.array(input_sequences), np.array(target_sequences)
def store_predicted_frames(predicted_sequence, output_path):
    if not os.path.exists(output_path):
        os.makedirs(output_path)
    for i, frame in enumerate(predicted_sequence):
        cv2.imwrite(os.path.join(output_path, f"predicted_frame_{i}.jpg"), frame)
    return output_path

def clean_repertoire(pred_fin, pred, videos):
    """
    Cette fonction va être utilisée pour libérer le contenu de tous les répertoires après le traitement d'une vidéo.
    Elle supprime tous les fichiers et sous-répertoires dans les répertoires spécifiés.
    """
    def clean_directory(directory):
        if os.path.exists(directory):
            for filename in os.listdir(directory):
                file_path = os.path.join(directory, filename)
                try:
                    if os.path.isfile(file_path) or os.path.islink(file_path):
                        os.unlink(file_path)
                    elif os.path.isdir(file_path):
                        shutil.rmtree(file_path)
                except Exception as e:
                    print(f'Failed to delete {file_path}. Reason: {e}')

    clean_directory(pred_fin)
    clean_directory(pred)
    clean_directory(videos)

# Fonction pour générer la vidéo à partir des frames


def generate_video(frame_dir, output_video_path, fps=30):
    # Liste et trie les fichiers .jpg dans frame_dir
    frames = sorted([f for f in os.listdir(frame_dir) if f.endswith(".jpg")], key=lambda x: int(x[x.rfind("_")+1:-4]))

    # Debug: imprimer le contenu de frames
    print(f"Frames found: {frames}")
    if not frames:
        raise ValueError(f"No frames found in directory {frame_dir}")

    # Charge la première image pour obtenir ses dimensions
    frame = cv2.imread(os.path.join(frame_dir, frames[0]))
    if frame is None:
        raise ValueError(f"Could not read the first frame {frames[0]}")
    
    height, width, _ = frame.shape

    # Initialise l'objet VideoWriter avec le codec "mp4v"
    fourcc = cv2.VideoWriter_fourcc(*"mp4v")
    out = cv2.VideoWriter(output_video_path, fourcc, fps, (width, height))

    # Lit chaque frame et l'ajoute à la vidéo
    for frame_path in frames:
        frame = cv2.imread(os.path.join(frame_dir, frame_path))
        if frame is None:
            raise ValueError(f"Could not read frame {frame_path}")
        out.write(frame)

    # Libère l'objet VideoWriter
    out.release()

    return output_video_path

# Fonction pour normaliser les images entre 0 et 255
def denormalize(img):
    img = img - img.min()
    img = img / img.max()
    img = (img * 255).astype(np.uint8)
    return img

# Fonction pour écrire la vidéo
def write_video(predicted_sequences, output_file):
    # Dimensions des images
    seq_length, img_height, img_width, img_channels = predicted_sequences.shape

    # Définir le codec et créer l'objet VideoWriter
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_file, fourcc, 5.0, (img_width, img_height))

    for j in range(seq_length):
        frame = predicted_sequences[j]
        frame = denormalize(frame) # Dénormaliser l'image pour qu'elle soit entre 0 et 255
        out.write(cv2.cvtColor(frame, cv2.COLOR_RGB2BGR))

    out.release()
    print(f"Vidéo enregistrée sous {output_file}")