import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import './AdminOrderDetails.css'; // We create this next

function AdminOrderDetails() {
  const { id } = useParams();
  const { token } = useAuth();
  
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusLoading, setStatusLoading] = useState(false);

  // Fetch Order Function
  const fetchOrder = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/orders/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!response.ok) throw new Error('Order not found');
      const data = await response.json();
      setOrder(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchOrder();
  }, [id, token]);

  // Update Status Function
  const handleStatusUpdate = async (newStatus) => {
    if (!window.confirm(`Mark order as ${newStatus}?`)) return;
    
    try {
      setStatusLoading(true);
      const response = await fetch(`http://localhost:5000/api/orders/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        fetchOrder(); // Refresh data to show new status
      }
    } catch (err) {
      alert("Failed to update status");
    } finally {
      setStatusLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading details...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!order) return <div className="error">Order not found</div>;

  return (
    <div className="order-details-container">
      <Link to="/admin/orders" className="back-link">← Back to Orders</Link>
      
      <div className="order-header">
        <h2>Order #{order._id}</h2>
        <div className={`status-badge-large status-${order.orderStatus.toLowerCase()}`}>
          {order.orderStatus}
        </div>
      </div>

      <div className="order-grid">
        {/* --- Column 1: Customer & Shipping --- */}
        <div className="order-card">
          <h3>Customer Details</h3>
          <p><strong>Name:</strong> {order.user?.name}</p>
          <p><strong>Email:</strong> {order.user?.email}</p>
          
          <h3 style={{marginTop: '20px'}}>Shipping Address</h3>
          <p>{order.shippingAddress.address}</p>
          <p>{order.shippingAddress.city}, {order.shippingAddress.postalCode}</p>
          <p><strong>Phone:</strong> {order.shippingAddress.phone}</p>
        </div>

        {/* --- Column 2: Order Items --- */}
        <div className="order-card">
          <h3>Items to Pack</h3>
          <div className="order-items-list">
            {order.orderItems.map((item, index) => (
              <div key={index} className="order-item-row">
                <img src={item.mainImg} alt={item.name} />
                <div className="item-info">
                  <p className="item-name">{item.name}</p>
                  <p>Size: <strong>{item.selectedSize}</strong></p>
                  <p>Qty: <strong>{item.quantity}</strong></p>
                </div>
                <p className="item-price">Rs. {item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          <div className="order-total">
             <h3>Total Amount: Rs. {order.totalPrice}</h3>
             <p>(Payment: {order.paymentMethod})</p>
          </div>
        </div>
      </div>

      {/* --- Status Actions --- */}
      <div className="status-actions">
        <h3>Update Status:</h3>
        <button 
          disabled={statusLoading || order.orderStatus === 'Shipped'}
          onClick={() => handleStatusUpdate('Shipped')}
          className="btn-ship"
        >
          Mark as Shipped
        </button>
        
        <button 
          disabled={statusLoading || order.orderStatus === 'Delivered'}
          onClick={() => handleStatusUpdate('Delivered')}
          className="btn-deliver"
        >
          Mark as Delivered
        </button>
      </div>
    </div>
  );
}

export default AdminOrderDetails;