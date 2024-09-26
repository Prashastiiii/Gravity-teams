import React from 'react';
import './Header.css'; // Import the CSS file for styling
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Balancing <br />Crypto Markets</h1>
        <br /><br />
        <p>Our fully automated proprietary quantitive trading software <br/> provides 24/7 liquidity to 170+ crypto assets across 25+ <br/> centralized spot and derivative crypto exchange</p>
        <button className="cta-button">GET IN TOUCH</button><br />
        
      </div>
    
    </header>
    
  );
};

export default Header;
