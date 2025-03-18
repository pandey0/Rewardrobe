import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";

const AddToCartButtons = ({ onAddToCart, onAddToWishlist }) => {
  return (
    <div className="mt-7 flex flex-row items-center gap-6">
      <button
        className="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800 font-medium text-sm"
        onClick={onAddToCart}
      >
        <BiShoppingBag className="mx-2" />
        <p className="text-sm font-medium">Add to Cart</p>
      </button>
      <button
        className="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300 font-medium text-sm"
        onClick={onAddToWishlist}
      >
        <AiOutlineHeart className="mx-2" />
        <p className="text-sm font-medium">Add to Wishlist</p>
      </button>
    </div>
  );
};

export default AddToCartButtons;
