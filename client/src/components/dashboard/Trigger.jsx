import React from 'react';

function Trigger() {
    return (
        <div className='flex  justify-center items-center h-full'>
            <div className='absolute top-0 right-0 flex items-center space-x-2 p-4'>
                <span className='text-sm text-gray-500'>powered by AI</span>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297C5.37.297 0 5.667 0 12.297c0 5.302 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577 0-.286-.01-1.043-.016-2.048-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.091-.745.084-.73.084-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.774.418-1.305.76-1.606-2.665-.305-5.467-1.334-5.467-5.933 0-1.31.469-2.38 1.236-3.22-.124-.304-.536-1.524.117-3.176 0 0 1.007-.323 3.3 1.23.957-.267 1.98-.4 3-.404 1.02.004 2.043.137 3 .404 2.29-1.554 3.295-1.23 3.295-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.624-5.475 5.92.43.371.815 1.104.815 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.215.694.825.576C20.565 22.092 24 17.594 24 12.297 24 5.667 18.63.297 12 .297z"/>
                    </svg>
                </a>
            </div>

            <div className='flex  '>

            <div className="flex flex-col items-center p-4 bg-white rounded-lg m-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                </svg>
                <h2 className="text-lg font-semibold my-2">Nouvelle prédiction</h2>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">Créer</button>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg m-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <h2 className="text-lg font-semibold my-2">Upload vidéo</h2>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">Télécharger</button>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg m-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                </svg>
                <h2 className="text-lg font-semibold my-2">Documentation</h2>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">Voir</button>
            </div>
            </div> 
            
        </div>
    );
}

export default Trigger;