import React from 'react';
import './CryptoClone.css'; // Add CSS styling
import one from './1.png';
import two from './2.png';
import three from './3.png';


const CryptoClone = () => {
  return (
    <div className="crypto-container">
      {/* First Section */}
      <section className="crypto-section">
        <div className="crypto-content">
          <h2>Market Making for Crypto Projects</h2>
          <p>Accelerate your token’s journey by boosting its liquidity</p>
          <p>We invest in building long-term, sustainable relationships and support our projects in their growth journey with our services, industry expertise, and network.</p>
          <a href="#" className="learn-more">Learn more &rarr;</a>
        </div>
        <div className="crypto-image">
        <img src={one} alt="Gravity Team Logo" className="logo" />
        </div>
      </section>

      {/* Second Section */}
      <section className="crypto-section">
        <div className="crypto-image">
     
        <img src={two} alt="Gravity Team Logo" className="logo" />
         
         
        </div>
        <div className="crypto-content">
          <h2>Market Making for Crypto Exchanges</h2>
          <p>Attract more traders and projects with deeper order books & liquidity</p>
          <p>Our world-class market-making services are proven to help local and emerging exchanges with seamless and agile market-making positions of up to 90% market dominance.</p>
          <a href="#" className="learn-more">Learn more &rarr;</a>
        </div>
      </section>

      <section className="crypto-section">
        <div className="crypto-content">
          <h1>Our Partners & Friends</h1>
          
        </div>
        <div className="crypto-image">
        <img src={three} alt="Gravity Team Logo" className="logo" />
        </div>
      </section>
    </div>
  );
};

export default CryptoClone;
