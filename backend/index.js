const express = require('express');
const app = express(); //-- to make api request 
const cors = require('cors');
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

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("running on port 3001");
    });
});

