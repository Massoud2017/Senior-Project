import { useState } from 'react';
import items from './MenuList.js';
import MenuItems from './MenuItems';
import Button from './Button';
import Basket from './Basket';
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

  //-- For Basket
  // const { dishes } = items;
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (item) => {
    const exist = cartItems.find(x => x.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const onRemoveFromCart = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  //-- End of for Basket

  return (
    <div className="row">
      <div className="menu col-2">
        <Button button={buttons} filter={filter} />
        <MenuItems menuItem={menuItem} onAddToCart={onAddToCart}/>
      </div>

      <Basket cartItems={cartItems} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />
    </div>
  );
}

export default Menu;