import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";  // <-- ADD THIS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Shop Section */}
        <div className="footer-section">
          <h3>SHOP</h3>
          <ul>
            <li><Link to="/women">WOMEN</Link></li>
            <li><Link to="/men">MEN</Link></li>
            <li><Link to="/kids">KIDS</Link></li>
            <li><Link to="/home-living">HOME & LIVING</Link></li>
            <li><Link to="/mother-baby">MOTHER & BABY</Link></li>
            <li><Link to="/party">PARTY</Link></li>
          </ul>
        </div>

        {/* Information Section */}
        <div className="footer-section">
          <h3>INFORMATION</h3>
          <ul>
            <li><Link to="/shipping-policy">Shipping Policy</Link></li>
            <li><Link to="/returns-exchanges">Returns & Exchanges</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h3>COMPANY</h3>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/csr">CSR</Link></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h3>NEWSLETTER SIGN UP</h3>
          <p>Sign up for exclusive updates, new arrivals & insider-only discounts</p>
         <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button className="newsletter-submit">Submit</button>
        </div>

        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} OneFold. All Rights Reserved | Designed by Chamila Nirmal
      </div>
    </footer>
  );
};

export default Footer;
