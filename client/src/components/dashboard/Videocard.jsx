import React from 'react';
import { FaPlay, FaTrash } from 'react-icons/fa';
import Modal from './VideoModal';
import { useState } from 'react';
import { usePage } from '../../contexts/Dashboardcontext';
const VideoCard = ({ video }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <div className="relative">
                <img className="w-full h-48 object-cover" src={video.thumbnail} alt={video.title} />
                <button onClick={openModal} className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl">
                    <FaPlay />
                </button>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{video.title}</div>
                <p className="text-gray-700 text-base">
                    Durée: {video.duration}
                </p>
                <p className="text-gray-700 text-base">
                    Description: {video.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                <button className="bg-gray-800 hover:bg-gray-700 text-white f py-2 px-4 rounded">
                    Faire une prédiction
                </button>
                <button className='flex justify-end'>
                    <FaTrash className="mr-2" />
                </button>
            </div>
             <Modal isOpen={isModalOpen} onClose={closeModal} video={video} />
        </div>
    );
};

export default VideoCard;
