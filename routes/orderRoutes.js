const express = require("express");
const router = express.Router();

const Cart = require("../models/cart");
const Order = require("../models/orders");

const noCache = require("../middleware/noCache");


router.post("/order/place", noCache, async (req, res) => {
  const tableNumber = req.query.table;
  const cart = await Cart.findOne({ tableNumber });

  if (!cart || cart.items.length === 0) {
    return res.redirect(`/cart?table=${tableNumber}`);
  }

  await Order.create({
    tableNumber: cart.tableNumber,
    items: cart.items,
    totalAmount: cart.totalAmount
  });

  cart.items = [];
  cart.totalAmount = 0;

  await cart.save();

  res.redirect(`/cart?table=${tableNumber}&order=success`);
});


module.exports = router;