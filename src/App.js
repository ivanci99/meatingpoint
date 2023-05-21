import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header/HeaderFull';
import HeaderMetzgerei from './components/Header/HeaderMetzgerei';
import Home from './modules/Home';
import Startseite from './modules/Startseite';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart';
import Login from './modules/Signup/Login';
import Butcheries from './modules/Butcheries';
import Register from './modules/Signup/Register';
import PostDataShops from './PostData/Butchery/Butchery';
function App() {
  return (
    <div>
      

      <Routes>
        <Route path="/" element={<Startseite/>} />  
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="butcheries" element={<Butcheries/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/categories/:name" element={<CategoryProducts/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer/>
    </div>

    
  );
}

export default App;
