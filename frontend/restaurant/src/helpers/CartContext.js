import { createContext, useState } from 'react';


//-- Create a Context for Cart
export const CartContext = createContext();

export const CartContextProvider = (props) => {
  //-- Tracking states For Basket: tracking Cart's items
  const [cartItems, setCartItems] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [isCartClicked, setIsCartClicked] = useState(false);

  //-- Functions for Cart
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
    setTotalCartItems(totalCartItems + 1);
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
    setTotalCartItems(totalCartItems - 1);
  };

  const toggleCartClicked = () => {
    setIsCartClicked(!isCartClicked);
  }

  // const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    cartItems: cartItems,
    totalCartItems: totalCartItems,
    isCartClicked: isCartClicked,
    onAddToCart: onAddToCart,
    onRemoveFromCart: onRemoveFromCart,
    toggleCartClicked: toggleCartClicked
  }

  return <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
}