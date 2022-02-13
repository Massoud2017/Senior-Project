import Home from "./screens/Home";
import Login from "./screens/Login";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Footer from "./components/Footer";
import Menu from "./screens/Menu";
import Nav from "./components/Nav";
import Order from "./screens/Order";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import "./components/components-styles/style.css"

function App() {
  return (
    <div className="app">
    <Router>
        <Nav/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
