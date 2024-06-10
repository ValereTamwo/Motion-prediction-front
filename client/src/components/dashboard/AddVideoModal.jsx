    import React, { useState } from 'react';
    import { useSignIn } from '../../contexts/SignInContext';
    import addData from '../firebase/AddVideo';
    const VideoFormModal = ({ isOpen, onClose }) => {

        const {data} = useSignIn()
    const [videoData, setVideoData] = useState({
        title: '',
        duration: '',
        tokenId: data.token,    
        desc: '',
        video: null,
        thumbnail: '',
    });

    const handleChange = (e) => {   
        const { name, value } = e.target;
        setVideoData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addData(videoData);
        console.log(videoData); 
        // onClose();
    };
        const handleFileChange = (e) => {
        const { name, files } = e.target;
        setVideoData((prevData) => ({ ...prevData, [name]: files[0] }));
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
                <label className="block text-gray-700">Description</label>
                <input
                type="text"
                name="desc"
                value={videoData.desc}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Duration</label>
                <input
                type="text"
                name="duration"
                value={videoData.duration}
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
            <div className="mb-4">
                <label className="block text-gray-700">thumbnail url</label>
                <input
                type="text"
                name="thumbnail"
                value={videoData.thumbnail}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Token ID</label>
                <input
                
                type="text"
                name="tokenId"
                value={data.token}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
                />
            </div>
            <button type="submit" onClick={handleSubmit} className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700">
                Save Video
            </button>
            </form>
        </div>
        </div>
    );
    };

    export default VideoFormModal;
