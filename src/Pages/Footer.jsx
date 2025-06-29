import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm text-center">
          &copy; {new Date().getFullYear()} Mohammad Sanvi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
