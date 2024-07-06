import React, { useState } from 'react';
import { FaPlay, FaTrash } from 'react-icons/fa';
import Modal from './VideoModal';

const VideoCard = ({ video }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <div className="relative">
                <video className="w-full h-48 object-cover" controls>
                    <source src={video.video_url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <button onClick={openModal} className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl">
                    <FaPlay />
                </button>
            </div>
            
            <div className="px-6 pt-4 pb-2 flex justify-between items-center">
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} video={video} />
        </div>
    );
};

export default VideoCard;
