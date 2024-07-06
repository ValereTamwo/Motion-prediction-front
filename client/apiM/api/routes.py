import os
from flask import request, jsonify, send_file, current_app as app
from dotenv import load_dotenv
from .video_processing import process_video, load_dataset, store_predicted_frames, write_video, clean_repertoire
from .utils import setup_logging
from .predict import make_prediction
import subprocess
import shutil
from moviepy.editor import VideoFileClip
setup_logging()
load_dotenv()

@app.route('/api/treat', methods=['POST'])
def handle_request():
    video = request.files.get('video')  # Récupère la vidéo envoyée dans la requête
    print("Valeur de video:", video)
    if video:

        home_dir = os.path.expanduser("~/Machine/Motion-prediction-front/client/apiM")
        project_dir = os.path.join(home_dir, 'my_project_videos')
        model=os.path.join(project_dir,'model3 (10).keras')
        os.makedirs(project_dir, exist_ok=True)
        video_path = os.path.join(project_dir, video.filename)
        video.save(video_path)  # Enregistre le fichier vidéo temporaire
        output_folder = os.path.join(project_dir, 'pred')  # Spécifie le chemin complet où vous souhaitez enregistrer le fichier
        output = os.path.join(project_dir, 'pred2')
        temp = os.path.join(project_dir,'fin/model_pred.mp4')
        print(temp)
        final = '/home/fideline/Machine/Motion-prediction-front/client/src/video/finale.mp4'
        final2 = '~/Machine learning/Motion-prediction-front/client/src/video/pred/final.mp4'
        
    
        
        print('je fais le traitement de la video')
        path = process_video(video_path, output_folder)

        print('je charge les farmes de ma videos ')

        data = load_dataset(path)
        print('jeffectue ma predictions ')

        predictions =make_prediction(model=model,data=data[0])

        print('je stoke les frames de la predctions ')
        path2 = store_predicted_frames(data, output)
        print('je genere une videos avec les frames ')
        write_video(predictions[0], temp)     
        clip = VideoFileClip(temp)
        clip.write_videofile(final, codec='libx264', audio_codec='aac', preset='medium', bitrate='128k')
        print(f"Vidéo finale enregistrée sous {final}")  
    #     ffmpeg_command = [
    #     'ffmpeg',
    #     '-y',
    #     '-i', final,
    #     '-c:v', 'libx264',
    #     '-crf', '23',
    #     '-preset', 'medium',
    #     '-c:a', 'aac',
    #     '-b:a', '128k',
    #     final2
    # ]
        
    #     subprocess.run(ffmpeg_command, check=True)
        
        print('je verifie le path de la videos', video)
        clean_repertoire('videos', path, path2)
        return jsonify({'url': f"../../../apiM/my_project_videos/fin/processed_video.mp4"})
    else:
        response = {'message': "Aucune vidéo n'a été fournie."}
        return jsonify(response)
