const express = require('express');
const router = express.Router();
const Order = require('../models/order.model');
const { isAuth, isAdmin } = require('../middleware/authMiddleware');

// --- (USER) Create a New Order ---
// POST /api/orders
router.post('/', isAuth, async (req, res) => {
  try {
    const { orderItems, shippingAddress, totalPrice } = req.body;

    if (orderItems && orderItems.length === 0) {
      return res.status(400).json({ message: 'No order items' });
    }

    const order = new Order({
      user: req.user._id, // from isAuth middleware
      orderItems,
      shippingAddress,
      totalPrice,
      // orderStatus and paymentMethod will use default values
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error creating order', error: error.message });
  }
});


// --- (ADMIN) Get All Orders ---
// GET /api/orders
router.get('/', isAuth, isAdmin, async (req, res) => {
  try {
    // Find all orders and populate the 'user' field with their name and email
    const orders = await Order.find({}).populate('user', 'id name email');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching orders' });
  }
});

//(Admin) get Single Order by ID
router.get('/:id',isAuth,isAdmin,async(req,res) => {
  try{
    const order = await Order.findById(req.params.id).populate('user','name email');
    if (order) {
      res.json(order);
    } else {
      res.status(404).json ({message:"Order not found"});
    }
  } catch (error) {
    res.status(500).json({message:"Server error"})
  }
});

//(Admin) Update Order  Status
router.put('/:id/status', isAuth,isAdmin, async(req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);

    if (order) {
      order.orderStatus = status;
      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    } 
  } catch (error){
     res.status(500).json({ message: 'Server error' });
  }

});




module.exports = router;