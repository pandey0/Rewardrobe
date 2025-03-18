import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

const ProductDescription = ({
  name,
  rating,
  reviews,
  availability,
  brand,
  category,
  sku,
  price,
  previousPrice,
  description,
}) => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
      <h2 className="pt-3 text-2xl sm:text-3xl font-bold lg:pt-0">{name}</h2>
      <div className="mt-2">
        <div className="flex items-center">
          <Rater style={{ fontSize: "20px" }} total={5} interactive={false} rating={rating || 0} />
          <p className="ml-3 text-sm sm:text-base text-gray-400">({reviews || 0})</p>
        </div>
      </div>
      <p className="mt-4 font-semibold">
        Availability:{" "}
        {availability ? <span className="text-green-600">In Stock</span> : <span className="text-red-600">Out of Stock</span>}
      </p>
      <p className="font-semibold">Brand: <span className="font-normal">{brand}</span></p>
      <p className="font-semibold">Category: <span className="font-normal">{category}</span></p>
      <p className="font-semibold">SKU: <span className="font-normal">{sku}</span></p>
      <p className="mt-4 text-3xl sm:text-4xl font-bold text-violet-900">
        ${price}{" "}
        <span className="text-xs sm:text-sm text-gray-400 line-through">${previousPrice}</span>
      </p>
      <p className="pt-4 sm:pt-5 text-sm sm:text-base leading-5 text-gray-600">{description}</p>
    </div>
  );
};

export default ProductDescription;
