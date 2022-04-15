import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutPopup from './CheckoutPopup';
import Login from '../screens/Login';
import { AuthContext } from "../helpers/AuthContext";

function Basket(props) {
  const navigate = useNavigate();
  //-- Get Context value from AuthContext in index.js
  const { authState } = useContext(AuthContext);

  //-- For calculating prices
  const { cartItems, onAddToCart, onRemoveFromCart } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.0725;
  // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  // const totalPrice = itemsPrice + taxPrice + shippingPrice;
  const totalPrice = itemsPrice + taxPrice;

  //-- For Checkout Popup
  const [checkoutPopup, setCheckoutPopup] = useState(false);

  //-- Create cartCheckoutInfo object  
  const cartCheckoutInfo = {
    cartItems: cartItems,
    itemsPrice: itemsPrice,
    taxPrice: taxPrice,
    totalPrice: totalPrice
  };

  const onCartCheckout = () => {
    localStorage.setItem('cartCheckoutInfo', JSON.stringify(cartCheckoutInfo));
    if (authState) {
      setCheckoutPopup(false);
      navigate('/makepayment');
    } else {
      setCheckoutPopup(true);
    }
  }

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {/*-- true && expression evaluates to expression */}
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((dish) => (
          <div key={dish.id} className="row">
            <div className="col-2">{dish.name}</div>
            <div className="col-2">
              <button onClick={() => onRemoveFromCart(dish)} className="add-cart-btn remove">
                -
              </button>{' '}
              <button onClick={() => onAddToCart(dish)} className="add-cart-btn add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {dish.qty} x ${dish.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            {/* <div className="row">
                        <div className="col-2">Shipping Price</div>
                        <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
                </div> */}
            <div className="row">
              <div className="col-2"><strong>Total Price</strong></div>
              <div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div>
            </div>
            <hr />
            <div className="row">
              <button className="add-cart-btn" onClick={onCartCheckout}>
                CHECKOUT
              </button>
            </div>
          </>
        )}
      </div>

      {/* -- The Checkout Popup is trigged by clicking on Checkout Button */}
      <CheckoutPopup trigger={checkoutPopup} setTrigger={setCheckoutPopup}>
        <Login setCheckoutPopup={setCheckoutPopup} />

        <p className="word-middle-hr"><span>or</span></p>

        <div className="payasguest-btn-container">
          <button className='payasguest-btn' onClick={() => { navigate('/makepayment') }}>
            Pay as Guest
          </button>
        </div>
      </CheckoutPopup>
    </aside>
  );
}

export default Basket;