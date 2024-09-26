import React from 'react';
import four from './4.png';
import './Testimonial.css'; // Import the CSS

const Testimonial = () => {
  return (
    <section className="testimonial-container">
      <div className="testimonial-header">
        <h2>We are in a good company</h2>
        <p>
          Our partnerships have delivered great value to our projects and we’re
          happy to share some of their feedback below
        </p>
      </div>

      <div className="testimonial-content">
        <div className="testimonial-navigation">
          <button className="nav-button">{'<'}</button>
          <button className="nav-button">{'>'}</button>
        </div>
        <p className="testimonial-text">
          Since 2019, Gravity team has been an astounding market maker for
          Bitkub. They have proven themselves to be one of the most consistent,
          committed and driven market makers on our exchange. Gravity Team has
          contributed high-quality volume and has proven to be very reliable
          and trustworthy partner. We strongly advocate Gravity Team as they
          have been an indispensable part of our market-making team.
        </p>
        <div className="testimonial-author">
          <h4>Atthakrit Chimplapibul</h4>
          <p>Co-founder & CEO of Bitkub</p>
          <img src={four}   alt="Bitkub Logo"
            className="bitkub-logo" />
         
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
