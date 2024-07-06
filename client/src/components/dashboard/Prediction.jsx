import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PredCard from './PredCard';
import { usePage } from '../../contexts/Dashboardcontext';
import NewPredictionModal from './PredictModal';
import Empty from './Empty';
import axios from 'axios';

function Prediction() {
    const [videos, setVideos] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/video/all/${user.user_id}`);
            ; 
            setVideos(response.data); 
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleRunPrediction = async (video) => {
        console.log(video,'czegzwez')
        // try {
        //     const formData = new FormData();
        //     const videoFile = new File([video], 'video.mp4', { type: 'video/mp4' });
        //     formData.append('video', videoFile);

        //     const response = await fetch('http://127.0.0.1:5000/api/treat', {
        //         method: 'POST',
        //         body: formData,
        //     });

        //     if (!response.ok) {
        //         console.log('Network response was not ok ' + response.statusText);
        //     }

            

        //     console.log('Prediction result URL:', url);
        // } catch (error) {
        //     console.error('Error running prediction:', error);
        // }
    };

    return (
        <section className="header h-full">
            {videos.length > 0 ? (
                <>
                    <div className="h-[70px] bg-white border-b-[1px] flex items-center pl-2">
                        <h2 className="font-bold text-2xl">
                            <span className="text-sm">Accueil</span> Mes Predictions
                        </h2>
                        <div className="absolute top-0 right-0 flex items-center space-x-2 p-4">
                            <span className="text-sm text-gray-500">powered by AI</span>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 .297C5.37.297 0 5.667 0 12.297c0 5.302 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577 0-.286-.01-1.043-.016-2.048-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.091-.745.084-.73.084-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.774.418-1.305.76-1.606-2.665-.305-5.467-1.334-5.467-5.933 0-1.31.469-2.38 1.236-3.22-.124-.304-.536-1.524.117-3.176 0 0 1.007-.323 3.3 1.23.957-.267 1.98-.4 3-.404 1.02.004 2.043.137 3 .404 2.29-1.554 3.295-1.23 3.295-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.624-5.475 5.92.43.371.815 1.104.815 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.215.694.825.576C20.565 22.092 24 17.594 24 12.297 24 5.667 18.63.297 12 .297z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="videos h-5/6 bg-slate-100 overflow-scroll">
                        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {videos.reverse().map((video) => (
                                <PredCard key={video.id} video={video} />
                            ))}
                        </div>
                    </div>
                    <div className="addvido h-[60px] bg-white flex items-center justify-between">
                        <div className="px-6 pt-4 pb-2">
                            <button
                                onClick={openModal}
                                className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded"
                            >
                                Faire une Prediction
                            </button>
                            <NewPredictionModal
                                isOpen={isModalOpen}
                                onClose={closeModal}
                                videos={videos}
                                onRunPrediction={handleRunPrediction}
                            />
                        </div>
                        <div className="mr-4">
                            <Link to={'#'} className="text-blue-500 underline">
                                View Training Videos
                            </Link>
                        </div>
                    </div>
                </>
            ) : (
                <Empty />
            )}
        </section>
    );
}

export default Prediction;
