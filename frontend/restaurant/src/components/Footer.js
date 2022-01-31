import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./components-styles/Footer.css";
import Logo_y from './yelp_logo.png';
import Logo_f from './f_logo.png';
import Logo_i from './Insta_logo.png';


function Footer() {
  return (
    <div className="footer">
      <p>6116 Mack Road Sacramento, CA 95823</p>
      <div className="socialMedia">
        <a target="_blank" href="https://www.instagram.com/phoru.usa/?hl=en"><img src={Logo_i} height={35} width={35} /></a> {"                           "} 
        <a target="_blank" href="https://www.facebook.com/phorurestaurant/"><img src={Logo_f} height={35} width={35} /></a>  {"                           "}  
        <a target="_blank" href="https://www.yelp.com/biz/pho-ru-vietnamese-restaurant-sacramento"><img src={Logo_y} height={35} width={80}/></a>
      </div>
      <p>&copy; 2022</p>
    </div>
  );
}
export default Footer;
