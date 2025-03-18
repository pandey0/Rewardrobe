import React from 'react';
import { FaRecycle, FaGlobe, FaTshirt } from 'react-icons/fa'; // Import React Icons
import { Navigate } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen font-poppins">
      {/* Hero Section */}
      <section className="relative p-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl text-gray-800">ReWardrobe: Where Fashion Meets Sustainability</h1>
          <p className="text-xl text-gray-600 mt-2">Empowering conscious fashion choices, one outfit at a time.</p>
          <img 
            src="https://picsum.photos/1200/600" 
            alt="Diverse individuals in thrifted outfits" 
            className="mt-8 w-full h-auto shadow-lg" 
          />
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-600 mt-4">At ReWardrobe, we promote sustainable fashion and reduce waste by giving clothes a second life.</p>
        <h3 className="text-2xl font-medium text-gray-700 mt-6">Vision: A future where style and sustainability coexist.</h3>
        <div className="flex justify-center mt-6 space-x-8">
          <div>
            <FaRecycle className="text-4xl text-green-600 mx-auto" />
            <p className="text-gray-600 mt-2">Recycling</p>
          </div>
          <div>
            <FaGlobe className="text-4xl text-blue-600 mx-auto" />
            <p className="text-gray-600 mt-2">The Earth</p>
          </div>
          <div>
            <FaTshirt className="text-4xl text-purple-600 mx-auto" />
            <p className="text-gray-600 mt-2">Clothing</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 text-center">
        <h2 className="text-3xl text-gray-800">How It All Began</h2>
        <p className="text-lg text-gray-600 mt-4 px-6">
          ReWardrobe was born out of the desire to solve the problem of fast fashion waste. We wanted to create a platform where people could find affordable, sustainable fashion options.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl text-gray-800">Why ReWardrobe?</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="bg-white p-6 shadow-lg">
            <h3 className="text-2xl text-green-600">Affordable & Trendy</h3>
            <p className="text-gray-600 mt-2">Find stylish outfits without breaking the bank.</p>
          </div>
          <div className="bg-white p-6 shadow-lg">
            <h3 className="text-2xl text-green-600">Sustainable</h3>
            <p className="text-gray-600 mt-2">Join the movement to reduce waste and promote sustainability.</p>
          </div>
          <div className="bg-white p-6 shadow-lg">
            <h3 className="text-2xl text-green-600">Empowering Choices</h3>
            <p className="text-gray-600 mt-2">Be part of a community that values conscious fashion decisions.</p>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-12 text-center">
        <h2 className="text-3xl text-gray-800">Our Impact So Far</h2>
        <div className="mt-8 flex justify-center space-x-16">
          <div>
            <h3 className="text-4xl font-bold text-green-600">500K+</h3>
            <p className="text-lg text-gray-600">Clothes Recycled</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-600">200K+</h3>
            <p className="text-lg text-gray-600">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-600">1M+</h3>
            <p className="text-lg text-gray-600">Pounds of Waste Diverted</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl text-gray-800">Be Part of the Change!</h2>
        <div className="mt-6">
          <button 
            className="bg-green-600 text-white px-6 py-3 mr-4"
            onClick={() => window.location.href = '/collection'} 
          >
            Shop Now
          </button>
          <button 
            className="bg-purple-600 text-white px-6 py-3" 
            onClick={() => window.location.href = '/sell'}
          >
            Sell Your Clothes
          </button>
        </div>
        <img 
          src="https://picsum.photos/800/400" 
          alt="Community engaging in sustainable fashion" 
          className="mt-8 w-full h-auto shadow-lg" 
        />
      </section>
    </div>
  );
};

export default AboutPage;
