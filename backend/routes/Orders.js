const express = require('express');
const router = express.Router();
const { Orders } = require('../models');

//-- Get info of an order
// router.get('/:orderId', async (req, res) => {
//   const orderId = req.params.postId;
//   const order = await Comments.findAll({ where: {PostId: postId}});  //-- change this
//   res.json(order);
// });

//-- Add an order info to the db
router.post('/', async (req, res) => {
  const order = req.body;
  await Orders.create(order);
  res.json(order);
});

module.exports = router;