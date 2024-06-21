import os
from flask import request, jsonify, send_file, current_app as app
from .video_processing import process_video, load_dataset, store_predicted_frames, write_video, clean_repertoire
from .utils import setup_logging
from .predict import make_prediction

setup_logging()

@app.route('/api/treat', methods=['POST'])
def handle_request():
    video = request.files.get('video')  # Récupère la vidéo envoyée dans la requête
    print("Valeur de video:", video)
    if video:
        home_dir = os.path.expanduser("~")
        project_dir = os.path.join(home_dir, 'my_project_videos')
        model=os.path.join(project_dir,'model3 (10).keras')
        os.makedirs(project_dir, exist_ok=True)
        video_path = os.path.join(project_dir, video.filename)
        video.save(video_path)  # Enregistre le fichier vidéo temporaire
        output_folder = os.path.join(project_dir, 'pred')  # Spécifie le chemin complet où vous souhaitez enregistrer le fichier
        output = os.path.join(project_dir, 'pred2')
        final = os.path.join(project_dir, 'fin/processed_video.avi')
        
        print('je fais le traitement de la video')
        path = process_video(video_path, output_folder)


        print('je charge les farmes de ma videos ')

        data = load_dataset(path)
        print('jeffectue ma predictions ')
        predictions =make_prediction(model=model,data=data)
        print('je stoke les frames de la predctions ')
        path2 = store_predicted_frames(data, output)
        print('je genere une videos avec les frames ')
        write_video(predictions[0], final)       
        print('je verifie le path de la videos', video)
        clean_repertoire('videos', path, path2)

        return send_file(final, as_attachment=True)
    else:
        response = {'message': "Aucune vidéo n'a été fournie."}
        return jsonify(response)
