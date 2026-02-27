const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const Admin = require("../models/admin");
const Category = require("../models/categories");
const FoodItem = require("../models/fooditems");
const Order = require("../models/orders");

const isAdmin = require("../middleware/isAdmin");


router.get("/login", (req, res) => {
  res.render("admin/login.ejs");
});


router.post("/login",async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });

  if (!admin) {
    return res.redirect("/admin/login?error=invalid");
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    return res.redirect("/admin/login?error=invalid");
  }
  req.session.adminId = admin._id;
  res.redirect("/admin/dashboard");
});


router.get("/dashboard", isAdmin, async (req, res) => {
  const pendingOrders = await Order.find({ status: "Pending" })
    .sort({ createdAt: -1 });
  const servedOrders = await Order.find({ status: "Served" })
    .sort({ createdAt: -1 });
  res.render("admin/dashboard.ejs", {
    pendingOrders,
    servedOrders
  });
});


router.get("/dashboard/live", isAdmin, async (req, res) => {
  const pendingOrders = await Order.find({ status: "Pending" })
    .sort({ createdAt: -1 });
  const servedOrders = await Order.find({ status: "Served" })
    .sort({ createdAt: -1 });
  res.render("admin/dashboard.ejs", {
    pendingOrders,
    servedOrders
  });
});


router.post("/order/:id/status", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  await Order.findByIdAndUpdate(id, { status });
  res.redirect("/admin/dashboard");
});


router.get("/history", isAdmin, async (req, res) => {
  const { filter } = req.query;
  let dateFilter = {};
  const now = new Date();

  if (filter === "today") {
    const start = new Date();
    start.setHours(0,0,0,0);
    const end = new Date();
    end.setHours(23,59,59,999);
    dateFilter = { createdAt: { $gte: start, $lte: end } };
  }
  else if (filter === "week") {
    const start = new Date();
    start.setDate(now.getDate() - 7);
    dateFilter = { createdAt: { $gte: start } };
  }
  else if (filter === "month") {
    const start = new Date();
    start.setMonth(now.getMonth() - 1);
    dateFilter = { createdAt: { $gte: start } };
  }
  else {
    const start = new Date();
    start.setHours(0,0,0,0);
    dateFilter = { createdAt: { $gte: start } };
  }

  const orders = await Order.find({
    status: "Paid",
    ...dateFilter
  }).sort({ createdAt: -1 });

  const totalOrders = orders.length;

  const totalRevenue = orders.reduce(
    (sum, order) => sum + order.totalAmount,
    0
  );

  res.render("admin/history.ejs", {
    orders,
    totalOrders,
    totalRevenue,
    activeFilter: filter || "today"
  });

});


router.get("/menu", isAdmin, async (req, res) => {
  const categories = await Category.find({});
  const activeCategory = categories[0];

  const items = await FoodItem.find({
    category: activeCategory.name
  });

  res.render("admin/menu.ejs", {
    categories,
    activeCategory,
    items
  });
});


router.get("/menu/:slug", isAdmin, async (req, res) => {
  const { slug } = req.params;

  const categories = await Category.find({});
  const activeCategory = await Category.findOne({ slug });

  const items = await FoodItem.find({
    category: activeCategory.name
  });

  res.render("admin/menu.ejs", {
    categories,
    activeCategory,
    items
  });
});


router.post("/food/:id/toggle", isAdmin, async (req, res) => {
  const { id } = req.params;
  const { action, categorySlug } = req.body;

  const item = await FoodItem.findById(id);

  if (!item) return res.redirect("/admin/menu");

  item.isAvailable = action === "available";

  await item.save();

  res.redirect(`/admin/menu/${categorySlug}`);
});


router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send("Logout failed");
    }
    res.redirect("/admin/login");
  });
});

module.exports = router;