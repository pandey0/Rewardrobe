import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FaStar } from 'react-icons/fa';
import { product } from '../assets/assets';

const ProductDetailPage = () => {
  const { id } = useParams(); // Get product ID from the URL
  const { currency } = useContext(ShopContext); // Access currency context
  const [selectedProduct, setSelectedProduct] = useState(null);
  console.log(id);

  // Fetch product details based on product ID
  useEffect(() => {
    const productDetail = product.find((prod) => prod.id === parseInt(id)); // Find the product by ID
    setSelectedProduct(productDetail);
  }, [id]);

  if (!selectedProduct) return <div>Product not found</div>;

  const { images, name, description, price, previousPrice, availability, rating, reviews, size, color } = selectedProduct;

  return (
    <div className="my-12 font-poppins">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Product Image Gallery */}
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center">
              <img
                src={images[0]} 
                alt={name} 
                className="w-full h-96 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="flex space-x-2">
              {images.slice(1).map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt={`Image ${index + 1}`} 
                  className="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-75"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-12">
            <h2 className="text-3xl font-semibold text-gray-800">{name}</h2>
            <p className="text-gray-500 mt-2">{description}</p>

            {/* Price Section */}
            <div className="mt-4">
              <p className="text-2xl font-bold text-green-600">{currency}{price}</p>
              {previousPrice && (
                <p className="text-sm text-gray-500 line-through">{currency}{previousPrice}</p>
              )}
            </div>

            {/* Availability */}
            <p className={`mt-2 ${availability ? 'text-green-500' : 'text-red-500'}`}>
              {availability ? 'In Stock' : 'Out of Stock'}
            </p>

            {/* Rating Section */}
            <div className="flex items-center space-x-2 mt-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'} />
                ))}
              </div>
              <span className="text-sm text-gray-500">({reviews} reviews)</span>
            </div>

            {/* Size Selector */}
            <div className="mt-6">
              <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
              <select id="size" name="size" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                {size.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Color Selector */}
            <div className="mt-4">
              <label htmlFor="color" className="block text-sm font-medium text-gray-700">Color</label>
              <div className="flex space-x-2">
                {color.map((c) => (
                  <div 
                    key={c} 
                    className={`w-6 h-6 rounded-full ${c === 'black' ? 'bg-black' : c === 'blue' ? 'bg-blue-500' : c === 'green' ? 'bg-green-500' : 'bg-gray-500'}`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-4">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
              <input type="number" id="quantity" name="quantity" defaultValue="1" min="1" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
            </div>

            {/* Add to Cart and Buy Now Buttons */}
            <div className="mt-6 flex space-x-4">
              <button 
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                disabled={!availability}
              >
                Add to Cart
              </button>
              <button 
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100"
                disabled={!availability}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
