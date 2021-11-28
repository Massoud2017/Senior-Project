import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";


function Map() {
    return ( <GoogleMap
    defaultZoom={10}
    defaultCenter={{lat:38.47599826526979, lng:-121.43035598757425}}
    />
    );

}
const WrappedMap = withScriptjs(withGoogleMap(Map)); 

function Contact() {
    
    return (
       <div>
           <h1>For all inquiries, contact us!</h1>
       <div className= "map" style={{width:'50vw', height:'50vh'}}>
           
           <WrappedMap googleMapURL ={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBxQHBgUy4CxpOm2WXT29pTRcR7UctUPrE=3.exp&libraries=geometry,drawing,places&key`}
           loadingElement ={<div style={{height:'100%'}} />}
           containerElement ={<div style={{height:'100%'}} />}
           mapElement ={<div style={{height:'100%'}} />}
           />
           
       </div>
       </div>
    )
}


  export default Contact;