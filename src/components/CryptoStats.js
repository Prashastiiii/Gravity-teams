import React from "react";
import "./CryptoStats.css";

const CryptoStats = () => {
  return (
    <div className="stats-container">
      <div className="stat-box">
        <h2>~$100 billion</h2>
        <p>cumulative trading volume to date</p>
      </div>
      <div className="stat-box highlight">
        <h2>0.8%</h2>
        <p>of the global crypto spot trading volume</p>
      </div>
      <div className="stat-box">
        <h2>~30</h2>
        <p>Gravity Teammates (& growing)</p>
      </div>
      <div className="stat-box">
        <h2>25+</h2>
        <p>leading global and local crypto exchanges</p>
      </div>
      <div className="stat-box">
        <h2>2017</h2>
        <p>start, crypto-natives</p>
      </div>
      <div className="stat-box">
        <h2>1,200+</h2>
        <p>crypto-asset pairs</p>
      </div>
      <div className="stat-box">
        <h2>24/7</h2>
        <p>liquidity</p>
      </div>
      <div className="stat-box">
        <h2>5 billion+</h2>
        <p>trades done to date</p>
      </div>
    </div>
  );
};

export default CryptoStats;
