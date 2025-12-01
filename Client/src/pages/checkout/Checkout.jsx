import React, { useState } from 'react';
import { useCart } from '../../components/CartProvider';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
    const { cartItems, getTotal, clearCart } = useCart();
    const { user, token } = useAuth();
    const navigate = useNavigate();

    const [shippingAddress, setShippingAddress] = useState({
        address: '',
        city: '',
        postalCode: '',
        phone: ''
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); // ✅ Fixed typo (setLoadin -> setLoading)

    // Handle form input changes
    const handleChange = (e) => {
        setShippingAddress({
            ...shippingAddress,
            [e.target.name]: e.target.value
        });
    };

    // Handle place order
    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        setError(null);

        // Validation
        if (!user) {
            setError('You must be logged in to place an order');
            navigate('/account');
            return;
        }
        if (cartItems.length === 0) {
            setError("Your Cart is Empty");
            return;
        }
        if (!shippingAddress.address || !shippingAddress.city || !shippingAddress.postalCode || !shippingAddress.phone) {
            setError('Please fill in all shipping fields');
            return;
        }

        setLoading(true);

        // Prepare Order Data
        const orderData = {
            orderItems: cartItems.map(item => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                mainImg: item.mainImg,
                selectedSize: item.selectedSize,
                product: item._id
            })),
            shippingAddress: shippingAddress,
            totalPrice: getTotal()
        };

        // Send order to backend
        try {
            const response = await fetch('http://localhost:5000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(orderData)
            });

            // ✅ 1. Parse the response immediately to get the data (including _id)
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to place order.');
            }

            // Order was successful!
            clearCart();
            
            // ✅ 2. REMOVED ALERT & Navigate to Success Page
            // We pass the new Order ID in the "state" so the success page can show it
            navigate('/order-success', { state: { orderId: data._id } });

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="checkout-container">
            <div className="checkout-form">
                <h2>Shipping Address</h2>
                <form onSubmit={handlePlaceOrder}>
                    <div className="input-group">
                        <label>Address</label>
                        <input type="text" name="address" onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label>City</label>
                        <input type="text" name="city" onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label>Postal Code</label>
                        <input type="text" name="postalCode" onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label>Phone Number</label>
                        <input type="text" name="phone" onChange={handleChange} required />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="place-order-btn" disabled={loading}>
                        {loading ? 'Placing Order...' : `Place Order (Cash on Delivery)`}
                    </button>
                </form>
            </div>

            <div className="order-summary">
                <h3>Order Summary</h3>
                {cartItems.map(item => (
                    <div key={item._id} className="summary-item">
                        <img src={item.mainImg} alt={item.name} />
                        <div>
                            <p>{item.name} (x{item.quantity})</p>
                            <p>Size: {item.selectedSize}</p>
                        </div>
                        <p>Rs. {item.price * item.quantity}</p>
                    </div>
                ))}
                <hr />
                <div className="summary-total">
                    <strong>Total</strong>
                    <strong>Rs. {getTotal()}</strong>
                </div>
            </div>
        </div>
    );
}

export default Checkout;