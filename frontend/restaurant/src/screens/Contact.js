import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";



// import { GoogleMap, useLoadScript } from '@react-google-maps/api';

// const containerStyle = {
//     width: '100vw',
//     height: '100vh',
//   };

//   const center = {
//     lat: 35.6804,
//     lng: 139.769,
//   };
  
//   function Contact() {
//     const { isLoaded, loadError } = useLoadScript({
//       googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//     });
  
//     if (loadError) return 'Error loading maps';
//     if (!isLoaded) return 'Loading maps';
  
//     return (
//       <div className="App">
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={10}
          
//         ></GoogleMap>
//       </div>
//     );
//   }

/*
 * We use embeded google map -  https://www.embedgooglemap.net/
 * We use HTML to JSX Compiler - https://magic.reactjs.net/htmltojsx.htm
 */

function Contact() {
  return (
    <div className="contact">
      <div>
        <h2>Business Hours:</h2>
        <ul>
          <li>Mon Closed</li>
          <li>Tue 10:00 am - 9:00 pm</li>
          <li>Wed 10:00 am - 9:00 pm</li>
          <li>Thu 10:00 am - 9:00 pm</li>
          <li>Fri 10:00 am - 9:00 pm</li>
          <li>Sat 10:00 am - 9:00 pm</li>
          <li>Sun 10:00 am - 9:00 pm</li>
        </ul>
      </div>
      <div>
        <h2>Contact Info:</h2>
        <ul>
          <li>Phone: 916 476 3754</li>
          <li>Email: </li>
          <li>
            <div className="socialMedia">
              <InstagramIcon /> <FacebookIcon />
            </div>
          </li>
        </ul>
      </div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe title="google map" width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=6115%20Mack%20Rd.%20Sacramento,%20CA%2095823&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          <a href="https://wimip.net/nordvpn-coupon"></a><br />
          <style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:500px;width:600px;}" }} />
          <a href="https://www.embedgooglemap.net">responsive google maps</a>
          <style dangerouslySetInnerHTML={{__html: ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}" }} />
        </div>
      </div>
    </div>
  );
}


  export default Contact;