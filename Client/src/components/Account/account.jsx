// src/components/Account/Account.jsx
import React, { useState } from 'react';
import './account.css';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Account() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.msg || 'Invalid email or password');

      login(data.user, data.token);
      toast.success('✅ Login successful! Redirecting...', { position: 'top-center' });

      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      toast.error(err.message || '❌ Login failed. Please try again.', { position: 'top-center' });
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.msg || 'Failed to register');

      toast.success('🎉 Registration successful! Please log in.', { position: 'top-center' });
      setRegisterData({ name: '', email: '', password: '' });
    } catch (err) {
      toast.error(err.message || '⚠️ Something went wrong. Try again.', { position: 'top-center' });
    }
  };

  return (
    <div className='account-container'>
      <div className="breadcrumb">
        <span className="breadcrumb-link">Home </span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current"> Account</span>
      </div>

      <div className="page-title">
        <h1 className='sign-in'>SIGN IN</h1>
      </div>

      <div className="forms-container">
        {/* Login Form */}
        <div className="form-section">
          <h2 className='form-title'>Login</h2>
          <p className='form-description'>
            Please enter your email and password below to access your account
          </p>

          <form className='form' onSubmit={handleLoginSubmit}>
            <div className="input-group">
              <label className="label">
                Email Address <span className='required'>*</span>
              </label>
              <input
                type='email'
                name='email'
                value={loginData.email}
                onChange={handleLoginChange}
                className='input'
                required
              />
            </div>

            <div className="input-group">
              <label className="label">
                Password <span className='required'>*</span>
              </label>
              <input
                type='password'
                name='password'
                value={loginData.password}
                onChange={handleLoginChange}
                className='input'
                required
              />
            </div>

            <button type="submit" className="sign-in-button">
              SIGN IN
            </button>
          </form>
        </div>

        {/* Register Form */}
        <div className="form-section">
          <h2 className='form-title'>Register</h2>
          <p className='form-description'>
            Please register below to create an account
          </p>

          <form className='form' onSubmit={handleRegisterSubmit}>
            <div className="input-group">
              <label className="label">
                Name <span className='required'>*</span>
              </label>
              <input
                type='text'
                name='name'
                value={registerData.name}
                onChange={handleRegisterChange}
                className='input'
                required
              />
            </div>

            <div className="input-group">
              <label className="label">
                Your Email Address <span className='required'>*</span>
              </label>
              <input
                type='email'
                name='email'
                value={registerData.email}
                onChange={handleRegisterChange}
                className='input'
                required
              />
            </div>

            <div className="input-group">
              <label className="label">
                Password <span className='required'>*</span>
              </label>
              <input
                type='password'
                name='password'
                value={registerData.password}
                onChange={handleRegisterChange}
                className='input'
                required
              />
            </div>

            <button type='submit' className='create-account-button'>
              CREATE AN ACCOUNT
            </button>
          </form>
        </div>
      </div>

      {/* Toast Container for popups */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}

export default Account;
