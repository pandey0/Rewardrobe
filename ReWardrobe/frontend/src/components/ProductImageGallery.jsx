import React, { useState } from 'react';

const ProductImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="product-image-gallery font-poppins">
      {/* Main Image */}
      <div className="main-image mb-4">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-96 sm:h-80 md:h-96 object-cover rounded-lg transition-transform duration-300"
        />
      </div>

      {/* Thumbnail Gallery */}
      <div className="thumbnail-gallery flex space-x-2 overflow-x-auto py-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity duration-300"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
