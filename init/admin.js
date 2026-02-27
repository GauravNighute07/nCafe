require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Admin = require("../models/admin");

const url = process.env.MONGO_URI;

async function createAdmin() {
  await mongoose.connect(url);

  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, Number(process.env.BCRYPT_ROUNDS));

  await Admin.create({
    username: process.env.ADMIN_USERNAME,
    password: hashedPassword
  });

  console.log("Admin created successfully");

  mongoose.connection.close();
}

createAdmin();
