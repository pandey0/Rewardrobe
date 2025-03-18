import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext'; // Import the context
import { Link, useNavigate } from 'react-router-dom';
import LoginalertModal from './LoginalertModal.jsx';

const ProductItem = ({ products }) => {
  const { currency, Isloggedin, isModalOpen, openModal, closeModal } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleProductClick = (e, productId) => {
    e.preventDefault();

    if (!Isloggedin) {
      openModal(); // Show modal if not logged in
    } else {
      navigate(`/product/${productId}`); // Navigate to product details if logged in
    }
  };

  return (
    <div className="product-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 font-poppins"> {/* Added font-poppins here */}
      {products.map((item) => (
        <Link 
          key={item.id} 
          onClick={(e) => handleProductClick(e, item.id)} 
          className="group relative bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="relative">
            <img 
              className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 ease-in-out" 
              src={item.images[0]} 
              alt={item.name} 
            />
          </div>
          <div className="p-3 sm:p-4 group-hover:scale-105 transition-transform duration-500 ease-in-out">
            <p className="text-sm sm:text-base text-gray-800 group-hover:text-blue-500 transition-colors duration-300 truncate">
              {item.name}
            </p>
            <p className="text-sm font-medium text-gray-600">
              {currency}{item.price}
            </p>
          </div>
          {item.previousPrice && (
            <p className="absolute top-2 right-2 text-xs text-gray-500 line-through">
              {currency}{item.previousPrice}
            </p>
          )}
        </Link>
      ))}

      {/* Modal for non-logged-in users */}
      <LoginalertModal 
        isOpen={isModalOpen} // Pass modal visibility state
        onClose={closeModal} // Close the modal
      />
    </div>
  );
};

export default ProductItem;
