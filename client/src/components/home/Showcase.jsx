import React from 'react';
import video from '../../public/videos/motion.mp4';

const Showcase = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Video 1 */}
          <div className="relative group rounded h-[410px]">
            <div className="overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9">
              <video
                className="absolute rounded inset-0 w-full h-full object-cover transition-opacity duration-300 transform group-hover:scale-105"
                src={video}
                controls
              ></video>
            </div>
            <div className="bg-white p-4 mt-2 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Video Title 1</h3>
              <p className="text-gray-600 mb-4">Description of Video 1</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                Watch Now
              </button>
            </div>
          </div>

          {/* Video 2 */}
          <div className="relative group">
            <div className="overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9">
              <video
                className="absolute rounded inset-0 w-full h-full object-cover transition-opacity duration-300 transform group-hover:scale-105"
                src={video}
                controls
              ></video>
            </div>
            <div className="bg-white p-4 mt-2 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Video Title 2</h3>
              <p className="text-gray-600 mb-4">Description of Video 2</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                Watch Now
              </button>
            </div>
          </div>

          {/* Video 3 */}
          <div className="relative group">
            <div className="overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9">
              <video
                className="absolute rounded inset-0 w-full h-full object-cover transition-opacity duration-300 transform group-hover:scale-105"
                src={video}
                controls
              ></video>
            </div>
            <div className="bg-white p-4 mt-2 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Video Title 3</h3>
              <p className="text-gray-600 mb-4">Description of Video 3</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;