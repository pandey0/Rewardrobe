import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    previousPrice: '',
    category: '',
    subcategory: '',
    size: '',
    stock: '',
    colors: '',
    rating: '',
    reviews: '',
    brand: '',
    sku: '',
    material: '',
    weight: '',
    tags: '',
    availability: '',
    trending: '',
    stockQuantity: '',
  });

  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setImages((prevState) => ({
      ...prevState,
      [name]: files[0], // Store only the first selected image
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append product details
    Object.keys(product).forEach((key) => {
      formData.append(key, product[key]);
    });

    // Append images (image1, image2, etc.)
    Object.keys(images).forEach((key) => {
      if (images[key]) {
        formData.append(key, images[key]); // Only append if image is selected
      }
    });

    setLoading(true);
    setError('');

    try {
      // Use axios to send the POST request
      const response = await axios.post('http://localhost:5100/api/adminfunctions/addproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type for file upload
        },
      });

      // Handle success
      alert(response.data.message); // Show success message
      setLoading(false);
    } catch (error) {
      // Handle error
      setError(error.response ? error.response.data.message : 'Error adding product');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Price */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Previous Price */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Previous Price</label>
            <input
              type="number"
              name="previousPrice"
              value={product.previousPrice}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Subcategory */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Subcategory</label>
            <input
              type="text"
              name="subcategory"
              value={product.subcategory}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Size */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Size</label>
            <input
              type="text"
              name="size"
              value={product.size}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Stock */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Stock</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Colors */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Colors</label>
            <input
              type="text"
              name="colors"
              value={product.colors}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Rating */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <input
              type="number"
              name="rating"
              value={product.rating}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Reviews */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Reviews</label>
            <input
              type="number"
              name="reviews"
              value={product.reviews}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Brand */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Brand</label>
            <input
              type="text"
              name="brand"
              value={product.brand}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* SKU */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">SKU</label>
            <input
              type="text"
              name="sku"
              value={product.sku}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Material */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Material</label>
            <input
              type="text"
              name="material"
              value={product.material}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Weight */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Weight</label>
            <input
              type="number"
              name="weight"
              value={product.weight}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Tags */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Tags</label>
            <input
              type="text"
              name="tags"
              value={product.tags}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Availability */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Availability</label>
            <input
              type="text"
              name="availability"
              value={product.availability}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Trending */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Trending</label>
            <input
              type="text"
              name="trending"
              value={product.trending}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Stock Quantity */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Stock Quantity</label>
            <input
              type="number"
              name="stockQuantity"
              value={product.stockQuantity}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Images */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Product Images</label>
            <input
              type="file"
              name="image1"
              onChange={handleImageChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="file"
              name="image2"
              onChange={handleImageChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="file"
              name="image3"
              onChange={handleImageChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="file"
              name="image4"
              onChange={handleImageChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="file"
              name="image5"
              onChange={handleImageChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Adding Product...' : 'Add Product'}
          </button>
        </div>
      </form>

      {/* Error Message */}
      {error && (
        <div className="mt-4 text-center text-red-500">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
