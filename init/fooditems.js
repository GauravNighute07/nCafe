const foodItems = [
  {
    name: "Plain Cheese",
    category: "Pizza",
    subcategory: "Simple Veggie",
    description: "Sause/Cheese/Origano",
    sizes: [
      { label: '8"', price: 140 },
      { label: '10"', price: 200 },
      { label: '12"', price: 270 }
    ]
  },
  {
    name: "Margerita",
    category: "Pizza",
    subcategory: "Simple Veggie",
    description: "Cheese/Tomato/Dry Basil",
    sizes: [
      { label: '8"', price: 140 },
      { label: '10"', price: 200 },
      { label: '12"', price: 270 }
    ]
  },
  {
    name: "Spicy Delight",
    category: "Pizza",
    subcategory: "Simple Veggie",
    description: "Cheese/Onion/Capsicum",
    sizes: [
      { label: '8"', price: 140 },
      { label: '10"', price: 200 },
      { label: '12"', price: 270 }
    ]
  },
  {
    name: "Corn Pizza",
    category: "Pizza",
    subcategory: "Yummy Delight",
    description: "Cheese/Onion/Capsicum/Corn",
    sizes: [
      { label: '8"', price: 190 },
      { label: '10"', price: 280 },
      { label: '12"', price: 400 }
    ]
  },
  {
    name: "Paneer Pizza",
    category: "Pizza",
    subcategory: "Yummy Delight",
    description: "Cheese/Onion/Capsicum/Paneer",
    sizes: [
      { label: '8"', price: 190 },
      { label: '10"', price: 280 },
      { label: '12"', price: 400 }
    ]
  },
  {
    name: "Pepricon Pizza",
    category: "Pizza",
    subcategory: "Yummy Delight",
    description: "Cheese/Onion/Capsicum/Pepricon",
    sizes: [
      { label: '8"', price: 190 },
      { label: '10"', price: 280 },
      { label: '12"', price: 400 }
    ]
  },
  {
    name: "Olive Pizza",
    category: "Pizza",
    subcategory: "Yummy Delight",
    description: "Cheese/Onion/Capsicum/Olive",
    sizes: [
      { label: '8"', price: 190 },
      { label: '10"', price: 280 },
      { label: '12"', price: 400 }
    ]
  },
  {
    name: "Mushroom Pizza",
    category: "Pizza",
    subcategory: "Yummy Delight",
    description: "Cheese/Onion/Capsicum/Mushroom",
    sizes: [
      { label: '8"', price: 190 },
      { label: '10"', price: 280 },
      { label: '12"', price: 400 }
    ]
  },
  {
    name: "Garlic Pizza",
    category: "Pizza",
    subcategory: "Yummy Delight",
    description: "Cheese/Onion/Capsicum/Garlic",
    sizes: [
      { label: '8"', price: 190 },
      { label: '10"', price: 280 },
      { label: '12"', price: 400 }
    ]
  },
  {
    name: "Veggie Overload",
    category: "Pizza",
    subcategory: "Yummy Delight",
    description: "Cheese/Onion/Capsicum/Tomato",
    sizes: [
      { label: '8"', price: 190 },
      { label: '10"', price: 280 },
      { label: '12"', price: 400 }
    ]
  },
  {
    name: "Schezwan Pizza",
    category: "Pizza",
    subcategory: "Yummy Delight",
    description: "Cheese/Onion/Capsicum/Corn",
    sizes: [
      { label: '8"', price: 190 },
      { label: '10"', price: 280 },
      { label: '12"', price: 400 }
    ]
  },
  {
    name: "Jain Pizza",
    category: "Pizza",
    subcategory: "Yummy Delight",
    description: "Cheese/Capsicum/Corn/Tomato",
    sizes: [
      { label: '8"', price: 190 },
      { label: '10"', price: 280 },
      { label: '12"', price: 400 }
    ]
  },
  {
    name: "Crispy N Lite",
    category: "Pizza",
    subcategory: "Yummy Delight",
    description: "Cheese/Capsicum/Corn/Tomato/Onion",
    sizes: [
      { label: '8"', price: 190 },
      { label: '10"', price: 280 },
      { label: '12"', price: 400 }
    ]
  },
  {
    name: "N'Cafe Special",
    category: "Pizza",
    subcategory: "Signature",
    description: "Cheese/Onion/Capsicum/Corn/Tomato/Paneer",
    sizes: [
      { label: '8"', price: 230 },
      { label: '10"', price: 340 },
      { label: '12"', price: 450 }
    ]
  },
  {
    name: "Chinese Tadka",
    category: "Pizza",
    subcategory: "Signature",
    description: "Cheese/Onion/Capsicum/Tomato/Paneer tossed in Schezwan Sauce",
    sizes: [
      { label: '8"', price: 230 },
      { label: '10"', price: 340 },
      { label: '12"', price: 450 }
    ]
  },
  {
    name: "Sun Carnival",
    category: "Pizza",
    subcategory: "Signature",
    description: "Cheese/Corn/Tomato/Olive/Origano/Basil",
    sizes: [
      { label: '8"', price: 230 },
      { label: '10"', price: 340 },
      { label: '12"', price: 450 }
    ]
  },
  {
    name: "Flaming Spice",
    category: "Pizza",
    subcategory: "Signature",
    description: "Cheese/Onion/Capsicum/Tomato/Corn/Jalapeno/Schezwan",
    sizes: [
      { label: '8"', price: 230 },
      { label: '10"', price: 340 },
      { label: '12"', price: 450 }
    ]
  },
  {
    name: "Indian Tadka",
    category: "Pizza",
    subcategory: "Signature",
    description: "Cheese/Capsicum/Mashroom/Jalapeno/Paneer/Green Chilly/Coriander",
    sizes: [
      { label: '8"', price: 230 },
      { label: '10"', price: 340 },
      { label: '12"', price: 450 }
    ]
  },
  {
    name: "Italian Bud",
    category: "Pizza",
    subcategory: "Signature",
    description: "Cheese/Onion/Capsicum/Corn/Tomato/Olive",
    sizes: [
      { label: '8"', price: 230 },
      { label: '10"', price: 340 },
      { label: '12"', price: 450 }
    ]
  },
  {
    name: "Chilly Bomb",
    category: "Pizza",
    subcategory: "Signature",
    description: "Cheese/Onion/Capsicum/Green Chilly/Paneer blended with house spices",
    sizes: [
      { label: '8"', price: 230 },
      { label: '10"', price: 340 },
      { label: '12"', price: 450 }
    ]
  },
  {
    name: "White Bird",
    category: "Pizza",
    subcategory: "Premium",
    description: "Double Cheese/Onion/Capsicum/Corn/Olive/White Sauce Pasta",
    sizes: [
      { label: '8"', price: 280 },
      { label: '10"', price: 420 },
      { label: '12"', price: 550 }
    ]
  },
  {
    name: "Mexican Pizza",
    category: "Pizza",
    subcategory: "Premium",
    description: "Cheese/Onion/Capsicum/Tomato/Corn/Jalapeno/Blended with Salsa",
    sizes: [
      { label: '8"', price: 280 },
      { label: '10"', price: 420 },
      { label: '12"', price: 550 }
    ]
  },
  {
    name: "Mayo Cheese Pizza",
    category: "Pizza",
    subcategory: "Premium",
    description: "Cheese/Onion/Olive/Capsicum/Corn/Mashroom blended in Mayonnaise",
    sizes: [
      { label: '8"', price: 280 },
      { label: '10"', price: 420 },
      { label: '12"', price: 550 }
    ]
  },
  {
    name: "Paneer Tikka Pizza",
    category: "Pizza",
    subcategory: "Premium",
    description: "Cheese/Onion/Capsicum/Tomato/Paneer/Coriander blended in Tikka Sauce",
    sizes: [
      { label: '8"', price: 280 },
      { label: '10"', price: 420 },
      { label: '12"', price: 550 }
    ]
  },
  {
    name: "Peri-Peri Pizza",
    category: "Pizza",
    subcategory: "Premium",
    description: "Cheese/Onion/Capsicum/Jalapeno/Corn/Paneer blended in Peri-Peri Sauce",
    sizes: [
      { label: '8"', price: 280 },
      { label: '10"', price: 420 },
      { label: '12"', price: 550 }
    ]
  },
  {
    name: "Cape Pizza",
    category: "Pizza",
    subcategory: "Premium",
    description: "Cheese/Onion/Capsicum/Corn/Olive blended in Schezwan Sauce",
    sizes: [
      { label: '8"', price: 280 },
      { label: '10"', price: 420 },
      { label: '12"', price: 550 }
    ]
  },
  {
    name: "Vegiterrino Pizza",
    category: "Pizza",
    subcategory: "Premium",
    description: "Cheese/Onion/Capsicum/Tomato/Corn/Mushroom/Olive",
    sizes: [
      { label: '8"', price: 280 },
      { label: '10"', price: 420 },
      { label: '12"', price: 550 }
    ]
  },
  {
    name: "Double Decker",
    category: "Pizza",
    subcategory: "Mind Blowing",
    description: "Burst of Cheese with topping of any Signature Pizza",
    sizes: [
      { label: '8"', price: 330 },
      { label: '10"', price: 460 },
      { label: '12"', price: 600 }
    ]
  },
  {
    name: "Panjab-E-Paneer",
    category: "Pizza",
    subcategory: "Mind Blowing",
    description: "Lots of cheese and Paneer with special in house spices",
    sizes: [
      { label: '8"', price: 330 },
      { label: '10"', price: 460 },
      { label: '12"', price: 600 }
    ]
  },

  { name: "Plain French Fries", category: "Fries", price: 90 },
  { name: "Pudina French Fries", category: "Fries", price: 120 },
  { name: "Cheese French Fries", category: "Fries", price: 140 },
  { name: "Peri-Peri Fries", category: "Fries", price: 140 },
  { name: "Schezwan Fries", category: "Fries", price: 160 },
  { name: "Cheese Dip Fries", category: "Fries", price: 200 },

  { name: "Plain Maggie", category: "Munchings", price: 50 },
  { name: "Vegetable Maggie", category: "Munchings", price: 60 },
  { name: "Schezwan Maggie", category: "Munchings", price: 80 },
  { name: "Cheese Maggie", category: "Munchings", price: 100 },
  { name: "Veg Nuggets", category: "Munchings", price: 110 },
  { name: "Vegie Sticks", category: "Munchings", price: 110 },
  { name: "Cheese Nachos", category: "Munchings", price: 130 },

  { name: "Cheese Garlic Bread", category: "Toast", price: 100 },
  { name: "Cheese Chilly Toast", category: "Toast", price: 100 },

  { name: "Vegetable Frankie", category: "Frankie", price: 70, description: "Not available in rush hours" },
  { name: "Schezwan Frankie", category: "Frankie", price: 90, description: "Not available in rush hours" },
  { name: "Potato Frankie", category: "Frankie", price: 100, description: "Not available in rush hours" },
  { name: "Paneer Frankie", category: "Frankie", price: 100, description: "Not available in rush hours" },

  { name: "Red Sauce Pasta", category: "Pasta", price: 140 },
  { name: "White Sauce Pasta", category: "Pasta", price: 140 },
  { name: "Garlic Pasta", category: "Pasta", price: 150 },
  { name: "Pink Sauce Pasta", category: "Pasta", price: 150 },
  { name: "Spicy Indian Pasta", category: "Pasta", price: 160 },
  { name: "Peri-Peri Pasta", category: "Pasta", price: 160 },

  { name: "Veg Cheese Grilled", category: "Sandwich", price: 80 },
  { name: "Chocolate Sandwich", category: "Sandwich", price: 90 },
  { name: "Garlic Cheese Chilly", category: "Sandwich", price: 90 },
  { name: "Corn Cheese Sandwich", category: "Sandwich", price: 90 },
  { name: "Maska Potato Sandwich", category: "Sandwich", price: 100 },
  { name: "Chilly Milly Sandwich", category: "Sandwich", price: 110 },
  { name: "Paneer Tikka Sandwich", category: "Sandwich", price: 110 },

  { name: "Veg Cheese Burger", category: "Burger", price: 70 },
  { name: "Schezwan Burger", category: "Burger", price: 90 },
  { name: "Chatpata Burger", category: "Burger", price: 90 },
  { name: "Jalapeno Burger", category: "Burger", price: 90 },
  { name: "Peri-Peri Burger", category: "Burger", price: 100 },
  { name: "King Size Burger", category: "Burger", price: 120 },
  { name: "Cheese Party Burger", category: "Burger", price: 130 },
  { name: "Paneer Burger", category: "Burger", price: 130 },

  { name: "Fried Rice", category: "Chinese", price: 100 },
  { name: "Schezwan Fried Rice", category: "Chinese", price: 110 },
  { name: "Maska Potato Rice", category: "Chinese", price: 120 },
  { name: "Italian Bowl Rice", category: "Chinese", price: 150 },
  { name: "Veg Hakka Noodles", category: "Chinese", price: 100 },
  { name: "Veg Schezwan Noodles", category: "Chinese", price: 110 },
  { name: "Paneer Chilly", category: "Chinese", price: 140 },

  { name: "Veg Momos", category: "Momos", price: 120 },
  { name: "Corn Cheese Momos", category: "Momos", price: 160 },
  { name: "Paneer Tikka/Schezwan", category: "Momos", price: 160 },

  { name: "Belgium Dark Choc (2 Pcs)", category: "Waffles", price: 140 },
  { name: "Belgium White Choc (2 Pcs)", category: "Waffles", price: 140 },
  { name: "Day & Night (2 Pcs)", category: "Waffles", price: 150 },
  { name: "Belgium Oreo (2 Pcs)", category: "Waffles", price: 150 },
  { name: "Belgium Kitkat (2 Pcs)", category: "Waffles", price: 150 },
  { name: "Belgium Nuttela (2 Pcs)", category: "Waffles", price: 160 },
  { name: "Belgium Red Velvet (2 Pcs)", category: "Waffles", price: 160 },
  { name: "Brownie Hazzelnut (2 Pcs)", category: "Waffles", price: 180 },
  { name: "Ice-Cream Waffle (1 Pc)", category: "Waffles", price: 100 },

  { name: "Choco Lava Cake", category: "Brownie", price: 80 },
  { name: "Sandwich Brownie", category: "Brownie", price: 130 },
  { name: "Sizzling Brownie", category: "Brownie", price: 150 },
  { name: "Brownie Sunday", category: "Brownie", price: 170 },

  { name: "Hot Coffee", category: "Beverages", price: 40 },
  { name: "Hot Chocolate", category: "Beverages", price: 90 },
  { name: "Hot Marshmallow Choc", category: "Beverages", price: 130 },

  { name: "N-Frosty Coffee", category: "Cold Coffee", price: 60 },
  { name: "Thick N-Frosty", category: "Cold Coffee", price: 60 },
  { name: "N-Frosty With Crush", category: "Cold Coffee", price: 70 },
  { name: "N-Frosty With Ice Cream", category: "Cold Coffee", price: 80 },

  { name: "Mango Milkshake", category: "Milk Shakes", price: 70 },
  { name: "Pineapple Milkshake", category: "Milk Shakes", price: 70 },
  { name: "Strawberry Milkshake", category: "Milk Shakes", price: 70 },
  { name: "Butterscotch Milkshake", category: "Milk Shakes", price: 70 },
  { name: "Blueberry Milkshake", category: "Milk Shakes", price: 90 },
  { name: "Oreo Milkshake", category: "Milk Shakes", price: 100 },
  { name: "Kit-Kat Milkshake", category: "Milk Shakes", price: 100 },
  { name: "Nuttela Milkshake", category: "Milk Shakes", price: 120 },
  { name: "Chocolate Milkshake", category: "Milk Shakes", price: 70 },
  { name: "Chocolate Overload", category: "Milk Shakes", price: 120 },
  { name: "Lemon Ice-Tea", category: "Milk Shakes", price: 50, description: "Not available in rush hours" },
  { name: "Blue Lagoon", category: "Milk Shakes", price: 50 },
  { name: "Spicy Guava Juice", category: "Milk Shakes", price: 50, description: "Not available in rush hours" }
];

module.exports = foodItems;
