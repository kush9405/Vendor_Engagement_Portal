import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <> 
    <Navbar />
          <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section" 
        // style={{ backgroundImage: `url(${heroBgImage})` }}
        // For now, let's use a public URL until you save the image
        style={{ backgroundImage: `url(/Tolaram-Shop-Malangi.jpg)` }}
        >
        <div className="hero-overlay"></div>
      </section>

      {/* Celebration Section */}
      <section className="celebration-section">
        <div className="container">
          <h2>Celebrating <span className="highlight">75</span> years.</h2>
          <h1>Creating Possibilities, for Generations.</h1>
          <p>Since 1948, Tolaram has been improving lives through our businesses in diverse geographies. We aspire to do even more.</p>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container">
          <p>
            We are a Singapore enterprise building businesses that propel growth and elevate communities. From a single retail shop in Indonesia, Tolaram has grown into a business that spans <strong>Asia, Africa and Europe</strong>, employs more than <strong>20,000 people</strong>, and reaches over <strong>one billion consumers</strong>.
          </p>
        </div>
      </section>
      
      {/* Brands Section */}
      <section className="brands-section">
        <div className="container">
          <h2>We build trusted brands in the spheres we operate.</h2>
          <div className="brands-grid">
             {/* You would add your images here */}
              <img src="tolaram-business-consumer-goods-2.jpg" className='brand-image-placeholder' alt="Indomie" />
              <img src="tolaram-business-fintech-2.jpg" className='brand-image-placeholder' alt="Indomie" />
              <img src="tolaram-business-special-economic-zone.jpg" className='brand-image-placeholder' alt="Indomie" />
          </div>
        </div>
      </section>
    </div>
    <Footer />
        </>
      );
    };
export default HomePage;