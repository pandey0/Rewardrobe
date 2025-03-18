import React, { useState, useEffect } from "react";

const PopAddCart = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Hide the toast after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timeout on unmount
  }, [message, onClose]);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-2 px-4 rounded-md shadow-lg font-poppins">
      <p>{message}</p>
    </div>
  );
};

export default PopAddCart;
