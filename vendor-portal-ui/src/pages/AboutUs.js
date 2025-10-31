
import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div>
        <Navbar />
        <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section" 
        // style={{ backgroundImage: `url(${heroBgImage})` }}
        // For now, let's use a public URL until you save the image
        style={{ backgroundImage: `url(/tolaram-aboutus-slider-plain.jpg)` }}
        >
        <div className="hero-overlay"></div>
      </section>

      {/* Celebration Section */}
      <section className="celebration-section">
        <div className="container">
          <h2>Being Entrepreneurial Is Integral To </h2>
          <h2>Who We Are</h2>
          <div className='container'> </div>
          <p>The Tolaram story began in 1948 with a textile retail shop in Malang, Indonesia. From its Singapore base, the family business quickly grew to wholesale and the manufacturing of textiles. It has since expanded internationally into consumer goods and more.

 
Three generations of leaders have steered the business, reinventing it through innovation and partnerships, and building on critical insights gained through our journey.</p>
        </div>
      </section>

    </div>
    <section className="future-section">
      <div className="container future-grid">
        <div className="image-column">
          <img 
            src="/Tolaram-Shop-Malangi.jpg" // Using a placeholder URL for now
            // src={historyImage} // Use this once you save the image locally
            alt="The original Tailor Tolaram shop in Indonesia" 
          />
        </div>
        <div className="text-column">
          <h2>Together, we build a better future.</h2>
          <p>
            We are committed to responsible stewardship and have seamlessly integrated with local communities wherever we operate. All our stakeholders share a vision of building a business that continuously extends its reach while positively impacting those around us.
          </p>
        </div>
      </div>
    </section>

    {/* <div className="page-container">
      <section className="page-hero" style={{backgroundImage: "url('/path/to/about-hero.jpg')"}}>
        <h1>About Us</h1>
      </section>
      <section className="container page-section">
        <h2>Our Vision & Mission</h2>
        <p>Content about vision and mission goes here...</p>
        <h2>Our History</h2>
        <p>Content about history goes here...</p>
      </section>
    </div> */}
        <Footer />
    </div>
  )
}

export default AboutUs;
