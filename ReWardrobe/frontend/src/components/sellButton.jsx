import React from 'react';

const Button = ({ onClick, text, classes }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`py-3 px-8 text-lg font-poppins hover:bg-opacity-80 transition duration-300 ${classes}`} // Added font-poppins class here
    >
      {text}
    </button>
  );
};

export default Button;
