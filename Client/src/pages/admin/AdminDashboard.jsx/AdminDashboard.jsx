import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import './AdminDashboard.css';

function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <p>Welcome, {user ? user.name : 'Admin'}!</p>
      </div>

      <div className="admin-nav-links">
        
        <Link to="/admin/add-product" className="admin-nav-card">
          <h3>Add Product</h3>
          <p>Create a new product listing</p>
        </Link>

        {/* --- ADD THIS NEW CARD --- */}
        <Link to="/admin/orders" className="admin-nav-card">
          <h3>Manage Orders</h3>
          <p>View and process new orders</p>
        </Link>
        {/* --- END OF NEW CARD --- */}

      </div>
    </div>
  );
}

export default AdminDashboard;