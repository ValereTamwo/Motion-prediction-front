import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">Motion Tracking App</p>
          <p className="text-sm">© 2024 All rights reserved</p>
        </div>
        <div className="flex space-x-4">
          <a href="/" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="/" className="hover:text-gray-400">
            Terms of Service
          </a>
          <a href="/" className="hover:text-gray-400">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
