import React from "react";

function MenuItems(name, price) {
  return (
    <div className="menuItems">
        <h1>{name}</h1>
        <p>${price}</p>
    </div>
  );
}
export default MenuItems;
