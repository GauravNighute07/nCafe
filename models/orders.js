const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

  tableNumber: {
    type: Number,
    required: true
  },

  items: [
    {
      foodItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FoodItem",
        required: true
      },

      name: {
        type: String,
        required: true   
      },

      selectedSize: {
        type: String
      },

      price: {
        type: Number,
        required: true   
      },

      quantity: {
        type: Number,
        required: true,
        min: 1
      }
    }
  ],

  totalAmount: {
    type: Number,
    required: true
  },

  status: {
    type: String,
    enum: ["Pending", "Served", "Paid"],
    default: "Pending"
  }

}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
