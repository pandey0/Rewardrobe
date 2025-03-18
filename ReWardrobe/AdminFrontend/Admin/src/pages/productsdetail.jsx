import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"; // Importing Axios

const ProductDetail = () => {
  const { productId } = useParams(); // Extract productId from URL
  const [product, setProduct] = useState(null); // State for product data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling
  const [isEditing, setIsEditing] = useState(false); // State to track edit mode
  const [updatedProduct, setUpdatedProduct] = useState({}); // State for updated product data
  const [imageUrls, setImageUrls] = useState([]); // State for managing image updates
  const [newImage, setNewImage] = useState(null); // State to store the new image file
  const [uploadedImageUrl, setUploadedImageUrl] = useState(""); // State for storing the uploaded image URL
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setError(null); // Reset error on each fetch attempt

    axios
      .get(`http://localhost:5100/api/adminfunctions/getproduct/${productId}`,{ withCredentials: true }) // API for a single product
      .then((response) => {
        if (response.data) {
          setProduct(response.data.product); // Set product data to state
          setUpdatedProduct(response.data.product); // Pre-fill the updated product with the current data
          setImageUrls(response.data.product.image); // Pre-fill the images state
        }
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching product details:", error); // Handle API errors
        setError("There was an error fetching the product details.");
        setLoading(false); // Stop loading on error
      });
  }, [productId]);

  // Function to handle changes in the input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleRemoveImage = (index) => {
    const updatedImages = [...imageUrls]; // Copy the current image URLs
    updatedImages.splice(index, 1); // Remove the image at the specified index
    setImageUrls(updatedImages); // Update the state with the new list of images
  };  

  // Handle image URL changes for editing
  const handleImageChange = (e, index) => {
    const updatedImages = [...imageUrls];
    updatedImages[index] = e.target.value;
    setImageUrls(updatedImages);
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewImage(file);

    // Show image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImageUrl(reader.result); // Store the image preview URL
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Function to handle image upload and get the URL
  const handleUploadImage = () => {
    const formData = new FormData();
    formData.append("image1", newImage); // Append the image file to form data

    axios
      .post("http://localhost:5100/api/adminfunctions/getimagelink", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set header for file upload
        },
      },{ withCredentials: true })
      .then((response) => {
        setUploadedImageUrl(response.data.link); // Store the returned image URL
        setImageUrls((prevState) => [...prevState, response.data.link]); // Add the new image URL to the image list
        alert("Image uploaded successfully!");
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        alert("There was an error uploading the image.");
      });
  };

  // Handle form submission to update product
  const handleUpdateProduct = () => {
    const updatedProductData = {
      ...updatedProduct,
      image: imageUrls, // Update the images with new URLs
    };

    axios
      .put(`http://localhost:5100/api/adminfunctions/updateproduct/${productId}`, updatedProductData,{ withCredentials: true })
      .then((response) => {
        alert("Product updated successfully!");
        setIsEditing(false); // Disable edit mode
        setProduct(updatedProductData); // Update the product state with new data
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        alert("There was an error updating the product.");
      });
  };

  // Handle product deletion
  const handleDeleteProduct = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios
        .delete(`http://localhost:5100/api/adminfunctions/deleteproduct/${productId}`,{ withCredentials: true })
        .then(() => {
          alert("Product deleted successfully!");
          navigate("/products"); // Redirect to products page after deletion
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
          alert("There was an error deleting the product.");
        });
    }
  };

  // Render loading state or error message
  if (loading) return <div className="text-center py-6 text-lg">Loading...</div>;
  if (error) return <div className="text-center py-6 text-lg text-red-600">{error}</div>;

  // If product is not found, show a message
  if (!product) return <div className="text-center py-6 text-lg">Product not found</div>;

  return (
    <div className="max-w-screen-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">{isEditing ? "Edit Product" : "Product Details"}</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column: Images */}
        <div className="w-full lg:w-2/5 space-y-6">
          <h2 className="text-xl font-medium text-gray-700">Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {imageUrls.map((imgUrl, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Display existing image */}
                <img
                  src={imgUrl}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-xl shadow-md mb-4"
                />
                {isEditing && (
                  <>
                    {/* Editable URL link input below the image */}
                    <input
                      type="text"
                      value={imgUrl}
                      onChange={(e) => handleImageChange(e, index)}
                      className="w-full p-3 border rounded-lg text-lg mb-3 bg-gray-100 focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter new image URL"
                    />
                    {/* Remove Image Button */}
                    <button
                      onClick={() => handleRemoveImage(index)}
                      className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition-all"
                    >
                      Remove Image
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Image Upload Section */}
          {isEditing && (
            <div className="mt-6">
              <label className="text-lg font-medium text-gray-700">Upload New Image</label>
              <input
                type="file"
                onChange={handleImageUpload}
                className="w-full p-3 border rounded-lg mb-3 bg-gray-100"
              />
              <button
                onClick={handleUploadImage}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all"
              >
                Upload Image
              </button>
              {uploadedImageUrl && (
                <div className="mt-4">
                  <h3 className="font-medium text-gray-700">Uploaded Image Preview:</h3>
                  <img
                    src={uploadedImageUrl}
                    alt="Preview"
                    className="w-full h-60 object-cover rounded-xl shadow-md mt-2"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Product Details */}
        <div className="w-full lg:w-3/5 space-y-6">
          {/* Loop through the fields */}
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Description", name: "description", type: "textarea" },
            { label: "Price", name: "price", type: "number" },
            { label: "Previous Price", name: "previousPrice", type: "number" },
            { label: "Category", name: "category", type: "text" },
            { label: "Subcategory", name: "subcategory", type: "text" },
            { label: "Size", name: "size", type: "text" },
            { label: "Stock", name: "stock", type: "number" },
            { label: "Colors", name: "colors", type: "text" },
            { label: "Rating", name: "rating", type: "number" },
            { label: "Reviews", name: "reviews", type: "number" },
            { label: "Brand", name: "brand", type: "text" },
            { label: "SKU", name: "sku", type: "text" },
            { label: "Material", name: "material", type: "text" },
            { label: "Weight", name: "weight", type: "number" },
            { label: "Tags", name: "tags", type: "text" },
            { label: "Availability", name: "availability", type: "text" },
            { label: "Trending", name: "trending", type: "text" },
            { label: "Stock Quantity", name: "stockQuantity", type: "number" },
          ].map((field) => (
            <div key={field.name}>
              <label className="text-lg font-medium text-gray-700">{field.label}</label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={updatedProduct[field.name] || ""}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                  rows="5"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={updatedProduct[field.name] || ""}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                />
              )}
            </div>
          ))}

          {/* Action Buttons */}
          <div className="flex space-x-6 mt-6 justify-center">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all"
              >
                Edit
              </button>
            ) : (
              <>
                <button
                  onClick={handleUpdateProduct}
                  className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition-all"
                >
                  Update
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 transition-all"
                >
                  Cancel
                </button>
              </>
            )}

            <button
              onClick={handleDeleteProduct}
              className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition-all"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
