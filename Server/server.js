const express= require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Loads variables from .env file

// Import product routes
const productRoutes =require('./routes/product.routes');
//import auth routes
const authRoutes = require('./routes/auth.routes');
const orderRoutes = require('./routes/order.routes');

//App initialization
const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware ---
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Allow server to accept JSON data



//Route Handling
app.use('/api/products', productRoutes);
//tell app to use auth routes
app.use('/api/auth', authRoutes);

app.use('/api/orders', orderRoutes);

//Database connection

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MoongoDB connected successfuly'))
  .catch((err => console.error('MongoDB connection error:', err)));

  //Simple Welcome Route
  app.get('/',(req,res) => {
    res.send('Welcome to OneFold Backend Server');
  });

  // --- Start The Server ---
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});