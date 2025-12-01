const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

// Middleware to check if user is logged in
const isAuth = async (req, res, next) => {
    let token;

    // Check for token in headers
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // ✅ FIX 1: Added the dot before .split()
            token = req.headers.authorization.split(' ')[1];

            console.log("Checking token:", token);

            // ✅ FIX 2: Removed the extra 'jwt.decode' line and kept only verify
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            console.log("Decoded ID:", decoded.user.id);

            // Get user from the token
            req.user = await User.findById(decoded.user.id).select('-password');

            next(); // Proceed to the next middleware
        } catch (error) {
            console.error("Auth Error:", error.message);
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

// Middleware to check if user is admin
const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: "Not authorized as an admin" });
    }
};

module.exports = { isAuth, isAdmin };