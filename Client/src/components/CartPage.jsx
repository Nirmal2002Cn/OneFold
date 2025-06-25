import React from 'react';
import './Cart.css';
import {useCart} from './CartProvider';

function CartPage(){
    const {cartItems,removeFromCart,getTotal} = useCart();





    return(
        
        <div className="cart-page">
            <h2>Your Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ):(
                <>
                <ul className='cart-items'>
                    {cartItems.map((item,index) => (
                        <li key={index} className='cart-item'>
                            <img src={item.mainImg} alt={item.name} width={60} />
                            <div className='item-info'>
                                <p><strong>{item.name}</strong></p>
                                <p>{item.price}</p>
                                {item.selectedSize && <p>Size: {item.selectedSize}</p>}
                            </div>
                            <button onClick={() => removeFromCart(index)} className='remove-btn'>Remove</button>

                        </li>
                    ))}

                </ul>

                <div className='cart-total'>
                    <h3>Total : Rs {getTotal().toLocaleString()}</h3>

                </div>
                
                
                </>
            )}


        </div>
            

    );
}

export default CartPage;