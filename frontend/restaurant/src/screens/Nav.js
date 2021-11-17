import React from 'react'
import {Link} from 'react-router-dom';
function Nav() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to='/menu' > 
                <li>Menu</li>
                </Link>
                <Link to="/order">
                <li>Order</li>
                </Link>
                <Link to="/contact">
                <li>Contact</li>
                </Link>
                <Link to="/login">
                <li>Login</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;
