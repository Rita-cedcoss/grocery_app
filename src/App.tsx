import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './GroceryApp/Navbar';
import "./GroceryApp/Component.css"
import ProdSlider from './GroceryApp/ProdSlider';
import ProdBanner from './GroceryApp/ProdBanner';
import ProdSlider1 from './GroceryApp/ProdSlider1';

function App() {
  const arrImg=[
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Tableware-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Home-Care-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Bedsheets-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-11/Spar-Day-Grocery-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Tableware-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Pasta-and-Noodles-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Drinkware-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Tableware-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Home-Care-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Bedsheets-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-11/Spar-Day-Grocery-min.png",
    "https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Tableware-min.png",
  ]
  return (
    <>
   <Navbar/>
   <ProdSlider/>
   <ProdBanner/>
   <ProdSlider1 arrimg={arrImg} height="200px"/>
   </>
  );
}

export default App;
