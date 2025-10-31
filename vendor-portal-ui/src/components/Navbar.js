import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="vp-navbar">
      <div className="vp-navbar-inner">
        <div className="vp-brand">
          {/* put the logo PNG in /public and keep this path */}
          <img src="/Tolaram-logo-white-inflection-red.png" alt="Tolaram" className="vp-logo-image" />
        </div>

        <nav className={`vp-nav ${open ? 'open' : ''}`} aria-label="Primary">
          <a href="/" className="vp-nav-link">HOME</a>
          <a href="/vendors" className="vp-nav-link">VENDORS</a>
          <a href="/about_us" className="vp-nav-link">ABOUT US</a>
          <a href="/our_values" className="vp-nav-link ">OUR VALUES</a>
          <a href="/our_business" className="vp-nav-link">OUR BUSINESSES</a>
          <a href="/our_impact" className="vp-nav-link">OUR IMPACT</a>
        </nav>

        <div className="vp-actions">
          <button
            className="vp-hamburger"
            onClick={() => setOpen(s => !s)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="vp-hamburger-bar" />
            <span className="vp-hamburger-bar" />
            <span className="vp-hamburger-bar" />
          </button>
        </div>
      </div>

      {/* Mobile dropdown (keeps focus/semantics simple) */}
      {open && (
        <div className="vp-mobile-menu">
          <a href="/" className="vp-mobile-link">HOME</a>
          <a href="/vendors" className="vp-mobile-link">VENDORS</a>
          <a href="/about_us" className="vp-mobile-link">ABOUT US</a>
          <a href="/our_values" className="vp-mobile-link">OUR VALUES</a>
          <a href="/our_business" className="vp-mobile-link">OUR BUSINESSES</a>
          <a href="/our_impact" className="vp-mobile-link">OUR IMPACT</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;