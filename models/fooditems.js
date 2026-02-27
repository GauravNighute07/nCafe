const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    subcategory: {
        type: String
    },

    description: {
        type: String
    },

    price: {
        type: Number     
    },

    sizes: [
        {
            label: {
                type: String    
            },
            price: {
                type: Number
            }
        }
    ],

    isAvailable: {
        type: Boolean,
        default: true
    }

}, { timestamps: true });

module.exports = mongoose.model("FoodItem", foodItemSchema);
