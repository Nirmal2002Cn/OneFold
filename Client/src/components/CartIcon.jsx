import React from "react";
import {useCart} from './CartProvider';
import {Link} from 'react-router-dom';

function CartIcon() {
    const {cartItems} = useCart();


    return (
        <Link to="/cart" className="cart-icon">
            <img src="/cart.svg" alt="cart" className="icon"/>
            {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
            )}
        </Link>
    );
}

export default CartIcon;