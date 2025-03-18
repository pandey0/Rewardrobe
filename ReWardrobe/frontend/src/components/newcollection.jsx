import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const Newcollection = () => {
  const { product, loading, error } = useContext(ShopContext);
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    if (!loading && !error && product.length > 0) {
      setNewCollection(product.slice(0, 8)); // Only slice if there are products
    }
  }, [product, loading, error]);

  if (loading) return <div className="text-center text-xl font-poppins">Loading new collection...</div>;
  if (error) return <div className="text-center text-red-600 font-poppins">{error}</div>;
  if (newCollection.length === 0) return <div className="text-center text-xl text-gray-500 font-poppins">No new collection available at the moment.</div>;

  return (
    <div className="my-11 px-4 sm:px-6 md:px-8 font-poppins">
      <div className="text-center py-8 text-3xl sm:text-4xl lg:text-5xl">
        <Title text1="New" text2="Collection" />
        <p className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto text-xs sm:text-sm md:text-base text-gray-500">
          Discover our latest collection of sustainable and stylish clothing. Shop now and make a difference with every purchase!
        </p>
      </div>

      <ProductItem products={newCollection} />
    </div>
  );
};

export default Newcollection;
