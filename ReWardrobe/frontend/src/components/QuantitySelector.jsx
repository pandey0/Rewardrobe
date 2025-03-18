import React from "react";

const QuantitySelector = ({ quantity, handleIncrease, handleDecrease }) => {
  return (
    <div className="mt-6 font-poppins"> {/* Added font-poppins class here */}
      <p className="pb-2 text-xs sm:text-sm text-gray-500">Quantity</p>
      <div className="flex items-center space-x-2">
        {/* Decrease Button */}
        <button
          aria-label="Decrease quantity"
          className="flex h-10 w-10 cursor-pointer items-center justify-center border border-gray-300 rounded-md duration-200 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
          onClick={handleDecrease}
        >
          −
        </button>
        
        {/* Display Quantity */}
        <div
          aria-live="polite"
          className="flex h-10 w-10 items-center justify-center border-t border-b border-gray-300 text-lg font-semibold text-center"
        >
          {quantity}
        </div>
        
        {/* Increase Button */}
        <button
          aria-label="Increase quantity"
          className="flex h-10 w-10 cursor-pointer items-center justify-center border border-gray-300 rounded-md duration-200 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
