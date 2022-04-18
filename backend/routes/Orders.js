const express = require('express');
const router = express.Router();
const { Orders } = require('../models');

//-- Use 'sign' from jsonwebtoken to generate token


const { validateToken } = require("../middlewares/AuthMiddleware");


//-- Use 'sign' from jsonwebtoken to generate token
const { decode } = require("jsonwebtoken");

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});
//-- Get info of an order
router.get("/", validateToken, async (req, res) => {
  const order = await Orders.findAll({
    where: {UserId:req.user.id}
  });
  res.json(order);
});

//-- Add an order info to the db
router.post('/', validateToken, async (req, res) => {
  const order = req.body;
  console.log(req.user)
  order.UserId = req.user.id;
  await Orders.create(order);
  res.json(order);
});



module.exports = router;