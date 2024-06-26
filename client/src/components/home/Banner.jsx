import React from 'react';
import video from '../../public/videos/motion.mp4';
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 border mt-2 h-screen/3 bg-slate-100 ">
      <div className="flex flex-col items-start justify-center space-y-4 md:w-1/2 mb-9 ml-5">
        <h1 className="text-4xl md:text-5xl font-bold ">
          Human Motion Prediction
        </h1>
        <p className="text-xl text-black">
          An AI specialized app for motion tracking. Version Beta
        </p>
        <div className="flex space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded shadow hover:bg-blue-700">
            View Demo
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-green-700">
            Try App
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 shadow-1xl">
        <video
          className="w-full h-auto rounded-lg shadow-lg"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Banner;
