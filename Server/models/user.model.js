// In models/user.model.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // No two users can have the same email
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  // This is the key field for your admin pages!
  role: {
    type: String,
    enum: ['user', 'admin'], // role can only be 'user' or 'admin'
    default: 'user',        // Everyone who signs up is a 'user'
  },
}, {
  timestamps: true // Adds createdAt and updatedAt
});

const User = mongoose.model('User', userSchema);

module.exports = User;