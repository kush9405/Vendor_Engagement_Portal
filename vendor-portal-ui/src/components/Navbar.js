import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/vendor-portal-ui/src/assets/Tolaram-logo-white-inflection-red.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="vp-navbar">
      <div className="vp-navbar-inner">
        <div className="vp-brand">
          {/* Replace with <img src="/logo.png" alt="Tolaram" /> if you have an image in public/ */}
          <img src={logo} alt="Tolaram" className="vp-logo-image" />
          <span className="vp-logo-text"></span>
        </div>

        <nav className={`vp-nav ${open ? 'open' : ''}`}>
          <a href="/about_us" className="vp-nav-link">ABOUT US</a>
          <a href="/our_values" className="vp-nav-link ">OUR VALUES</a>
          <a href="/our_business" className="vp-nav-link">OUR BUSINESSES</a>
          <a href="/our_impact" className="vp-nav-link">OUR IMPACT</a>
        </nav>

        {/* <div className="vp-actions">
          <button className="vp-search-btn" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M11 19a8 8 0 1 1 5.293-14.293A8 8 0 0 1 11 19z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="vp-hamburger" onClick={() => setOpen(s => !s)} aria-label="Toggle menu">
            <span className="vp-hamburger-bar" />
            <span className="vp-hamburger-bar" />
            <span className="vp-hamburger-bar" />
          </button>
        </div> */}
      </div>

      {/* Mobile menu — simple dropdown */}
      {open && (
        <div className="vp-mobile-menu">
          <a href="/about_us" className="vp-mobile-link">ABOUT US</a>
          <a href="/our_values" className="vp-mobile-link ">OUR VALUES</a>
          <a href="/our_business" className="vp-mobile-link">OUR BUSINESSES</a>
          <a href="/our_impact" className="vp-mobile-link">OUR IMPACT</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;