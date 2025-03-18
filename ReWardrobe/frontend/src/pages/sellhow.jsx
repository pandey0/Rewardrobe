import React from 'react';
import ReactPlayer from 'react-player';
import TitleNew from '../components/Title2';
import { LuReceiptIndianRupee } from "react-icons/lu";
import { IoCashOutline } from "react-icons/io5";
import { FaFileUpload } from "react-icons/fa";
import { IoShirtOutline } from "react-icons/io5";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineInsertPhoto } from "react-icons/md";

const SellProtocolsPage = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">

      {/* Steps to Sell Section */}
      <section className="py-12">
        <TitleNew 
          mainText="How to Sell Your Products"
          subText="Follow these easy steps to start selling!" 
        />
        
        {/* YouTube Video Player */}
        <div className="flex justify-center mb-8">
          <ReactPlayer 
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with your YouTube URL
            className="react-player"
            width="100%"
            height="480px"
          />
        </div>

        {/* Step 1: Upload Item Details */}
        <div className="flex items-center mb-8">
          <FaFileUpload className="text-4xl text-gray-600 mr-4" />
          <div>
            <h2 className="text-2xl text-gray-800 mb-4">Step 1: Upload Your Item</h2>
            <p className="text-gray-600 mb-4">
              Start by taking clear photos of your item. Make sure to capture its details, such as the fabric, label, and any specific features. 
              Provide a detailed description and include size, brand, and condition. The more information you add, the better!
            </p>
          </div>
        </div>

        {/* Step 2: Set Your Price */}
        <div className="flex items-center mb-8">
          <LuReceiptIndianRupee className="text-4xl text-gray-600 mr-4" />
          <div>
            <h2 className="text-2xl text-gray-800 mb-4">Step 2: Set Your Price</h2>
            <p className="text-gray-600 mb-4">
              Be sure to set a competitive price for your item. Consider its condition, brand, and market value. 
              Offering fair and reasonable pricing can attract more buyers and increase your chances of selling quickly.
            </p>
          </div>
        </div>

        {/* Step 3: Get Paid */}
        <div className="flex items-center mb-8">
          <IoCashOutline className="text-4xl text-gray-600 mr-4" />
          <div>
            <h2 className="text-2xl text-gray-800 mb-4">Step 3: Get Paid</h2>
            <p className="text-gray-600 mb-4">
              Once your item sells, you’ll receive payment within 48 hours. We ensure that the process is secure and straightforward. 
              Enjoy your earnings and prepare to list more items!
            </p>
          </div>
        </div>
      </section>

      {/* Selling Tips Section */}
      <section className="py-12">
        <TitleNew 
          mainText="Selling Tips"
          subText="Tips to help you sell faster and for more!"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-6">
          <div className="text-center">
            <IoShirtOutline className="mx-auto mb-4 text-4xl text-gray-600" />
            <h3 className="text-xl text-gray-800 mb-2">Ensure Cleanliness</h3>
            <p className="text-gray-500">Make sure your items are clean and presentable. Items in good condition attract more buyers.</p>
          </div>
          <div className="text-center">
            <IoPricetagsOutline className="mx-auto mb-4 text-4xl text-gray-600" />
            <h3 className="text-xl text-gray-800 mb-2">Fair Pricing</h3>
            <p className="text-gray-500">Price your items fairly based on their condition and brand. Check similar items to stay competitive.</p>
          </div>
          <div className="text-center">
            <MdOutlineInsertPhoto className="mx-auto mb-4 text-4xl text-gray-600" />
            <h3 className="text-xl text-gray-800 mb-2">High-Quality Photos</h3>
            <p className="text-gray-500">Take clear, well-lit photos that show your items in the best light. The better the photos, the better the sale.</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-8 text-center">
        <p className="text-gray-600 mb-6">Ready to start selling? Upload your first item now!</p>
        <a href="/sell" className="bg-green-500 text-white py-3 px-8 text-lg  hover:bg-green-600 transition duration-300">
          Upload Your Item
        </a>
      </section>
    </div>
  );
};

export default SellProtocolsPage;
