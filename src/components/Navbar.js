import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  // Function to handle dropdown toggle
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Scroll event listener
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  // Effect hook to add the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="Gravity Team Logo" className="logo" />
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="#about">ABOUT US</a></li>
        <li className="services-dropdown">
          <a href="#services" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            OUR SERVICES
          </a>
          {isDropdownOpen && (
            <ul className="dropdown-menu" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <li><a href="#service1">Service 1</a></li>
              <li><a href="#service2">Service 2</a></li>
              <li><a href="#service3">Service 3</a></li>
            </ul>
          )}
        </li>
        <li><a href="#work-with-us">WORK WITH US</a></li>
        <li><a href="#blog">BLOG</a></li>
      </ul>
      <button className="get-in-touch">GET IN TOUCH</button>
    </nav>
  );
};

export default Navbar;
