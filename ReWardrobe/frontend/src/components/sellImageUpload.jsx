import React from 'react';

const ImageUpload = ({ images }) => {
  return (
    <div>
      {images.length > 0 && (
        <div className="mt-4">
          <h3 className="text-gray-700 mb-2 font-poppins">Image Preview</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.map((file, idx) => (
              <img
                key={idx}
                src={URL.createObjectURL(file)}
                alt={`Product Image ${idx + 1}`}
                className="w-full h-32 object-cover"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
