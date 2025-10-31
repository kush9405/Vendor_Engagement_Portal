import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
    <Navbar />
    <div className="homepage">
    
      {/* Hero Section */}
      <section className="hero-section">
        {/* <video autoPlay loop muted className="hero-video">
          <source src="/path/to/your/video.mp4" type="video/mp4" />
        </video> */}
        <img src="/Tolaram-Shop-Malangi" alt="Hero" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>We are Tolaram</h1>
          <p>Building businesses that enrich lives for a better tomorrow.</p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="page-section text-image-section">
        <div className="container">
          <div className="text-content">
            <h2>Who We Are</h2>
            <p>Tolaram is a Singapore-based enterprise that operates a diversified portfolio of businesses in consumer goods, fintech, infrastructure and industrials, across Asia, Africa, and Europe.</p>
            <button className="btn">Learn More About Us</button>
          </div>
          <div className="image-grid">
            {/* Add images here */}
          </div>
        </div>
      </section>
      
      {/* Global Presence Section */}
      <section className="page-section dark-bg">
        <div className="container">
          <h2>Our Global Presence</h2>
          <p>We are powered by our 17,000+ strong multicultural team across 20 countries.</p>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>US$1.8B+</h3>
              <p>Group Revenue</p>
            </div>
            <div className="stat-item">
              <h3>17,000+</h3>
              <p>Colleagues</p>
            </div>
            <div className="stat-item">
              <h3>20</h3>
              <p>Countries</p>
            </div>
            <div className="stat-item">
              <h3>1948</h3>
              <p>Established</p>
            </div>
          </div>
          {/* The map is a complex component, use an image as a placeholder for now */}
        </div>
      </section>

      {/* Our Businesses Section */}
      <section className="page-section">
        <div className="container">
          <h2>Our Businesses</h2>
          <div className="business-grid">
            <div className="business-card">Consumer</div>
            <div className="business-card">Fintech</div>
            <div className="business-card">Infrastructure</div>
            <div className="business-card">Industrials</div>
          </div>
        </div>
      </section>

    </div>
    <Footer />
    </>
  );
};

export default HomePage;