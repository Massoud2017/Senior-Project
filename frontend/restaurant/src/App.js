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
import React, { useState } from "react";
import "./App.css";
import "./components/components-styles/style.css"
import Register from "./screens/Register";

//-- Create a Context for Cart
export const CartContext = React.createContext();

function App() {

  //-- Tracking states For Basket: tracking Cart's items
  const [cartItems, setCartItems] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [isCartClicked, setIsCartClicked] = useState(false);

  //-- Functions for Cart
  const onAddToCart = (item) => {
    const exist = cartItems.find(x => x.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
    setTotalCartItems(totalCartItems + 1);
  };

  const onRemoveFromCart = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
    setTotalCartItems(totalCartItems - 1);
  };

  const toggleCartClicked = () => {
    setIsCartClicked(!isCartClicked);
  }
  //-- End of Functions for Cart

  return (
    <CartContext.Provider 
      value={{
        cartItems: cartItems,
        totalCartItems: totalCartItems,
        isCartClicked: isCartClicked,
        onAddToCart: onAddToCart,
        onRemoveFromCart: onRemoveFromCart,
        toggleCartClicked: toggleCartClicked
      }}
    >
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
            <Route path="/profile" element={<Profile />} />
            <Route path="/changepassword" element={<ChangePassword />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </CartContext.Provider>
  );
}

export default App;
