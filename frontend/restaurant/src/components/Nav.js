import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { CartContext } from '../helpers/CartContext';
import "./components-styles/style.css";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
import "../helpers/script";



function Nav() {
  let sideMenuClicked = useState(false);
  let navigate = useNavigate();
  const [authState, setAuthState] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState(false);
        } else {
          setAuthState(true);
        }
      });
  }, []);
  //-- Get Context value from CartContext in App.js
  const { totalCartItems, toggleCartClicked} = useContext(CartContext);

  const profile_button = () => {
    navigate("/profile");
    
  };
  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
    setAuthState(false);
  };
  

  return (
    <div className="nav">
      <AuthContext.Provider value={{ authState, setAuthState }}>
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
        <Link to="/menu" className='cart-btn-link'>
          <li className='cart-btn-container'>
            <button className="cart-btn" onClick={() => toggleCartClicked()}>
              <img className="cart-btn-img" src={require('../assets/cart-icons8-64.png')} alt="Symbol Icon Cart" width={40} height={40} />
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
        {!authState ? (
          <>
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
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        </>
        
        ) : (
        <div className="Prof_logoutContainer">
          <button className='prof-button' onClick={profile_button}> Profile</button>
          <button className='logout-button' onClick={logout}> Sign Out</button>
        </div>

        
        )}
        
      </nav>
      </AuthContext.Provider>
      <script src = "script.js"></script>
    </div>
  );
}

export default Nav;

