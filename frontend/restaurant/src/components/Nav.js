import React from "react";
import { Link } from "react-router-dom";
import "./components-styles/style.css";
function Nav() {
  return (
    <div className="nav">
      <nav>
        <Link to="/">
          <li>
            <button className="logo">Logo</button>
          </li>
        </Link>

        <ul className="nav-links">
          <Link to="/menu">
            <li>
              <button className="menu-1">Menu</button>
            </li>
          </Link>
          <Link to="/order">
            <li>
              <button className="order">Order</button>
            </li>
          </Link>
          <Link to="/contact">
            <li>
              <button className="contact">Contact</button>
            </li>
          </Link>

          <Link to="/about">
            <li>
              <button className="about-btn">About</button>
            </li>
          </Link>
        </ul>
        <Link to="/login">
          <li>
            <button className="login-btn">Sign In</button>
          </li>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
