import React, { useState } from 'react';
import ImageUpload from './sellImageUpload'; // Import ImageUpload

const ProductForm = ({ index, handleInputChange, handleImageUpload, removeProduct }) => {
  const [product, setProduct] = useState({
    itemName: '',
    itemCategory: '',
    itemPrice: '',
    itemDescription: '',
    itemMRP: '',
    itemImages: [], // Manage images here
  });

  // Handle input changes for product fields
  const handleFieldChange = (e, field) => {
    setProduct({ ...product, [field]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        alert('Product submitted successfully!');
        // You can also reset the form or handle other actions after successful submission
      } else {
        alert('Failed to submit product');
      }
    } catch (error) {
      console.error('Error submitting product:', error);
    }
  };

  return (
    <div className="bg-white p-6 shadow-md mb-6">
      <h3 className="text-xl mb-4 font-poppins">Product {index + 1}</h3>

      {/* Product Name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-poppins">Item Name</label>
        <input
          type="text"
          value={product.itemName}
          onChange={(e) => handleFieldChange(e, 'itemName')}
          className="w-full px-4 py-2 border font-poppins"
        />
      </div>

      {/* Product Category */}
      <div className="mb-4">
        <label className="block text-gray-700 font-poppins">Category</label>
        <select
          value={product.itemCategory}
          onChange={(e) => handleFieldChange(e, 'itemCategory')}
          className="w-full px-4 py-2 border font-poppins"
        >
          <option value="">Select Category</option>
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
          <option value="Footwear">Footwear</option>
          <option value="Bags">Bags</option>
        </select>
      </div>

      {/* Product Price */}
      <div className="mb-4">
        <label className="block text-gray-700 font-poppins">Price</label>
        <input
          type="number"
          value={product.itemPrice}
          onChange={(e) => handleFieldChange(e, 'itemPrice')}
          className="w-full px-4 py-2 border font-poppins"
        />
      </div>

      {/* Product Description */}
      <div className="mb-4">
        <label className="block text-gray-700 font-poppins">Description</label>
        <textarea
          value={product.itemDescription}
          onChange={(e) => handleFieldChange(e, 'itemDescription')}
          className="w-full px-4 py-2 border font-poppins"
        />
      </div>

      {/* Product MRP */}
      <div className="mb-4">
        <label className="block text-gray-700 font-poppins">MRP</label>
        <input
          type="number"
          value={product.itemMRP}
          onChange={(e) => handleFieldChange(e, 'itemMRP')}
          className="w-full px-4 py-2 border font-poppins"
        />
      </div>

      {/* Image Upload */}
      <div className="mb-4">
        <label className="block text-gray-700 font-poppins">Upload Images</label>
        <input
          type="file"
          multiple
          onChange={(e) => handleImageUpload(e, index)}
          className="w-full px-4 py-2 border font-poppins"
        />
        <ImageUpload images={product.itemImages} />
      </div>

      {/* Submit Button */}
      <div className="flex justify-between items-center">
        
        {/* Remove Product Button */}
        <button
          type="button"
          onClick={() => removeProduct(index)}
          className="bg-red-500 text-white py-2 px-4 font-poppins"
        >
          Remove Product
        </button>
      </div>
    </div>
  );
};

export default ProductForm;
