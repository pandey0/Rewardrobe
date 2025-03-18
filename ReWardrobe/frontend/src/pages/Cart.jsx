//  import React, { useContext } from "react";
//  import { ShopContext } from "../context/ShopContext";
//  import { BiTrash } from "react-icons/bi";
//  import { Link } from "react-router-dom";

//  const Cart = () => {
//    const { cart, removeFromCart, updateQuantity } = useContext(ShopContext);

//    const handleRemove = (productId, selectedSize, selectedColor) => {
//      removeFromCart(productId, selectedSize, selectedColor);
//    };

//    const handleQuantityChange = (productId, selectedSize, selectedColor, quantity) => {
//      updateQuantity(productId, selectedSize, selectedColor, quantity);
//    };

//    const calculateTotalPrice = () => {
//      return cart.reduce(
//        (total, item) => total + item.price * item.quantity,
//        0
//      );
//    };

//    return (
//      <section className="container mx-auto max-w-[1200px] py-10 px-4 lg:px-10 font-poppins">
//        <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
//        {cart.length === 0 ? (
//          <div>Your cart is empty</div>
//        ) : (
//          <div className="space-y-6">
//            {cart.map((item) => (
//              <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex items-center justify-between bg-white p-4 shadow-md rounded-md">
//                <div className="flex items-center space-x-6">
//                  {/* Product Image */}
//                  <img src={item.images[0]} alt={item.name} className="h-24 w-24 object-cover rounded-md" />
//                  <div>
//                    <h2 className="font-semibold">{item.name}</h2>
//                    <p className="text-gray-500">Size: {item.selectedSize}</p>
//                    <p className="text-gray-500">Color: {item.selectedColor}</p>
//                    <p className="text-lg font-semibold">{item.price}</p>
//                  </div>
//                </div>

//                {/* Quantity and Remove */}
//                <div className="flex items-center space-x-4">
//                  {/* Quantity Selector */}
//                  <input
//                    type="number"
//                    value={item.quantity}
//                    min="1"
//                    className="w-16 text-center border border-gray-300 rounded-md"
//                    onChange={(e) => handleQuantityChange(item.id, item.selectedSize, item.selectedColor, parseInt(e.target.value))}
//                  />
//                  {/* Remove Button */}
//                  <button
//                    className="text-red-500"
//                    onClick={() => handleRemove(item.id, item.selectedSize, item.selectedColor)}
//                  >
//                    <BiTrash className="h-5 w-5" />
//                  </button>
//                </div>
//              </div>
//            ))}

//            {/* Cart Summary */}
//            <div className="flex justify-between mt-6">
//              <h3 className="font-semibold">Total Price</h3>
//              <p className="text-lg font-semibold">{calculateTotalPrice()}</p>
//            </div>

//            {/* Checkout Button */}
//            <div className="mt-6">
//              <Link to="/PlaceOrder">
//                <button className="w-full py-3 bg-violet-900 text-white text-lg font-semibold rounded-md hover:bg-blue-800">
//                  Proceed to Checkout
//                </button>
//              </Link>
//            </div>
//          </div>
//        )}
//      </section>
//    );
//  };

//  export default Cart;






import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(ShopContext);
  const[sellincart, setsellincart] = useState(false);

  const handleRemove = (productId, selectedSize, selectedColor) => {
    removeFromCart(productId, selectedSize, selectedColor);
  };

  const handleQuantityChange = (productId, selectedSize, selectedColor, quantity) => {
    updateQuantity(productId, selectedSize, selectedColor, quantity);
  };

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="contianer mx-auto py-10 px-4 lg:px-10 font-poppins">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <button className="text-2xl font-semibold"onClick={()=>setsellincart(false)}>Your Cart</button>
        <button className="text-2xl font-semibold"onClick={()=>setsellincart(true)}>selling cart</button>
      </div>

      {!sellincart ? (
        <section className="container mx-auto max-w-[1200px] py-10 px-4 lg:px-10 font-poppins">
               <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
               {cart.length === 0 ? (
                 <div>Your cart is empty</div>
               ) : (
                 <div className="space-y-6">
                   {cart.map((item) => (
                     <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex items-center justify-between bg-white p-4 shadow-md rounded-md">
                       <div className="flex items-center space-x-6">
                         {/* Product Image */}
                         <img src={item.images[0]} alt={item.name} className="h-24 w-24 object-cover rounded-md" />
                         <div>
                           <h2 className="font-semibold">{item.name}</h2>
                           <p className="text-gray-500">Size: {item.selectedSize}</p>
                           <p className="text-gray-500">Color: {item.selectedColor}</p>
                           <p className="text-lg font-semibold">{item.price}</p>
                         </div>
                       </div>
        
                       {/* Quantity and Remove */}
                       <div className="flex items-center space-x-4">
                         {/* Quantity Selector */}
                         <input
                           type="number"
                           value={item.quantity}
                           min="1"
                           className="w-16 text-center border border-gray-300 rounded-md"
                           onChange={(e) => handleQuantityChange(item.id, item.selectedSize, item.selectedColor, parseInt(e.target.value))}
                         />
                         {/* Remove Button */}
                         <button
                           className="text-red-500"
                           onClick={() => handleRemove(item.id, item.selectedSize, item.selectedColor)}
                         >
                           <BiTrash className="h-5 w-5" />
                         </button>
                       </div>
                     </div>
                   ))}
        
                   {/* Cart Summary */}
                   <div className="flex justify-between mt-6">
                     <h3 className="font-semibold">Total Price</h3>
                     <p className="text-lg font-semibold">{calculateTotalPrice()}</p>
                   </div>
        
                   {/* Checkout Button */}
                   <div className="mt-6">
                     <Link to="/PlaceOrder">
                       <button className="w-full py-3 bg-violet-900 text-white text-lg font-semibold rounded-md hover:bg-blue-800">
                         Proceed to Checkout
                       </button>
                     </Link>
                   </div>
                 </div>
               )}
             </section>
      ):
      (
        <section className="container mx-auto max-w-[1200px] py-10 px-4 lg:px-10 font-poppins">
          <h1 className="text-2xl font-semibold mb-6">sellign cart</h1>
          {sellingcart.length === 0 ? (
            <div>sellincart is empty</div>
          ) : (
            sellingcart.map((item) => (
              <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex items-center justify-between bg-white p-4 shadow-md rounded-md">
                <div className="flex items-center space-x-6">
                  {/* Product Image */}
                  <img src={item.images[0]} alt={item.name} className="h-24 w-24 object-cover rounded-md" />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-gray-500">Size: {item.selectedSize}</p>
                    <p className="text-gray-500">Color: {item.selectedColor}</p>
                    <p className="text-lg font-semibold">{item.price}</p>
                  </div>
                </div>
              </div>   
            )
          )
          )}

          <div>seling cart</div>
          </section>
      )}
        
    </div>    
  );
};

export default Cart;
