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
        return cartItems.reduce((sum,item) => {
            return sum + (item.price || 0);
        },0)
    }

    const clearCart = () => {
        setCartItems([]);
    }





    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotal,clearCart }}>
            {children}
        </CartContext.Provider>
    );
}
