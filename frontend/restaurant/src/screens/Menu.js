import  {useState} from "react";
import { MenuList } from "./MenuList.js";
import MenuItem from "../components/MenuItem.js";
import './Menu.css'
import './Filter.js'



function Menu() {

    return (
      <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="menuList">
        
          {MenuList.map((menuItem, key) => {
              return <MenuItem 
              key={key} 
              image={menuItem.image}
              name={menuItem.name} price={menuItem.price} />
              
          })}
              
        </div>
        
      </div>
    );
  }

export default Menu;
