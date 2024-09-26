import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import logo from './logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h4>GRAVITY TEAM</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#work-with-us">Work with Us</a></li>
          </ul>
          <a href="#terms">Terms of Use & Privacy Policy</a>
        </div>

        <div className="footer-right">
        <img src={logo} alt="Gravity Team Logo" className="footer-logo" />
         
          <p>©2022 Gravity Team. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
