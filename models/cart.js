const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({

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
        default: 1,
        min: 1
      }
    }
  ],

  totalAmount: {
    type: Number,
    default: 0
  }

}, { timestamps: true });

module.exports = mongoose.model("Cart", cartSchema);
