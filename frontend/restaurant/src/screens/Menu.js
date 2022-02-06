import React from "react";
import { MenuList } from "./MenuList.js";
import MenuItem from "../components/MenuItem.js";

function Menu() {
    return (
      <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="menuList">
          {MenuList.map((menuItem, key) => {
              return <MenuItem key={key}  name={menuItem.name} price={menuItem.price} image={menuItem.image}/>
          })}
        </div>
      </div>
    );
  }

export default Menu;
