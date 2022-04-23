import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51Krlh3JLsFZjWGKGKWfQ3XqZUUQtrUjL6LZ0uYtpi0cw1YXmzBuFuAGCyoCuUJRcb28e2WjhIMrpbO50DYAJih4J00cTAQ78uw"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}