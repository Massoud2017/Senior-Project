import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { CartContext } from '../helpers/CartContext';
import emailjs from '@emailjs/browser';  //-- Package Required: npm install @emailjs/browser --save

function ConfirmPaymentScreen() {
  //-- Clear cart badge and basket
  const { setCartItems, setTotalCartItems } = useContext(CartContext);

  const cartCheckoutInfo = JSON.parse(sessionStorage.getItem('cartCheckoutInfo'));
  const cartItems = cartCheckoutInfo.cartItems;
  const itemsPrice = cartCheckoutInfo.itemsPrice;
  const taxPrice = cartCheckoutInfo.taxPrice;
  const totalPrice = cartCheckoutInfo.totalPrice;

  useEffect(() => {

    //-- Send email to seller
    //--   . serviceID: the email service (e.g. GMail)
    //--   . templateID: email template
    //--   . form: form element or selector
    //--   . publicKey: EmailJS user API public key
    const orderList = sessionStorage.getItem('orderList');
    const templateParams = {
      message: orderList
    };

    console.log('orderList: ', orderList);
    emailjs.send('service_fzfstsj', 'template_olv33yj', templateParams, 'lusqUecZ-hspsrmVd')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });

    //-- Store order info to database
    try {
      axios.post(
        'http://localhost:3001/orders',
        { order_info: JSON.stringify(cartCheckoutInfo), price_total: totalPrice.toString(), paid: 'true' },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken")
          }
        }
      ).then((response) => {
        console.log('This order is stored in the database:');
        console.log(response.data);
        localStorage.removeItem('cartCheckoutInfo');
        localStorage.removeItem('cartItems');
        localStorage.removeItem('totalCartItems');
        setCartItems([]);
        setTotalCartItems(0);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className='order-screen-container'>
      <h3>Order Confirmation</h3>

      <h4>your order has been completed!!</h4>

      <div className='order-summary'>
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

      {/* <div className="send-email">
        <input type="email" placeholder="Enter your Email" />
        <button>Sent Receipt to Email</button>
      </div> */}

      <div className='save-your-receipt'>
        Please print this page or take a screenshot to keep a copy of your receipt.
      </div>
    </div>
  )
}

export default ConfirmPaymentScreen;