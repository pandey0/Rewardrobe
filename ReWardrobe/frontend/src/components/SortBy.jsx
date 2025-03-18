import React from 'react';

const SortBy = ({ sortBy, handleSortChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="sort" className="text-sm text-gray-700 font-poppins">Sort By:</label>
      <select
        id="sort"
        value={sortBy}
        onChange={handleSortChange}
        className="p-2 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default SortBy;
