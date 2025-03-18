import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaShoppingBag } from 'react-icons/fa'; // Eco-friendly and shopping icons
import { assets } from '../assets/assets'; // Assuming this imports the image URLs

const HeroSection = () => {
  const textShadowStyle = {
    textShadow: '0 6px 10px rgba(0, 0, 0, 0.7), 0 2px 5px rgba(0, 0, 0, 0.5)', // Darker shadow
  };

  return (
    <section className="flex flex-col lg:flex-row">
      {/* Left Side - Buy Section */}
      <div className="flex-1 text-white flex items-center justify-center relative py-8 lg:py-0 h-96">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${assets.buy1})`, objectFit: 'cover' }}
          aria-label="Buy Section Background"
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 lg:px-12 max-w-lg mx-auto mt-12">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4 text-white font-poppins" style={textShadowStyle}>
            Shop Now
          </h1>
          <p className="text-lg sm:text-xl mb-6 leading-relaxed text-white font-poppins" style={textShadowStyle}>
            Sustainable fashion for a better future. Wear pre-loved, feel brand new.
          </p>
          <Link
            to="/collection"
            className="bg-green-600 text-white px-8 py-3  text-xl font-semibold hover:bg-green-700 transition duration-300 font-poppins"
            aria-label="Start shopping"
          >
            Start Shopping
          </Link>
        </div>

        {/* Decorative Shopping Bag Icon */}
        <div className="absolute top-10 right-10 opacity-30 transform scale-110 group hover:scale-125 transition duration-500 ease-in-out">
          <FaShoppingBag className="text-white text-7xl" aria-label="Shopping bag icon" />
        </div>
      </div>

      {/* Right Side - Sell Section */}
      <div className="flex-1 text-white flex items-center justify-center relative py-8 lg:py-0 h-96">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${assets.sell1})`, objectFit: 'cover' }}
          aria-label="Sell Section Background"
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 lg:px-12 max-w-lg mx-auto mt-12">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4 text-white font-poppins" style={textShadowStyle}>
            Sell Your Clothes
          </h1>
          <p className="text-lg sm:text-xl mb-6 leading-relaxed text-white font-poppins" style={textShadowStyle}>
            Turn your old clothes into cash and support sustainable fashion.
          </p>
          <Link
            to="/sell"
            className="bg-green-600 text-white px-8 py-3  text-xl font-semibold hover:bg-green-700 transition duration-300 font-poppins"
            aria-label="Start selling"
          >
            Start Selling
          </Link>
        </div>

        {/* Decorative Leaf Icon */}
        <div className="absolute top-10 left-10 opacity-30 transform scale-110 group hover:scale-125 transition duration-500 ease-in-out">
          <FaLeaf className="text-green-600 text-7xl" aria-label="Leaf icon for eco-friendliness" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
