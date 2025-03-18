import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Logic to handle ellipses for large pages
  const renderPageNumbers = () => {
    if (totalPages <= 10) {
      return pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 text-sm text-gray-700 ${page === currentPage ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
        >
          {page}
        </button>
      ));
    }

    // When totalPages is large, show first and last pages + ellipses
    const visiblePages = [];
    if (currentPage > 3) visiblePages.push(1, '...');
    if (currentPage > 2) visiblePages.push(currentPage - 1);
    visiblePages.push(currentPage);
    if (currentPage < totalPages - 1) visiblePages.push(currentPage + 1);
    if (currentPage < totalPages - 2) visiblePages.push('...');
    if (currentPage < totalPages - 3) visiblePages.push(totalPages);

    return visiblePages.map((page, index) => (
      <button
        key={index}
        onClick={() => handlePageChange(page)}
        className={`px-4 py-2 text-sm text-gray-700 ${page === currentPage ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'} ${page === '...' ? 'text-gray-400' : ''}`}
        disabled={page === '...'}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="flex justify-center mt-8 font-poppins">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500"
        >
          Previous
        </button>

        {renderPageNumbers()}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
