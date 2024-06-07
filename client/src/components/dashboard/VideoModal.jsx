import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, video }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg max-w-2xl w-full relative">
                <button className="absolute top-2 right-2 text-red-500" onClick={onClose}>
                    <FaTimes size={24} />
                </button>
                <div className="aspect-w-16 aspect-h-9 mt-6">
                    <div className="relative bg-black text-white p-4 rounded-lg shadow-lg">
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
                            <video controls className="w-full h-auto">
                                <source src={video.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
