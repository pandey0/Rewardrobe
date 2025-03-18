import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { ShopContext } from "../context/ShopContext"; 

const PlaceOrder = () => {
  const { cart, currency, delivery_fee } = useContext(ShopContext); // Assuming cart is already in the context
  const navigate = useNavigate();
  // Form state for delivery info
  const [deliveryInfo, setDeliveryInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    phone: ""
  });

  const [paymentMethod, setPaymentMethod] = useState("COD"); // Default payment method is COD

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({
      ...deliveryInfo,
      [name]: value
    });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = () => {
    // Handle order submission logic here (e.g., send data to backend)
    console.log("Order placed successfully with the following details:");
    console.log("Delivery Info:", deliveryInfo);
    console.log("Payment Method:", paymentMethod);
    navigate("/Payments",{
      state: {
        deliveryInfo,
        paymentMethod,
        totalcartvalue
      }
    }); // Redirect to order success page after placing the order
  };

  // Calculate the total price
  const calculateTotal = () => {
    const orderTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return orderTotal + delivery_fee; // Including delivery fee
  };
  const totalcartvalue = calculateTotal();


  return (
    <div className="container mx-auto py-10 px-4 font-poppins">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section: Delivery Info Form */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Delivery Information</h2>
          <form className="space-y-4">
            {/* First Name */}
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={deliveryInfo.firstName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            
            {/* Last Name */}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={deliveryInfo.lastName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />

            {/* Email Address */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={deliveryInfo.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />

            {/* Street Address */}
            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={deliveryInfo.street}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />

            {/* City */}
            <input
              type="text"
              name="city"
              placeholder="City"
              value={deliveryInfo.city}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />

            {/* State */}
            <input
              type="text"
              name="state"
              placeholder="State"
              value={deliveryInfo.state}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />

            {/* Zip Code */}
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={deliveryInfo.zipCode}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />

            {/* Phone Number */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={deliveryInfo.phone}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </form>
        </div>

        {/* Right Section: Order Summary */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Order Summary</h2>
          <div className="border p-6 rounded-md bg-white shadow-md">
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between py-2 border-b">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>{currency}{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between py-4 border-t">
              <span>Subtotal</span>
              <span>{currency}{cart.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
            </div>
            <div className="flex justify-between py-4">
              <span>Delivery Fee</span>
              <span>{currency}{delivery_fee}</span>
            </div>
            <div className="flex justify-between py-4 border-t font-semibold">
              <span>Total</span>
              <span>{currency}{calculateTotal()}</span>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className="mt-6 w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
          >
            Proceed to pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
