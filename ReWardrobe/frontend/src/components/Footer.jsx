import React from 'react';
import { assets } from '../assets/assets'; // Assuming logo is in assets
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Social icons

const Footer = () => {
  return (
    <footer className="py-10 bg-white">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start">

          {/* Left Section: Logo and Details */}
          <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
            {/* Logo */}
            <img src={assets.logo} className="mb-4 w-32 mx-auto md:mx-0" alt="Logo" />

            {/* Footer Description */}
            <p className="w-full md:w-2/3 text-sm font-medium text-gray-600">
              At ReWardrobe, we make fashion circular by promoting the reuse of quality clothing and minimizing waste. Join us in our mission to create a sustainable future.
            </p>
          </div>

          {/* Right Section: Company, Get in Touch, and Social Media (All in One Div) */}
          <div className="flex-1 flex flex-col md:flex-row justify-between items-start text-center md:text-left gap-6">
            {/* Company Section */}
            <div className="flex-1">
              <p className="text-xl font-semibold mb-4 text-gray-800">COMPANY</p>
              <ul className="flex flex-col gap-2 text-sm font-medium text-gray-600">
                <li className="hover:text-green-400 transition duration-300">Home</li>
                <li className="hover:text-green-400 transition duration-300">About Us</li>
                <li className="hover:text-green-400 transition duration-300">Delivery</li>
                <li className="hover:text-green-400 transition duration-300">Privacy Policy</li>
              </ul>
            </div>

            {/* Get in Touch Section */}
            <div className="flex-1">
              <p className="text-xl font-semibold mb-4 text-gray-800">GET IN TOUCH</p>
              <ul className="flex flex-col gap-3 text-sm font-medium text-gray-600">
                <li className="flex items-center gap-2">
                  <FaPhoneAlt className="text-green-400" />
                  +1-212-456-7890
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-green-400" />
                  contact@fox.com
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="flex-1">
              <p className="text-xl font-semibold mb-4 text-gray-800">FOLLOW US</p>
              <div className="flex gap-6 justify-center md:justify-start">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400 transition duration-300">
                  <FaTwitter className="text-2xl" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition duration-300">
                  <FaInstagram className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal line with small shadow */}
        <div className="w-full mt-12 mb-6">
          <hr className="border-t border-gray-300 shadow-sm" />
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm font-medium text-gray-500">
          <p>© {new Date().getFullYear()} ReWardrobe. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
