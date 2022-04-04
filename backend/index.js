const express = require('express');
const app = express(); //-- to make api request 
const cors = require('cors');

app.use(express.json());
app.use(cors());

//-- import database models from models folder
const db = require("./models");

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter)

const ordersRouter = require('./routes/Orders');
app.use('/orders', ordersRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("running on port 3001");
    });
});

