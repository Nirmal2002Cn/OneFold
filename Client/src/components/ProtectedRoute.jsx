import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // (Check your path)

const ProtectedRoute = () => {
  const { user } = useAuth();

  // 1. Check if the user exists AND if their role is 'admin'
  const isAdmin = user && user.role === 'admin';

  if (!user) {
    // 2. If user is not logged in at all, send them to the login page
    return <Navigate to="/account" replace />;
  }

  if (!isAdmin) {
    // 3. If user is logged in but NOT an admin, send them to the homepage
    return <Navigate to="/" replace />;
  }

  // 4. If user is logged in AND is an admin, show the page
  return <Outlet />;
};

export default ProtectedRoute;