import React from 'react';

const SearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <div className="mb-6 font-poppins"> {/* Added font-poppins class here */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search for products..."
        className="w-full p-3 text-sm bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
