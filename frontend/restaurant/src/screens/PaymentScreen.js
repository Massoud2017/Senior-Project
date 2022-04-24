import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../helpers/AuthContext";
//import "../web-payments-quickstart";
import StripeContainer from '../components/StripeContainer';

function PaymentScreen() {

  const navigate = useNavigate();
  const [showItem, setShowItem] = useState(true);

  const cartCheckoutInfo = JSON.parse(localStorage.getItem('cartCheckoutInfo'));

  const { cartItems, itemsPrice, taxPrice, totalPrice } = cartCheckoutInfo;

  console.log('Cart Items:', cartItems);

  const [paymentMethod, setPaymentMethod] = useState('square');

  const onPaymentMethodSelect = (event) => {
    setPaymentMethod(event.target.value);
  }

  //-- Prepare email message
  let orderList = '<p>';
  cartItems.map((dish) => (
    orderList = `${orderList} ${dish.name} &ensp; x ${dish.qty} &ensp; $${dish.price.toFixed(2)} <br />`
  ));
  orderList = `${orderList} <br /> <hr> <br />`;
  orderList = `${orderList} Tax Price &ensp; &ensp; &ensp; &ensp; $${taxPrice.toFixed(2)} <br />`;
  orderList = `${orderList} <strong>Total Price</strong> &ensp; &ensp; &ensp; &ensp; <strong>$${totalPrice.toFixed(2)}</strong></p>`;
  console.log(orderList);

  //-- Store cartCheckoutInfo to sessionStorage so that when user accidentally refresh
  //-- the confirmation page they won't loose the confirmation info
  sessionStorage.setItem('cartCheckoutInfo', JSON.stringify(cartCheckoutInfo));

  //-- Store email message to sessionStorage and send it to seller when we get to
  //-- the confirmation page
  sessionStorage.setItem('orderList', orderList);

  // const onMakePayment = () => {
  //   //-- Store cartCheckoutInfo to sessionStorage so that when user accidentally refresh
  //   //-- the confirmation page they won't loose the confirmation info
  //   sessionStorage.setItem('cartCheckoutInfo', JSON.stringify(cartCheckoutInfo));

  //   navigate('/confirmpayment');
  // }

  return (
    <div className='make-payment-screen'>
      <h2>Verify and Pay</h2>
      <h3>Verify your order details and pay now!</h3>
      <div className='order-summary-payment-screen'>
        <h2>ORDER SUMMARY</h2>
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
      <div className='payment-bottom-container'>
        <div className='payment-method'><h2>PAYMENT METHOD</h2>
          {showItem ? (
            <StripeContainer />
          ) : (
            <>
              {/* <button onClick={() => setShowItem(true)}>Pay by card</button> */}
            </>
          )}
        </div>
        {/* <div>
          {paymentMethod === "square" && <button className='finalize-order-btn' onClick={onMakePayment}>Finalize Your Order</button>}
          { paymentMethod === "paypal" && <button onClick={onMakePayment}>Paypal Checkout Button</button> }
        </div> */}
      </div>
    </div>
  )
}

export default PaymentScreen;