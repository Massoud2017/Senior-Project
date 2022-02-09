import { useState } from 'react';
import items from './MenuList.js';
import MenuItems from './MenuItems';
import Button from './Button';
import "./Menu.css";

const allCategories = ['All', ...new Set(items.map(item => item.type))];

console.log(allCategories);

function Menu() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) =>{

    if(button === 'All'){
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.type ===  button);
    setMenuItem(filteredData)
  }


  return (
    <div className="menu">
      <Button button={buttons} filter={filter} />
       <MenuItems menuItem={menuItem}/>

    </div>
  );
}

export default Menu;