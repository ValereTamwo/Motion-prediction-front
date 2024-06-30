import React, { useState } from 'react';
import { FaTimes, FaSpinner } from 'react-icons/fa';
import pred from '../../../src/video/finale.mp4'
const NewPredictionModal = ({ isOpen, onClose, videos, onSelectVideo }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [uploadedVideo, setUploadedVideo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [video, setVideo] = useState(null);
    const [open, setOpen] = useState(false);

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

    const handleResPredicT = async (video) => {
        try {
            setIsLoading(true);

            // Create FormData and append the video
            const formData = new FormData();
            formData.append('video', video, video.name);
            // const formData2 = new FormData();

            // Send the video to the server
                const response = await fetch('http://127.0.0.1:5000/api/treat', {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                const url =  data.url;
                // // const url = window.URL.createObjectURL(blob);
                // formData2.append('video', blob, 'predicted');

                // const res = await axios.post('http://127.0.0.1:4000/api/upload', formData2, {
                //     headers: {
                //         'Content-Type': 'multipart/form-data'
                //     }
                // });
                // let url = res.data.url;

            setVideo({ title: 'Predicted Video', url });
            setIsLoading(false);
            setOpen(true);
        } catch (error) {
            console.error('Error running prediction:', error);
            setIsLoading(false);
        }
    };

    const handleRunPrediction = () => {
        const videoToPredict = uploadedVideo || selectedVideo;

        if (videoToPredict) {
            if (typeof videoToPredict === 'object' && videoToPredict.url) {
                // Fetch video blob if the selected video has a URL
                fetchVideoBlob(videoToPredict.url).then(blob => {
                    if (blob) {
                        handleResPredicT(blob);
                    }
                });
            } else {
                // Handle directly uploaded video
                handleResPredicT(videoToPredict);
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg max-w-2xl w-full relative">
                <button className="absolute top-2 right-2 text-red-500" onClick={() => { onClose(); setOpen(false)}}>
                    <FaTimes size={24} />
                </button>
                {open ? (
                    <div className="bg-white p-4 rounded-lg max-w-2xl w-full relative">
                        <div className="aspect-w-16 aspect-h-9 mt-6">
                            <div className="relative bg-black text-white p-4 rounded-lg shadow-lg">
                                <div className="flex flex-col items-center">
                                    <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
                                    <video controls className="w-full h-auto">
                                        <source src={pred} type="video/mp4"/>
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Nouvelle Prédiction</h2>
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
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <FaSpinner className="animate-spin w-[25px] h-[25px] flex " />
                                ) : (
                                    'Run'
                                )}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default NewPredictionModal;
