import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Shop Section */}
        <div className="footer-section">
          <h3>SHOP</h3>
          <ul>
            <li>WOMENS</li>
            <li>KIDS</li>
            <li>HOME & LIVING</li>
            <li>MENS</li>
            <li>MOTHER & BABY</li>
            <li>PARTY</li>
          </ul>
        </div>

        {/* Information Section */}
        <div className="footer-section">
          <h3>INFORMATION</h3>
          <ul>
            <li>Shipping Policy</li>
            <li>Returns & Exchanges</li>
            <li>Terms & Condition</li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h3>COMPANY</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>CSR</li>
          </ul>
        </div>

        {/* Newsletter Sign Up Section */}
        <div className="footer-section newsletter">
          <h3>NEWSLETTER SIGN UP</h3>
          <p>
            Sign up for exclusive updates, new arrivals & insider only discounts
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="enter your email address" />
            <button>SUBMIT</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © Copyrights 2024. All Rights Reserved | Designed by DataSprig
      </div>
    </footer>
  );
};

export default Footer;