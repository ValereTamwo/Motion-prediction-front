import React, { useState } from 'react';
import { useSignIn } from '../../contexts/SignInContext';
import axios from 'axios';

const VideoFormModal = ({ isOpen, onClose }) => {
    const { data } = useSignIn();

    // Récupère les données utilisateur depuis localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    const [videoData, setVideoData] = useState({
        title: '',
        duration: '', // Facultatif, dépend de votre logique
        tokenId: user.user_id, // Utilise user_id depuis localStorage
        desc: '', // Facultatif, dépend de votre logique
        video: null,
        thumbnail: '', // Facultatif, dépend de votre logique
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVideoData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setVideoData((prevData) => ({ ...prevData, [name]: files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Créer un FormData pour envoyer des fichiers
        const formData = new FormData();
        formData.append('title', videoData.title);
        formData.append('user_id', videoData.tokenId);
        formData.append('video', videoData.video);

        try {
            const res = await axios.post('http://localhost:3001/video/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Video uploaded successfully:', res.data);
            onClose(); // Fermer le modal après succès
        } catch (error) {
            console.error('Error uploading video:', error);
            // Gérer l'erreur ou afficher un message à l'utilisateur
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
                <button className="absolute top-5 right-5 bg-red-100 h-[50px] w-[50px] text-red-500" onClick={onClose}>
                    &times;
                </button>
                <h2 className="text-2xl mb-4">Add New Video</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={videoData.title}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Upload Video</label>
                        <input
                            type="file"
                            name="video"
                            accept="video/*"
                            onChange={handleFileChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700">
                        Save Video
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VideoFormModal;
