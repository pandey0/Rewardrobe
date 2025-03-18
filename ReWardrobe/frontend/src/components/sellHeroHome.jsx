import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const GoToSellingPageButton = () => {
  return (
    <div className="border-b border-gray-300 p-10 shadow-lg text-center">
      <h2 className="text-3xl sm:text-4xl text-gray-800 mb-4 font-poppins">
        Turn Your Clothes Into Cash!
      </h2>
      <p className="text-xl sm:text-2xl text-gray-600 mb-6 font-poppins">
        Have gently used clothes sitting in your closet? Don’t let them go to waste.
        Sell them today and make some extra cash! It's simple, fast, and secure.
      </p>

      <p className="text-lg text-gray-700 mb-6 font-poppins">
        Find out how easy it is to list your products, set your price, and get paid. No hassle, just rewards!
      </p>

      {/* Button to Learn More about the Selling Process */}
      <Link
        to="/sellhow"
        className="bg-blue-500 text-white py-3 px-8 text-lg hover:bg-blue-600 transition duration-300 mb-4 inline-block font-poppins"
      >
        How to Sell Your Products
      </Link>

      {/* Button to Start Selling Immediately */}
      <Link
        to="/sell"
        className="bg-green-500 text-white py-3 px-8 text-lg hover:bg-green-600 transition duration-300 inline-block font-poppins"
      >
        Start Selling Now
      </Link>
    </div>
  );
};

export default GoToSellingPageButton;
