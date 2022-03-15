import { useState, useContext } from 'react';
import items from './MenuList.js';
import MenuItems from './MenuItems';
import Button from './Button';
import Basket from './Basket';
import { CartContext } from '../App';
import "./Menu.css";

const allCategories = ['All', ...new Set(items.map(item => item.type))];

// console.log(allCategories);

function Menu() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button)=>{

    if(button === 'All'){
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.type ===  button);
    setMenuItem(filteredData)
  }

  //-- Get Context value from CartContext in App.js
  const { cartItems, onAddToCart, onRemoveFromCart, isCartClicked } = useContext(CartContext);

  return (
    <div className="row">
      <div className="col-3">
        <Button button={buttons} filter={filter} />
      </div>

      <div className="menu col-2">
        <MenuItems menuItem={menuItem} onAddToCart={onAddToCart} />
      </div>

      {
        isCartClicked ? (
          <Basket 
            cartItems={cartItems}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
          />
        ) : (
          ''
        )
      }
    </div>
  );
}

export default Menu;