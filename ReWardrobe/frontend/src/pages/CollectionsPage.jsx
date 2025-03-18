import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';
import Pagination from '../components/Pagination';
import FilterSection from '../components/FilterSection';
import SortBy from '../components/SortBy';
import SearchBar from '../components/SearchBar';

const CollectionPage = () => {
  const { product, loading, error } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    size: '',
    color: '',
    material: '',
    brand: '',
    priceMin: 0,
    priceMax: 1000,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('price-asc');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!loading && !error) {
      setFilteredProducts(product); // Initialize with all products
    }
  }, [product, loading, error]);

  if (loading) return <div>Loading collection...</div>;
  if (error) return <div>{error}</div>;

  const filterProducts = (products) => {
    return products.filter((item) => {
      return (
        (!filters.category || item.category === filters.category) &&
        (!filters.size || item.size.includes(filters.size)) &&
        (!filters.color || item.color.includes(filters.color)) &&
        (!filters.material || item.description.includes(filters.material)) &&
        (!filters.brand || item.brand === filters.brand) &&
        item.price >= filters.priceMin && item.price <= filters.priceMax
      );
    });
  };

  const sortProducts = (products) => {
    switch (sortBy) {
      case 'price-asc':
        return products.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return products.sort((a, b) => b.price - a.price);
      case 'rating':
        return products.sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const itemsPerPage = 10;
  const filteredAndSearchedProducts = filterProducts(filteredProducts).filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const sortedProducts = sortProducts(filteredAndSearchedProducts);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="my-12 px-4 sm:px-6 md:px-8 font-poppins">
      {/* Title Section */}
      <div className="text-center py-8">
        <Title text1={'Latest'} text2={'Collections'} />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-wrap sm:flex-nowrap justify-between gap-6">
        {/* Left - Filter Section */}
        <div className="w-full sm:w-1/4 md:w-1/5 lg:w-1/6">
          <FilterSection filters={filters} handleFilterChange={handleFilterChange} />
        </div>

        {/* Right - Product and Sorting */}
        <div className="w-full sm:w-3/4 md:w-4/5 lg:w-5/6">
          <div className="flex justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Products</h2>
            <SortBy sortBy={sortBy} handleSortChange={handleSortChange} />
          </div>

          {/* Product Items */}
          <ProductItem products={currentProducts} />

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
