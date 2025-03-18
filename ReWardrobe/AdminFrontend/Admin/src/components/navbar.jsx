import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "bg-gray-700" : "";

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md flex justify-between items-center">
      <div
        className="text-xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        REWARDROBE
      </div>
      <div className="flex space-x-4">
        <button
          className={`text-white hover:bg-gray-700 ${isActive("/products")} px-4 py-2 rounded`}
          onClick={() => navigate("/products")}
        >
          Products
        </button>
        <button
          className={`text-white hover:bg-gray-700 ${isActive("/orders")} px-4 py-2 rounded`}
          onClick={() => navigate("/orders")}
        >
          Orders
        </button>
        <button
          className={`text-white hover:bg-gray-700 ${isActive("/payments")} px-4 py-2 rounded`}
          onClick={() => navigate("/payments")}
        >
          Payment Verification
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
