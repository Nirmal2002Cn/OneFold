const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

// --- GET ALL PRODUCTS (or by category) ---
// This handles:
// GET /api/products
// GET /api/products?category=mens
router.get('/', async (req, res) => {
  try {
    const category = req.query.category;

    let query = {};
    if (category) {
      query.category = category.toLowerCase();
    }

    const products = await Product.find(query);
    res.json(products);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// --- GET A SINGLE PRODUCT BY ID ---
// This handles:
// GET /api/products/60d5f1b2c3b3e0b0d8c1c2b
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    res.json(product);

  } catch (err) {
    console.error(err.message);
    // If the ID is not a valid MongoDB ID, it will error
    if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Product not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
