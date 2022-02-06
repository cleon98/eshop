import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import Home from "./components/Home"
import OneProduct from './components/OneProduct';
import Products from "./components/Products"


export default function App() {
  return (
  <Router>
    <div> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/productos" element={<Products />}/>
        <Route path="/productos/prodId" element={<OneProduct/>}/>
      </Routes>
    </div>
  </Router>
  )
}