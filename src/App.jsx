import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";



import Home from "./components/Home/Home";
import About from "./components/About/About";
import Galery from "./components/Galery/Galery";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/galery" element={<Galery />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
