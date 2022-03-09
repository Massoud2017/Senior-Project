import React from 'react'
import FacebookIcon from '../assets/f_logo.png';
import InstagramIcon from '../assets/Insta_logo.png';

/*
 * We use embeded google map -  https://www.embedgooglemap.net/
 * We use HTML to JSX Compiler - https://magic.reactjs.net/htmltojsx.htm
 */

function Contact() {
  return (
    <div className="contact">
      <div>
        <h2>LOCATION AND HOURS</h2>
        <ul>
          <h4>6116 Mack Road Sacramento, CA 95823</h4>
          <li><b>Monday</b> Closed</li>
          <li><b>Tuesday to Sunday</b></li>
          <li>10:00 am - 9:00 pm</li>
        </ul>
        <h2>GET IN TOUCH</h2>
        <ul>
          <li>Have questions? We're happy to answer them! Give us a call at 916-476-3754 or email us at email@email.com </li>
          <li>
            <div className="socialMedia">
              <h4>Find us on Instagram and Facebook</h4>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/phoru.usa/?hl=en"> <img src={InstagramIcon} alt="insta-log" height={37} width={37} /></a> {"                           "}
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/phorurestaurant/"><img src={FacebookIcon} alt="facebook-log" height={37} width={37} /></a> {"                           "}
            </div>
          </li>
        </ul>
      </div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe title="google map" width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=6115%20Mack%20Rd.%20Sacramento,%20CA%2095823&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          <a href="https://wimip.net/nordvpn-coupon"></a><br />
          <style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;height:500px;width:600px;margin-top:26px;}" }} />
          <a href="https://www.embedgooglemap.net"></a>
          <style dangerouslySetInnerHTML={{ __html: ".gmap_canvas {overflow:hidden;background:none!important;height:31.25rem;width:37.5rem;margin-top:0.25rem;}" }} />
        </div>
      </div>
    </div>
  );
}


export default Contact;