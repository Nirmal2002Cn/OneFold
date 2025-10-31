import React from "react";
import {useCart} from './CartProvider';
import {Link} from 'react-router-dom';

function CartIcon() {
    const {cartItems} = useCart();


    return (
        <Link to="/cart" className="cart-icon">
            <img src="https://res.cloudinary.com/ddqdolyqw/image/upload/v1761399214/cart_m2o84w.svg" alt="cart" className="icon"/>
            {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
            )}
        </Link>
    );
}

export default CartIcon;