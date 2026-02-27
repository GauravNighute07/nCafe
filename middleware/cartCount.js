const Cart = require("../models/cart");

module.exports = async (req, res, next) => {
  const tableNumber = req.query.table;

  if (!tableNumber) {
    res.locals.cartCount = 0;
    return next();
  }

  if (!req._cart) {
    req._cart = await Cart.findOne({ tableNumber });
  }

  res.locals.cartCount = req._cart ? req._cart.items.length : 0;
  next();
};