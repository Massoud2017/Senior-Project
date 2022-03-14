import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../App';
import "./components-styles/style.css";

function Nav() {
  //-- Get Context value from CartContext in App.js
  const { totalCartItems } = useContext(CartContext);

  return (
    <div className="nav">
      <nav>
        <Link to="/">
          <li>
            <button className="logo">
              <img src={require('../assets/PhoRuLogo.png')} alt="Pho Ru" width={85} height={70} />
            </button>
          </li>

        </Link>

        <Link to="/">
          <li>
            <button className="PhoRu">
              <h3>Pho Ru</h3>
            </button>
          </li>
        </Link>


        <ul className="nav-links">
        <Link to="/about">
            <li>
              <button className="about-btn">ABOUT</button>
            </li>
        </Link>  
        <Link to="/menu">
            <li>
              <button className="menu-1">MENU</button>
            </li>
        </Link>
        <Link to="/contact">
            <li>
              <button className="contact-btn">CONTACT</button>
            </li>
        </Link>
        </ul>

        {/* -- Click on Cart Icon bring user to Menu Page */}
        <Link to="/menu">
          <li className='cart-btn-container'>
            <button className="cart-btn">
              <img src={require('../assets/cart-icons8-64.png')} alt="Symbol Icon Cart" width={40} height={40} />
            </button>
            {
              totalCartItems > 0 ? (
                <button className="cart-badge">{totalCartItems}</button>
              ) : (
                ''
              )
            }
          </li>
        </Link>

        <Link to="/login">
          <li>
            <button className="login-btn">Sign In</button>
          </li>
        </Link>

        <Link to="/signup">
          <li>
            <button className="login-btn-signup">Register</button>
          </li>
        </Link>
        <Link to="/profile">
          <li>
            <button className="profile-btn">Profile</button>
          </li>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
