import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../helpers/AuthContext";

function PaymentScreen() {
  const navigate = useNavigate();

  const cartCheckoutInfo = JSON.parse(localStorage.getItem('cartCheckoutInfo'));
  const { cartItems, itemsPrice, taxPrice, totalPrice } = cartCheckoutInfo;

  console.log(cartItems);
  console.log('itemsPrice', itemsPrice);
  console.log(taxPrice);
  console.log(totalPrice);

  const [paymentMethod, setPaymentMethod] = useState('square');

  const onPaymentMethodSelect = (event) => {
    setPaymentMethod(event.target.value);
  }

  const onMakePayment = () => {
    navigate('/confirmpayment');
  }

  return (
    <div>
      <div>PAYMENT & CHECKOUT</div>

      <div>
        <h2>Payment Method:</h2>
        <div>
          <input
            type="radio"
            name="paymentMethod"
            value="square"
            checked={paymentMethod === 'square'}
            onChange={onPaymentMethodSelect}
          />
          <label> Square </label>
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={onPaymentMethodSelect}
          />
          <label> Paypal </label>
        </div>
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

      <div>
        { paymentMethod === "square" && <button onClick={onMakePayment}>Square Checkout Button</button> }
        { paymentMethod === "paypal" && <button onClick={onMakePayment}>Paypal Checkout Button</button> }
      </div>
    </div>
  )
}

export default PaymentScreen;