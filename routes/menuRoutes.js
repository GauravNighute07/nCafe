const express = require("express");
const router = express.Router();

const Category = require("../models/categories");
const FoodItem = require("../models/fooditems");

const noCache = require("../middleware/noCache");


router.get("/menu",noCache,async (req,res)=>{
    let tableNumber = req.query.table
    // console.log(tableNumber)
    let categories = await Category.find({})
    res.render("menu.ejs",{categories , tableNumber})
})


router.get("/menu/pizza",async(req,res)=>{
    let tableNumber = req.query.table
    let pizzas= await FoodItem.find({category:"Pizza"})
    // console.log(pizzas)
    res.render("pizza.ejs",{pizzas,tableNumber, bannerImage: "/images/banner_images/pizza.webp"})
})


router.get("/menu/:slug",noCache,async(req,res)=>{
    let tableNumber = req.query.table
    let {slug} = req.params
    let category = await Category.findOne({slug})
    // console.log(category)
    let foodItems = await FoodItem.find({category:category.name})
    // console.log(foodItems)
    res.render("fooditem.ejs",{category,foodItems,tableNumber})
})


router.get("/menu/live/:category", async (req, res) => {
  const { category } = req.params;
  const items = await FoodItem.find({ category });
  res.json(items);
});


module.exports = router;