import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-4">
      <p className="text-gray-500 text-lg sm:text-xl font-semibold font-poppins">
        {text1}
        <span className="text-gray-600 font-medium text-lg sm:text-xl font-poppins">
          {text2}
        </span>
      </p>
      <p className="w-8 sm:w-12 h-[2px] bg-gray-500"></p>
    </div>
  );
}

export default Title;
