import React from "react";
import "./components-styles/Footer.css";
import Logo_y from '../assets/yelp_logo.png';
import Logo_f from '../assets/f_logo.png';
import Logo_i from '../assets/Insta_logo.png';


function Footer() {
  return (
    <div className="footer">
      <p>6116 Mack Road Sacramento, CA 95823</p>
      <div className="socialMedia">
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/phoru.usa/?hl=en"> <img src={Logo_i} alt="insta-log" height={35} width={35} /></a> {"                           "} 
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/phorurestaurant/"><img src={Logo_f} alt="facebook-log"  height={35} width={35} /></a>  {"                           "}  
        <a target="_blank" rel="noreferrer" href="https://www.yelp.com/biz/pho-ru-vietnamese-restaurant-sacramento"><img src={Logo_y} alt="yelp-log" height={35} width={80}/></a>
      </div>
      <p>&copy; 2022</p>
    </div>
  );
}
export default Footer;
