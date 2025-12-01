import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext'; // Check path
import { Link } from 'react-router-dom';
import './ManageOrders.css'; // We'll create this next

function ManageOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth(); // Get the token to authorize our request

  useEffect(() => {
    const fetchOrders = async () => {
      if (!token) {
        setLoading(false);
        setError("You must be logged in as an admin.");
        return;
      }

      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/orders', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]); // Re-run if the token changes

  if (loading) return <div className="loading">Loading orders...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="manage-orders-container">
      <h2>Manage Orders</h2>
      
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td title={order._id}>
                  {order._id.substring(0, 10)}... 
                </td>
                <td>{order.user ? order.user.name : 'Guest'}</td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                <td>Rs. {order.totalPrice}</td>
                <td>
                  <span className={`status-badge status-${order.orderStatus.toLowerCase()}`}>
                    {order.orderStatus}
                  </span>
                </td>
                <td>
                  {/* We can build this page next */}
                  <Link to={`/admin/order/${order._id}`} className="details-link">
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ManageOrders;