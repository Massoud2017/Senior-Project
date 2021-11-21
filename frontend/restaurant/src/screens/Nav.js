import React from 'react'
import {Link} from 'react-router-dom';
function Nav() {
    return (
        
        

        <nav>
        <Link to='/' > 
        <li>
        <button class="logo">Logo</button> 
        </li>
        </Link>
  
            <ul className="nav-links">            
            
                <Link to='/menu' > 
                <li>
                <button class="menu-1">Menu</button> 
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
                <Link to="/login">
                <li>
                <button class="login">Login</button>  
                </li>
                </Link>

            </ul>
        </nav>
    )
}

export default Nav;
