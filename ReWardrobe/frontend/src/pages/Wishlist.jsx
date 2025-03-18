import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, currency } = useContext(ShopContext);

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto py-10 px-4 font-poppins">
        <h2 className="text-2xl font-semibold">Your Wishlist is Empty</h2>
        <p className="mt-4">Browse our products and add them to your wishlist.</p>
        <Link to="/collection" className="text-blue-500 underline mt-4 inline-block">Go to Collections</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4 font-poppins">
      <h2 className="text-2xl font-semibold">Your Wishlist</h2>
      <div className="mt-6">
        {wishlist.map((item) => (
          <div key={item.id} className="flex justify-between items-center py-4 border-b">
            <div className="flex items-center">
              <img src={item.images[0]} alt={item.name} className="w-20 h-20 object-cover mr-4" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-lg">{currency}{item.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link to={`/product/${item.id}`} className="text-blue-500 hover:underline">
                View Product
              </Link>
              <button
                onClick={() => removeFromWishlist(item.id, item.selectedSize, item.selectedColor)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
