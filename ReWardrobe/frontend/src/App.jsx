import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Product from "./pages/Product"; // Import the Product component
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import CollectionsPage from "./pages/CollectionsPage";
import SellingPage from "./pages/SellProduct";
import SellProtocolsPage from "./pages/sellhow";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Order";
import PaymentPage from "./pages/Payments";
import Login from "./pages/Login";
import AboutPage from "./pages/About";
import ContactUs from "./pages/ContactUs";
const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[10vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use element instead of Component */}
        
        {/* Define a dynamic route for product details */}
        <Route
          path="/product/:id" // Use the dynamic productId in the URL
          element={<Product/>}  // Use element with JSX syntax
        />
        <Route path="/collection" element={<CollectionsPage />} />
        <Route path="/sell" element={<SellingPage/>}/>
        <Route path="/sellhow" element={<SellProtocolsPage/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/PlaceOrder" element={<PlaceOrder />} />
        <Route path="/WishList" element={<Wishlist />} />
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/payments" element={<PaymentPage/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/About" element={<AboutPage/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
