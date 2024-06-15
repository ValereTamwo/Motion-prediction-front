import React from 'react';
import { FaUpload, FaMagic, FaVideo } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <div className="border   py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-8">How It Works</h2>
        <div className="flex flex-col gap-7 md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <FaUpload className="text-blue-500 text-6xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Upload Video</h3>
            <p className="text-gray-600">
              Easily upload your video to get started with the prediction process.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <FaMagic className="text-green-500 text-6xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Make Prediction</h3>
            <p className="text-gray-600">
              Click the button to initiate the magic of AI prediction.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <FaVideo className="text-purple-500 text-6xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Get Results</h3>
            <p className="text-gray-600">
              Watch as your video is processed and results are rendered in no time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
