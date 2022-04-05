import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../helpers/AuthContext";

function ConfirmPaymentScreen() {
  const cartCheckoutInfo = JSON.parse(localStorage.getItem('cartCheckoutInfo'));
  const { cartItems, itemsPrice, taxPrice, totalPrice } = cartCheckoutInfo;

  // const cleanUpOps = () => {
  //   localStorage.removeItem('cartCheckoutInfo');
  // }

  useEffect(() => {
    try {
      axios.post(
        'http://localhost:3001/orders',
        { order_info: JSON.stringify(cartCheckoutInfo), price_total: totalPrice.toString(), paid: 'true' }
      ).then((response) => {
        console.log('This order is stored in the database:');
        console.log(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className='order-screen-container'>
      <div>ORDER CONFIRMATION</div>

      <div>
        <h2>Your order has completed!!!</h2>
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

      <div className="send-email">
        <input type="email" placeholder="Enter your Email" />
        <button>Sent Receipt to Email</button>
      </div>

      {/* Clean up operation */}
      {/* {cleanUpOps()} */}
    </div>
  )
}

export default ConfirmPaymentScreen;