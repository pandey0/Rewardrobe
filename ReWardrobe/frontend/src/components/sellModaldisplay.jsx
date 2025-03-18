import React from 'react';

const ProductModal = ({ isModalOpen, products, handleFinalSubmit, closeModal }) => {
  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-8 shadow-xl w-96 relative">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-gray-600 text-xl"
          >
            &times; {/* Close button */}
          </button>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-poppins">Product Summary</h3>
          <ul className="space-y-4">
            {products.map((product, index) => (
              <li key={index} className="border-b-2 pb-4">
                <h3 className="font-semibold text-gray-800 font-poppins">{product.itemName}</h3>
                <p className="font-poppins">Category: {product.itemCategory}</p>
                <p className="font-poppins">MRP: ₹{product.itemMRP}</p>
                <p className="font-poppins">Selling Price: ₹{product.itemPrice}</p>
                <p className="font-poppins">Description: {product.itemDescription}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleFinalSubmit}
              className="bg-green-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-600 transition duration-300 font-poppins"
            >
              Final Submit
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductModal;
