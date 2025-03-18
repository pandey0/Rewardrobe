import React, { useState } from "react";

const SizeColorSelector = ({ sizes, colors, onSelectSize, onSelectColor }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]); // default to first size
  const [selectedColor, setSelectedColor] = useState(colors[0]); // default to first color

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    onSelectSize(size); // Pass the selected size back to parent
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    onSelectColor(color); // Pass the selected color back to parent
  };

  return (
    <>
      {/* Size Selection */}
      <div className="mt-6">
        <p className="pb-2 text-xs sm:text-sm text-gray-500 font-poppins">Size</p>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size, index) => (
            <div
              key={index}
              onClick={() => handleSizeSelect(size)}
              className={`flex h-10 w-10 cursor-pointer items-center justify-center border border-gray-300 rounded-md duration-200 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500 ${size === selectedSize ? "bg-gray-300" : ""}`}
              aria-label={`Size: ${size}`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div className="mt-6">
        <p className="pb-2 text-xs sm:text-sm text-gray-500 font-poppins">Color</p>
        <div className="flex gap-2">
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => handleColorSelect(color)}
              className={`h-10 w-10 cursor-pointer border-2 border-white rounded-full bg-${color}-600 duration-200 hover:ring-2 hover:ring-${color}-500 focus:ring-2 focus:ring-${color}-500 active:ring-2 active:ring-${color}-500 ${color === selectedColor ? "ring-4 ring-white" : ""}`}
              style={{ backgroundColor: color }}
              aria-label={`Color: ${color}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SizeColorSelector;
