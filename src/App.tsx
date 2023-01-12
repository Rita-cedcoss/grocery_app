import React, { useState } from "react";
import "./App.css";
import Navbar from "./GroceryApp/Navbar";
import "./GroceryApp/Component.css";

import Footer from "./GroceryApp/Footer";
import Home from "./GroceryApp/Home";
import { Route, Routes } from "react-router-dom";
import Cartpage from "./GroceryApp/Cartpage";
import About from "./GroceryApp/About";
import Signup from "./GroceryApp/Signup";
import Signin from "./GroceryApp/Signin";
type typeSign = {
  name: string;
  email: string;
  passwd: string;
};
type typeProdArr = {
  _id: string;
  quantity: number;
  calPrice: number;
  title: string;
  description: string;
  category: string;
  brand: string;
  expDate: string;
  mfdDate: string;
  size: string;
  price: number;
  stock: string;
  images: string[];
  suggestion: string[];
  allegations: string[];
};
function App() {
  const [signIn, setSignIn] = useState<typeSign[]>([]);
  const [cartArr, setCartArr] = useState<typeProdArr[]>([]);

  return (
    <>
      <Navbar cartarr={cartArr} />
      <Routes>
        <Route
          path="/"
          element={<Signin signin={signIn} setSignin={setSignIn} />}
        />
        <Route path="/signup" element={<Signup signin={signIn} />} />
        <Route
          path="/home"
          element={<Home cartarr={cartArr} setCartarr={setCartArr} />}
        />
        <Route
          path="/cart"
          element={<Cartpage cartarr={cartArr} setCartarr={setCartArr} />}
        />
        <Route path="/about_us" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
