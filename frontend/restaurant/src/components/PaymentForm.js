import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" }
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee"
    }
  }
}

export default function PaymentForm() {

  const navigate = useNavigate();

  const cartCheckoutInfo = JSON.parse(localStorage.getItem('cartCheckoutInfo'));
  console.log(cartCheckoutInfo)
  const { cartItems, itemsPrice, taxPrice, totalPrice } = cartCheckoutInfo;

  let a = totalPrice.toFixed(2)
  console.log(a)
  let b = parseFloat(a * 100)
  let c = b.toFixed()
  let d = parseInt(c)
  console.log(d)

  const [success, setSuccess] = useState(false)
  const [paymentInProgress, setPaymentInProgress] = useState(false)
  const stripe = useStripe()
  const elements = useElements()


  const handleSubmit = async (e) => {
    e.preventDefault()

    setPaymentInProgress(true)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })

    if (!error) {
      try {
        const { id } = paymentMethod
        const response = await axios.post("http://localhost:3001/payment", {
          amount: d,
          description: cartItems,
          id
        })

        if (response.data.success) {
          console.log("Successful payment")
          setPaymentInProgress(false)
          setSuccess(true)

        }

      } catch (error) {
        console.log("Error", error)
      }
    } else {
      console.log(error.message)
    }
  }

  useEffect(() => {
    if (success) {
      navigate('/confirmpayment')
    }
  }, [success])

  return (
    <div>
      <div className='payment-form-container'>
        {!success &&
          <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardElement options={CARD_OPTIONS} />
              </div>
            </fieldset>
            <button>Pay</button>
          </form>}
      </div>
      <div>
        {paymentInProgress && <h3>Payment In Progress.....</h3>}
      </div>
    </div>
  )
}