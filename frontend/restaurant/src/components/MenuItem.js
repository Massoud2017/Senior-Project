import React from "react";
import '../screens/Menu.css'


function MenuItem({image,name, price}) {
  
  return (
    <div className="menuItem">
        <img src={image}/>
        <h1>{name}</h1>
        <p>${price}</p>
    </div>
  );
}
export default MenuItem;
