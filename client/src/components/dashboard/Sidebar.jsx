import React, { useState } from 'react';
import logo from '../../public/icons/logo.png';
import me from '../../public/train6.jpeg';
import { usePage } from '../../contexts/Dashboardcontext';
import { useSignIn } from '../../contexts/SignInContext';
import NewPredictionModal from './PredictModal';

function Sidebar(props) {
    const { setCurrent, videos } = usePage();
    const{data} = useSignIn()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('home');

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleRunPrediction = (video) => {
        console.log('Running prediction on:', video);
        // Ici, vous pouvez ajouter le code pour envoyer la vidéo pour prédiction
    };

    const handleItemClick = (item) => {
        setActiveItem(item);
        setCurrent(item);
    };

    const navItemClasses = (item) => {
        return `flex flex-row items-center space-x-2 p-2 rounded ${activeItem === item ? 'bg-gray-300' : ''}`;
    };

    return (
        <div className='h-screen w-1/6 border-r'>
            <div className='logo h-1/6'>
                <div className='h-100 flex h-2/3'>
                    <div className='flex ml-3 justify-center items-center'>
                        <img className='rounded-full w-[50px] h-[50px]' src={logo} alt='logo' />
                    </div>
                    <div className='flex ml-2 justify-center items-center'>
                        <h3 className='text-black text-[20px] text-center font-bold'>Motion </h3>
                    </div>
                </div>
                <div className='flex md:h-[70px] border-b-1 items-right justify-start py-3'>
                    <div className='flex items-center space-x-2 p-2 ml-4 bg-gray-700 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-lg text-white" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2z" />
                        </svg>
                        <button onClick={openModal} className='bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded shadow'>
                            Nouveau
                        </button>
                        <NewPredictionModal
                            isOpen={isModalOpen}
                            onClose={closeModal}
                            videos={videos}
                            onRunPrediction={handleRunPrediction}
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-4/6 py-4 px-4 mt-4'>
                <div className={navItemClasses('home')} onClick={() => handleItemClick('home')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-black" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                    </svg>
                    <button className='text-black'>Accueil</button>
                </div>
                <div className={navItemClasses('videos')} onClick={() => handleItemClick('videos')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
                    </svg>
                    <button className='text-black'>Videos</button>
                </div>
                <div className={navItemClasses('predictions')} onClick={() => handleItemClick('predictions')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                    </svg>
                    <button className='text-black'>Predictions</button>
                </div>
                <div className={navItemClasses('model')} onClick={() => handleItemClick('model')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H6v-1h6a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.113 14.82.8 15.85H0l1.342-3.999h.926l1.336 3.999h-.841l-.314-1.028H1.113Zm1.178-.588-.49-1.617h-.034l-.49 1.617zm2.425-2.382v3.999h-.791V11.85h.79Z" />
                    </svg>
                    <button className='text-black'>Model</button>
                </div>
                <div className={navItemClasses('api')} onClick={() => handleItemClick('api')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                        <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686" />
                    </svg>
                    <button className='text-black mt-2'>API</button>
                </div>
            </div>

            <div className='user h-1/6 flex items-center'>
                <div className='flex items-center p-1 ml-4 bg-gray-200 rounded-md'>
                    <img src={data.photourl} alt='me' className='w-[50px] h-[50px] object-contain rounded-full' />
                    <button className='hover:bg-gray-300 p-4 text-black font-semibold rounded'>
                        {data.name}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
