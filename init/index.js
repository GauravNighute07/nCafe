require("dotenv").config();
const mongoose = require("mongoose")
const url = process.env.MONGO_URI;

const Category = require("../models/categories.js")
const FoodItem = require("../models/fooditems.js")

const categoryData = require("./categories.js")
const fooditemData = require("./fooditems.js")

main()
.then(()=>{
    console.log("mongoDB connection Established..!!")
})
.catch((err)=>{
    console.log(err)
})

async function main() {
    await mongoose.connect(url)
}

async function initDB() {

  await Category.deleteMany({});
  await FoodItem.deleteMany({});

  console.log("Old data deleted");

  await Category.insertMany(categoryData);
  await FoodItem.insertMany(fooditemData);

  console.log("Category & FoodItem data inserted successfully");

  mongoose.connection.close();
}

initDB();