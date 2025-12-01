import React, { useState } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom'; 
import CartIcon from '../CartIcon';
import {useAuth} from '../../context/AuthContext';

function Navbar() {
  const{user,logout} =useAuth();

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <div className='navbar-wrapper'>
      <div className='promo-banner'>
        Sign up and get 10% off your first order
      </div>

      <div className='navbar'>
        <div className='logo'>
          <Link to="/">
            <img
              className='onefold'
              src="https://res.cloudinary.com/ddqdolyqw/image/upload/v1761399233/logo_wyeh36.png"
              alt="logo"
            />
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
          <form className='search-form' onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className='searchbox'
              placeholder="Search the store"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type='submit' className='search-button'>
               <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon-s"
                      >
                        <circle cx="8" cy="8" r="6"></circle>
                        <line x1="14" y1="14" x2="11.5" y2="11.5"></line>
                      </svg>
            </button>
          </form>


          {
            user ?(
              //User is Logged In
              <>
                {user.role === 'admin' && (
                  <Link to='/admin' className='nav-admin-link'>
                    Admin
                  </Link>
                )}
                <button onClick={handleLogout} className='nav-logout-button'>
                  Logout
                </button>
              </>
            
            ) : (
              //User is Logged Out
              <Link to="/account">
                <img src="https://res.cloudinary.com/ddqdolyqw/image/upload/v1761399212/account_urpfmt.svg" alt="user" className="icon" />
              </Link>

            )
          }

         

          <CartIcon />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
