import Home from "./screens/Home";
import Login from "./screens/Login";
import About from "./screens/About";
import Contact from "./screens/Contact";
import ChangePassword from "./screens/ChangePassword";
import Footer from "./components/Footer";
import Menu from "./screens/Menu";
import Nav from "./components/Nav";
import Order from "./screens/Order";
import Profile from "./screens/Profile"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import "./components/components-styles/style.css"
import Register from "./screens/Register";

function App() {
  return (
    <div className="app">
    <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/changepassword" element={<ChangePassword/>} />
        </Routes>
        <Footer />
    </Router>
    </div>
  );
}

export default App;
