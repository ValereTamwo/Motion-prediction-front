import React, { useState } from 'react';
import { FaTimes,FaSpinner } from 'react-icons/fa';

const NewPredictionModal = ({ isOpen, onClose, videos, onSelectVideo, onRunPrediction }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [uploadedVideo, setUploadedVideo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const handleFileChange = (e) => {
        setUploadedVideo(e.target.files[0]);
    };


    async function fetchVideoBlob(videoUrl) {
    try {
        const response = await fetch(videoUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob();
        return blob;
    } catch (error) {
        console.error('Error fetching the video:', error);
        return null;
    }
}

    const handleRunPrediction = () => {
        if (selectedVideo) {
        fetchVideoBlob(selectedVideo.url)
            .then(blob => {
                if (blob) {
                    const blobselected = blob;
                    // You can now use blobselected as needed
                    setSelectedVideo(blobselected)
                    console.log('Blob fetched successfully:', blobselected);
                }
        });
}
        const videoToPredict = uploadedVideo || selectedVideo;

        if (videoToPredict) {
            onRunPrediction(videoToPredict);
            setTimeout(3000,() => { setIsLoading(true) });
            // onClose();
        }
    };

 
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg max-w-2xl w-full relative">
                <button className="absolute top-2 right-2 text-red-500" onClick={onClose}>
                    <FaTimes size={24} />
                </button>
                <h2 className="text-2xl font-bold mb-4 ">Nouvelle Prédiction</h2>
                <div className="flex flex-col space-y-4">
                    <div className='h-[200px] border flex flex-col justify-center'>
                        <label className="block text-gray-700">Uploader une vidéo</label>
                        <input type="file" accept="video/*" onChange={handleFileChange} />
                    </div>
                    <div>
                        <label className="block text-gray-700">Ou sélectionner une vidéo existante</label>
                        <div className="flex flex-wrap -m-2">
                            {videos.map((video) => (
                                <div
                                    key={video.id}
                                    className={`m-2 p-2 border rounded cursor-pointer ${selectedVideo === video ? 'border-blue-500' : 'border-gray-300'}`}
                                    onClick={() => setSelectedVideo(video)}
                                >
                                    <img src={video.thumbnail} alt={video.title} className="w-32 h-20 object-cover" />
                                    <p className="text-center text-sm">{video.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                   <button
                        className={`mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${isLoading ? 'cursor-not-allowed' : ''}`}
                        onClick={handleRunPrediction}
                        // disabled={isLoading}
                    >
                        {isLoading ? (
                            <FaSpinner className="animate-spin w-[25px] h-[25px] flex " />
                        ) : (
                            'Run'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewPredictionModal;
