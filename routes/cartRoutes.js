const express = require("express");
const router = express.Router();

const Cart = require("../models/cart");
const FoodItem = require("../models/fooditems");

const noCache = require("../middleware/noCache");


router.post("/cart/add/:id",noCache,async (req, res) => {
  const { id } = req.params;          
  const tableNumber = req.query.table;
  const { selectedSize, price, redirectTo } = req.body;

  const foodItem = await FoodItem.findById(id);

  let cart = await Cart.findOne({ tableNumber });

  if (!cart) {
    cart = new Cart({
      tableNumber,
      items: [],
      totalAmount: 0
    });
  }

  const existingItem = cart.items.find(item =>
    item.foodItem.equals(foodItem._id) &&
    item.selectedSize === selectedSize
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.items.push({
        foodItem: foodItem._id,
        name: foodItem.name,
        selectedSize: selectedSize || null,
        price: price || foodItem.price,
        quantity: 1
    });
  }

  cart.totalAmount = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  await cart.save();
//console.log("food item added to the cart")

  res.redirect(redirectTo || `/menu?table=${tableNumber}`);
});


router.post("/cart/update/:itemId",noCache,async (req, res) => {
  const { itemId } = req.params;
  const { action } = req.body;
  const tableNumber = req.query.table;

  const cart = await Cart.findOne({ tableNumber });
  if (!cart) return res.redirect(`/cart?table=${tableNumber}`);

  const item = cart.items.id(itemId);
  if (!item) return res.redirect(`/cart?table=${tableNumber}`);

  if (action === "increase") {
    item.quantity += 1;
  } 
  else if (action === "decrease") {
    item.quantity -= 1;
  }

  if (item.quantity <= 0) {
    item.deleteOne();
  }

  cart.totalAmount = cart.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  await cart.save();
  res.redirect(`/cart?table=${tableNumber}`);
});


router.post("/cart/clear",noCache,async (req, res) => {
  const tableNumber = req.query.table;
  await Cart.findOneAndUpdate(
    { tableNumber },
    { items: [], totalAmount: 0 }
  );
  res.redirect(`/cart?table=${tableNumber}`);
});


router.get("/cart",noCache,async (req, res) => {
  const tableNumber = req.query.table;
  const cart = await Cart.findOne({ tableNumber });
  res.render("cart.ejs", { cart, tableNumber });
});


module.exports = router;