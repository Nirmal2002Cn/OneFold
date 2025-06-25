import React, { createContext, useContext, useState } from 'react';

// Create a context for cart data
const CartContext = createContext();

// Custom hook to access cart context
export function useCart() {
    return useContext(CartContext);
}

// CartProvider component to wrap around your app
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // Add an item to the cart
    const addToCart = (item) => {
        setCartItems(prev => [...prev, item]);
    };

    // Remove an item from the cart by index
    const removeFromCart = (indexToRemove) => {
        setCartItems(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    // Calculate total price from cart items
    const getTotal = () => {
        return cartItems.reduce((sum, item) => {
            if (!item.price || typeof item.price !== 'string') return sum;

            // Remove "Rs", commas and spaces, but keep decimal point
            const cleaned = item.price.replace(/[^0-9.]/g, '');
            const price = parseFloat(cleaned);
            return sum + (isNaN(price) ? 0 : price);
        }, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotal }}>
            {children}
        </CartContext.Provider>
    );
}
