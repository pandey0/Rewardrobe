import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext'; 
import ProductItem from './ProductItem'; 

const ProductGrid = ({ products }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div className="product-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 font-poppins">
      {products.map((item) => (
        <ProductItem key={item.id} item={item} currency={currency} />
      ))}
    </div>
  );
};

export default ProductGrid;
