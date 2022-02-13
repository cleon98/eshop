import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import JustWomen from './pages/JustWomen';
import OneProduct from './pages/OneProduct'
import Products from "./pages/Products"
import ShoppingCart from './pages/ShoppingCart';
import JustMen from './pages/JustMen';
import { CartProvider } from './CartContext';

export default function App() {

  return (
  <Router>
        <CartProvider>
    <div> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/productos" element={<Products />}/>
        <Route path="/productos/:id" element={<OneProduct/>}/>
        <Route path="/productos/mujer" element={<JustWomen/>} />
        <Route path="/productos/hombre" element={<JustMen/>} />
        <Route path="/cart" element ={<ShoppingCart/>}/>
      </Routes>
    </div>
    </CartProvider>
  </Router>
  )
}