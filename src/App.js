import React from 'react';
import './App.css';
import Footer from './components/Footer';
import { LoremIpsum } from 'react-lorem-ipsum';
import HeaderClear from './components/Header/HeaderClear';
import Startseite from './modules/Startseite';
import { Routes, Route, Link } from 'react-router-dom';
import Products from './modules/Products';
import Product from './modules/ProductPage';
import Cart from './modules/Cart';
import Login from './modules/Signup/Login/index';
import Butcheries from './modules/Butcheries/ButcheriesDisplay';
import ButcheryShops from './modules/Butcheries/ButcheryShopDisplay';
import Register from './modules/Signup/Register';
import CreateProducts from './modules/Products/createProducts/index';
import ButcheryCreateSelection from './modules/Butcheries/ButcheriesCreate/index';
import ButcheriesCreate from './modules/Butcheries/ButcheriesCreate/Butchery/index';
import ButcheryShopCreate from './modules/Butcheries/ButcheriesCreate/ButcheryShop/index';


function App() {
  return (
    <>
      

      <Routes>
  
        <Route path="/" element={<Startseite/>} />  
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/butcheries" element={<Butcheries/>} />
        <Route path="/createProducts" element={<CreateProducts/>}/>
        <Route path="/butcheryShops" element={<ButcheryShops/>} />
        <Route path="/butcheryShopCreate" element={<ButcheryShopCreate/>} />
        <Route path="/butcheriesCreate" element={<ButcheriesCreate/>} />
        <Route path="/ButcheryCreateSelection" element={<ButcheryCreateSelection/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="cart" element={<div><HeaderClear/> <Cart/></div>} />
        <Route path="*" element={<div> <HeaderClear/> <LoremIpsum p={1}/></div>} />
      </Routes>
      <Footer/>
    </>

    
  );
}

export default App;
