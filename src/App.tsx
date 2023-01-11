import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './GroceryApp/Navbar';
import "./GroceryApp/Component.css"

import Footer from './GroceryApp/Footer';
import Home from './GroceryApp/Home';
import { Route, Routes } from 'react-router-dom';
import Cartpage from './GroceryApp/Cartpage';
import About from './GroceryApp/About';
function App() {
  return (
    
    <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/cart' element={<Cartpage/>}/>
    <Route path='/about_us' element={<About/>}/>
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
