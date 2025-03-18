import React from 'react';

const FilterSection = ({ filters, handleFilterChange }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      {/* Filter Title */}
      <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Filters</h3>

      {/* Category Filter */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Category</h4>
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="w-full p-2 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          <option value="Apparel">Apparel</option>
          <option value="Footwear">Footwear</option>
          <option value="Accessories">Accessories</option>
          <option value="Outerwear">Outerwear</option>
        </select>
      </div>

      {/* Size Filter */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Size</h4>
        <select
          name="size"
          value={filters.size}
          onChange={handleFilterChange}
          className="w-full p-2 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Sizes</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>

      {/* Color Filter */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Color</h4>
        <select
          name="color"
          value={filters.color}
          onChange={handleFilterChange}
          className="w-full p-2 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Colors</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
          <option value="gray">Gray</option>
          <option value="white">White</option>
        </select>
      </div>

      {/* Material Filter */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Material</h4>
        <select
          name="material"
          value={filters.material}
          onChange={handleFilterChange}
          className="w-full p-2 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Materials</option>
          <option value="cotton">Cotton</option>
          <option value="bamboo">Bamboo</option>
          <option value="wool">Wool</option>
          <option value="recycled">Recycled</option>
        </select>
      </div>

      {/* Brand Filter */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Brand</h4>
        <select
          name="brand"
          value={filters.brand}
          onChange={handleFilterChange}
          className="w-full p-2 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Brands</option>
          <option value="EcoBrand">EcoBrand</option>
          <option value="SustainableCo">SustainableCo</option>
          <option value="GreenWear">GreenWear</option>
        </select>
      </div>

      {/* Price Range */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Price Range</h4>
        <div className="flex justify-between items-center">
          <input
            type="number"
            name="priceMin"
            value={filters.priceMin}
            onChange={handleFilterChange}
            className="w-1/2 p-2 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Min"
          />
          <span className="mx-2 text-gray-600">-</span>
          <input
            type="number"
            name="priceMax"
            value={filters.priceMax}
            onChange={handleFilterChange}
            className="w-1/2 p-2 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Max"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
