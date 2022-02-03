import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import Home from "./components/Home"

export default function App() {
  return (
  <Router>
    <div> 
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  </Router>
  )
}