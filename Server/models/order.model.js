const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    orderItems: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
            mainImg: { type: String, required: true },
            selectedSize: { type: String },

            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            }
        }
    ],

    shippingAddress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        phone: { type: String, required: true },
    },

    paymentMethod: {
        type: String,
        required: true,
        default: 'Cash on Delivery'
    },
    orderStatus: {
        type: String,
        required: true,
        enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending' // Changed to 'Pending' to match your enum exactly
    },

    totalPrice: {
        type: Number,
        required: true,
        default: 0.0 // Fixed typo: 'defualt' -> 'default'
    }
}, {
    timestamps: true //Adds CreatedAT and UpdatedAt
});

// ✅ FIXED: Separated the name and the schema with a comma
const Order = mongoose.model('Order', orderSchema);

// ✅ FIXED: Added 's' to exports
module.exports = Order;