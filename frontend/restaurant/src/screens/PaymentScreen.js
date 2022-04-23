import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../helpers/AuthContext";
//import "../web-payments-quickstart";
import StripeContainer from '../components/StripeContainer';
function PaymentScreen() {
  
  const navigate = useNavigate();
  const [showItem, setShowItem] = useState(false);

  const cartCheckoutInfo = JSON.parse(localStorage.getItem('cartCheckoutInfo'));

  const { cartItems, itemsPrice, taxPrice, totalPrice } = cartCheckoutInfo;

  const [paymentMethod, setPaymentMethod] = useState('square');

  const onPaymentMethodSelect = (event) => {
    setPaymentMethod(event.target.value);
  }

  const onMakePayment = () => {
    //-- Store cartCheckoutInfo to sessionStorage so that when user accidentally refresh
    //-- the confirmation page they won't loose the confirmation info
    sessionStorage.setItem('cartCheckoutInfo', JSON.stringify(cartCheckoutInfo));
    navigate('/confirmpayment');
  }

  return (
    <div>
      <div>PAYMENT & CHECKOUT</div>
         
      <div>
        
        
      </div>

      <div>
        <h2>Order Summary</h2>
        <div>
          {cartItems.map((dish) => (
            <div key={dish.id} className="row">
              <div className="col-2">{dish.name}</div>
              <div className="col-2 text-right">
                {dish.qty} x ${dish.price.toFixed(2)}
              </div>
              <div className="col-10"></div>
            </div>
          ))}
          <hr></hr>
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-2 text-right">${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-2 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2"><strong>Total Price</strong></div>
            <div className="col-2 text-right"><strong>${totalPrice.toFixed(2)}</strong></div>
          </div>
          <hr />
        </div>
      </div>
      <div><h2>Payment Method:</h2>
    {showItem ? (
            <StripeContainer />
    ) : (
            <>
                    
                    <button onClick={() => setShowItem(true)}>Pay by card</button>
            </>
    )}</div>

      <div>
        {paymentMethod === "square" && <button onClick={onMakePayment}>Proceed to finalize your order</button>}
        {/* { paymentMethod === "paypal" && <button onClick={onMakePayment}>Paypal Checkout Button</button> } */}
      </div>
    </div>
  )
}

export default PaymentScreen;