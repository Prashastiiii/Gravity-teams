import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Import the Navbar component
import Header from './components/Header';
import About from './components/About';
import MarketMaking from './components/MarketMaking';
import Partners from './components/Partners';
import Contact from './components/Contact';
import CryptoStats from './components/CryptoStats';
import CryptoClone from './components/CryptoClone';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import AboutGravity from './components/AboutGravity';
import Join from './components/Join';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutGravity/>
    
      <MarketMaking />
      <CryptoClone/>
      <Testimonial/>
      <Join/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
