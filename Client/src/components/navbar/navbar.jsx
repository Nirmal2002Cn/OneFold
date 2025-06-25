import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom'; 
import CartIcon from '../CartIcon';


function Navbar() {
  return (
    <div className='navbar-wrapper'>
      <div className='promo-banner'>
        Sign up and get 10% off your first order
      </div>
      <div className='navbar'>
        <div className='logo'>
          <Link to="/">
            <img className='onefold' src="logo.png" alt="logo" />
          </Link>
        </div>
        <div className='nav-links'>
          <Link to="/women">WOMEN</Link>
          <Link to="/men">MEN</Link>
          <Link to="/kids">KIDS</Link>
          <Link to="/home-living">HOME & LIVING</Link>
          <Link to="/mother-baby">MOTHER & BABY</Link>
          <Link to="/party">PARTY</Link>
        </div>
        <div className='nav-actions'>
          <input type="text" className='searchbox' placeholder="Search the store" />
          <img src="search.svg" alt="search" className="icon-s" />
          <Link to="/account">
            
          
          <img src="account.svg" alt="user" className="icon" />
          </Link>
          <CartIcon/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
