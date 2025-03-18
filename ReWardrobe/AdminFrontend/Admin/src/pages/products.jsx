import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importing Axios

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products using Axios with your API endpoint
    axios
      .get("http://localhost:5100/api/adminfunctions/getproduct",{ withCredentials: true }) // Use your API endpoint
      .then((response) => {
        // Check if response contains products and set them
        if (response.data && response.data.products) {
          setProducts(response.data.products);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          // If 401 error, show an alert or handle accordingly
          alert("Please log in first");
          navigate("/login"); // Redirect to login page
        } else {
          console.error("Error fetching products:", error); // Handle other errors
        }
      });
  }, []);

  // Handle card click to navigate to the product detail page
  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded"
        onClick={() => navigate("/addproduct")}
      >
        Add Product
      </button>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update search query
        className="mb-4 p-2 w-full border border-gray-300 rounded"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Render filtered products */}
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="flex bg-white shadow-lg rounded-lg cursor-pointer"
              onClick={() => handleCardClick(product._id)}
            >
              {/* Image */}
              <img
                src={product.image[0]} // Show the first image from the array
                alt={product.name}
                className="w-32 h-32 object-cover rounded-l-lg"
              />
              <div className="flex flex-col p-4">
                <h2 className="font-bold text-xl mb-2">{product.name}</h2>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="text-lg font-semibold">${product.price}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-sm text-gray-500">{product.subcategory}</p>
                <p className="text-sm text-gray-500">Brand: {product.brand}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
