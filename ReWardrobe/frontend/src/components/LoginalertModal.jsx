import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginalertModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null; // Don't render the modal if it is not open

  const handleLoginClick = () => {
    navigate('/login'); // Redirect user to login page
    onClose(); // Close the modal after redirect
  };

  const handleClose = () => {
    onClose(); // Close the modal when clicking "Close"
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8  w-96 text-center shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">You Need to Login</h2>
        <p className="mb-6 text-sm text-gray-600">You need to be logged in to view product details. Please log in to proceed.</p>
        <div className='flex flex-col'>
        <button 
          onClick={handleLoginClick}
          className="bg-blue-500 text-white px-6 py-3  hover:bg-blue-600 transition duration-300 font-semibold text-lg"
        >
          Login Now
        </button>

        <button 
          onClick={handleClose}
          className="bg-gray-500 text-white px-6 py-3 mt-4  hover:bg-gray-600 transition duration-300 font-semibold text-lg"
        >
          Close
        </button>
        </div>
       
      </div>
    </div>
  );
};

export default LoginalertModal;
