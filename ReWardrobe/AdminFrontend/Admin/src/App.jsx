import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Navbar from './components/navbar'
import Products from './pages/products'
import ProductDetail from './pages/productsdetail'
import AddProduct from './pages/addproducts'
import Login from './pages/login'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  )
}

export default App