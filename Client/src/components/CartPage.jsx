import React from 'react';
import './Cart.css';
import { useCart } from './CartProvider';
import { useNavigate } from 'react-router-dom'; // <-- 1. IMPORT THIS

function CartPage() {
  const { cartItems, removeFromCart, getTotal } = useCart();
  const navigate = useNavigate(); // <-- 2. ACTIVATE HOOK

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className='cart-items'>
            {cartItems.map((item, index) => (
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
            
            {/* --- 3. ADD THE CHECKOUT BUTTON --- */}
            <button 
              className="checkout-button" 
              onClick={() => navigate('/checkout')}
              style={{
                marginTop: '15px',
                padding: '10px 20px',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Proceed to Checkout
            </button>
            {/* ---------------------------------- */}
            
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;