import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './OrderSuccess.css';

const OrderSuccess = () => {
    const location = useLocation();

    //Get the orderId from the checkout page
    const {orderId} = location.state || {};

    return (
        <div className="success-container">
            <div className="success-card">
                <div className="success-icon">
                    ✓
                </div>
                <h1>Thank You!</h1>
                <p className='success-message'>Your order has been placed </p>

                {orderId && (
                    <p className='order-id'>
                        Order ID: <strong>#{orderId}</strong>
                    </p>
                )}

                <p className='sub-text'>
                    We have received your order and will process it shortly.
                    <br />
                    (Payment Method: Cash on Delivery)
                </p>

                <div className="success-actions">
                    <Link to="/" className='continue-btn'>
                        Continue Shopping
                    </Link>
                    <Link to="/account" className='account-btn'>
                        View My Orders
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess;