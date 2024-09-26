import React from 'react';
import './AboutGravity.css'; // Import CSS for styling

const AboutGravity = () => {
  return (
    <section className="about-section">
      <h1 className="about-title">About Gravity Team</h1>
      <p className="about-description">
        At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. 
        We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and 
        supporters of the future of decentralization and digital assets.
      </p>

      <div className="stats-grid">
        <div className="stat-item">
          <h2>$100 billion</h2>
          <p>cumulative trading volume to date</p>
        </div>
        <div className="stat-item">
          <h2>0.8%</h2>
          <p>of the global crypto spot trading volume</p>
        </div>
        <div className="stat-item">
          <h2>30</h2>
          <p>Gravity Teammates (& growing)</p>
        </div>
        <div className="stat-item">
          <h2>25+</h2>
          <p>leading global and local crypto exchanges</p>
        </div>
        <div className="stat-item">
          <h2>2017</h2>
          <p>start, crypto-natives</p>
        </div>
        <div className="stat-item">
          <h2>1,200+</h2>
          <p>crypto-asset pairs</p>
        </div>
        <div className="stat-item">
          <h2>24/7</h2>
          <p>liquidity</p>
        </div>
        <div className="stat-item">
          <h2>5 billion+</h2>
          <p>trades done to date</p>
        </div>
      </div>
    </section>
  );
};

export default AboutGravity;
