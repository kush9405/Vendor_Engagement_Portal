import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="vp-footer" role="contentinfo">
      <div className="vp-footer-inner">
        <div className="vp-footer-left">
          <div className="vp-contact">Contact us at <a href="mailto:info@tolaram.com">info@tolaram.com</a></div>
        </div>
        <div className="vp-footer-right">
          <div className="vp-address"><strong>Tolaram</strong> 1A International Business Park, #13-01 Singapore 609933, T: (65) 6387 7777</div>
        </div>
      </div>

      <button
        className={`scroll-top-btn ${visible ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 14l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;