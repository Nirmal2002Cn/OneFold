const mongoose = require('mongoose');
require('dotenv').config(); // Loads variables from .env

// Import your original product data and the Mongoose model
const Product = require('./models/product.model');
const {
  kidsProducts,
  mensProducts,
  womenProducts,
  homeProducts,
  babyProducts,
  homeLivingProducts,
  partyProducts,
  mensWear,
  NAwomens,
  Hwomens
} = require('./Product.js'); // Your original data file

// --- Helper Function to Clean and Transform Data ---
// This function takes one of your product objects and adds the
// 'category' and 'price' (as a number).
const transformProduct = (product, category) => {
  // Cleans "Rs 700.00" or "Rs 15,200.00" into a number like 700 or 15200
  const numericPrice = Number(product.price.replace('Rs', '').replace(/,/g, '').trim());
  
  return {
    name: product.name,
    price: numericPrice,
    mainImg: product.mainImg,
    hoverImg: product.hoverImg,
    sizes: product.sizes || [], // Set default empty array if sizes is missing
    category: category        // Add the category
  };
};

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully for seeding');

        // Clear existing products
        await Product.deleteMany({});
        console.log('Existing products cleared');

        // Transform ALL Products Arrays
        const allProducts =[
            ...kidsProducts.map(product => transformProduct(product, 'kids')),
            ...mensProducts.map(product => transformProduct(product, 'mens')),
            ...womenProducts.map(product => transformProduct(product, 'womens')),
            ...homeProducts.map(product => transformProduct(product, 'home')),
            ...babyProducts.map(product => transformProduct(product, 'baby')),
            ...homeLivingProducts.map(product => transformProduct(product, 'home-living')),
            ...partyProducts.map(product => transformProduct(product, 'party')),
            ...mensWear.map(product => transformProduct(product, 'mens-wear')),
            ...NAwomens.map(product => transformProduct(product, 'NA-womens')),
            ...Hwomens.map(product => transformProduct(product, 'H-womens')),
        ];
        // Insert transformed products into the database
        await Product.insertMany(allProducts);
        console.log('Successfully imported all products');


    }
    catch(err) {
        console.error('Error seeding database:', err);
    }finally {
        // Close the database connection
        await mongoose.disconnect();
        console.log('MongoDB connection closed');
    }
};
// Run the seed function
seedDatabase();