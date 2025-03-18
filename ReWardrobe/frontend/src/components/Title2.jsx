import React from 'react';

const TitleNew = ({ mainText, subText }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl sm:text-3xl text-gray-800 mb-4 font-poppins">{mainText}</h2>
      <p className="text-gray-500 font-poppins">{subText}</p>
    </div>
  );
};

export default TitleNew;
