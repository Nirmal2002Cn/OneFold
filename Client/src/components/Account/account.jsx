import React, { useState } from 'react';
import './account.css'; 

function account() {

  const [loginData,setLoginData] =useState({email:'',password:''});
  const [registerData, setRegisterData] = useState({firstName:"",lastName:"",email:"",password:""});

  const handleLoginChange = (e) => {
    setLoginData({...loginData,[e.target.name]: e.target.value});
  };

  const handleRegisterChange = (e) => {
    setRegisterData({...registerData,[e.target.name]: e.target.value});
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", registerData);
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
              />
            </div>

            <div className="input-group">
              <label className="label">
                Password <span className='required'>*</span>
              </label>
              <input
               type="password"
                name='password'
                value={loginData.password}
                onChange={handleLoginChange}
                className='input'
                />
            </div>
            <button type="submit" className="sign-in-button">
              SIGN IN
            </button>

            <div className="frogot-password">
              Fogot your password?
            </div>
          </form>
        </div>
        <div className="form-section">
          <h2 className='form-title'>Register</h2>
          <p className='form-description'>
            Please register below to create an account
          </p>
          <form className='form' onSubmit={handleRegisterSubmit}>
            <div className="input-group">
              <label className="label">
                First Name
              </label>
              <input
                type='text'
                name='firstName'
                value={registerData.firstName}
                onChange={handleRegisterChange}
                className='input'
                />
            </div>

            <div className="input-group">
              <label className="label">Last Name</label>
              <input
                type='text'
                name='lastName'
                value={registerData.lastName}
                onChange={handleRegisterChange}
                className='input'
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
                />
            </div>

            <button type='submit' className='create-account-button'>  
              CREATE AN ACCOUNT
            </button>

          </form>
        </div>

      </div>

    </div>
  )
}

export default account