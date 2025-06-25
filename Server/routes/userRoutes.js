const express = require('express');
const router = express.Router();
const User = require ('../models/User');



router.post('/register', async(req, res) => {
    try{
        const newUser =new User(req.body);
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to register user', details: err.message });

    }

    });

    module.exports = router;