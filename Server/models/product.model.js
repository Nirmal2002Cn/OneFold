const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  // We use `name` from your file
  name: {
    type: String,
    required: true,
    trim: true // Removes whitespace
  },
  // We will store price as a number, not "Rs 700.00"
  price: {
    type: Number,
    required: true
  },
  // The category, like "kids", "mens", "womens"
  category: {
    type: String,
    required: true,
    lowercase: true
  },
  // The URL to the main image
  mainImg: {
    type: String,
    required: true
  },
  // The URL to the hover image
  hoverImg: {
    type: String,
    required: true
  },
  // The array of sizes. It can be empty (for kids products).
  sizes: {
    type: [String], // An array of strings
    default: []     // Defaults to an empty array
  }
}, {
  // Adds `createdAt` and `updatedAt` timestamps automatically
  timestamps: true 
});

// Create the 'Product' model from the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
