const Product = require('../models/product.model');

//The function to cretae a new product
const createProduct = async(req, res) => {
    try{
        //Get product data from request body
        const {name,price,category,mainImg,hoverImg,sizes} = req.body;

        //Create a new product instance
        const newProduct =new Product({
            name,
            price,
            category,
            mainImg,
            hoverImg,
            sizes
        });

        //Save the product to the database
        const savedProduct = await newProduct.save();

        //Send a success response
        res.status(201).json(savedProduct);
    } catch(err){
        res.status(500).json({message: 'Server Error', error: err.message});
        
    }
};