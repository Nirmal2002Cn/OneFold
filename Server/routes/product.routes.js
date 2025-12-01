const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

// --- 1. IMPORT YOUR NEW MIDDLEWARE ---
const { isAuth, isAdmin } = require('../middleware/authMiddleware'); // (Check the path)

// --- GET ALL PRODUCTS (Public) ---
// Everyone can see products
router.get('/', async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = {};
    if (category) {
      query.category = category.toLowerCase();
    }
    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }
    const products = await Product.find(query);
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// --- GET A SINGLE PRODUCT (Public) ---
// Everyone can see a single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.status(500).send('Server Error');
  }
});

// --- CREATE A NEW PRODUCT (Admin Only) ---
//
// --- 2. ADD THE MIDDLEWARE HERE ---
//
// This tells Express:
// 1. First, run `isAuth`.
// 2. If that passes, run `isAdmin`.
// 3. If BOTH pass, run the main route logic.
//
router.post('/', isAuth, isAdmin, async (req, res) => {
  try {
    const { name, price, category, mainImg, hoverImg, sizes } = req.body;

    const newProduct = new Product({
      name,
      price,
      category,
      mainImg,
      hoverImg,
      sizes,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
});

module.exports = router;