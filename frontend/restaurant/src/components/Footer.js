import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./components-styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>6116 Mack Road Sacramento, CA 95823</p>
      <div className="socialMedia">
        <InstagramIcon /> <FacebookIcon />
      </div>
      <p>&copy; 2022</p>
    </div>
  );
}
export default Footer;
