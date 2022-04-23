const express = require('express');
const app = express(); //-- to make api request 
const cors = require('cors');
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const usersRouter = require("./routes/Users");
const ordersRouter = require('./routes/Orders');
const resetPasswordRouter = require('./routes/ResetPassword');



app.use(express.json());
app.use(cors());

//-- import database models from models folder
const db = require("./models");

app.use("/auth", usersRouter)
app.use('/orders', ordersRouter);
app.use('/resetpassword', resetPasswordRouter);

app.post("/payment", cors(), async (req, res) => {
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 3001, () => {
        console.log("running on port 3001");
    });
});

