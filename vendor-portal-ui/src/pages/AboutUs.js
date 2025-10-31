
import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div>
        <Navbar />

    <div className="page-container">
      <section className="page-hero" style={{backgroundImage: "url('/path/to/about-hero.jpg')"}}>
        <h1>About Us</h1>
      </section>
      <section className="container page-section">
        <h2>Our Vision & Mission</h2>
        <p>Content about vision and mission goes here...</p>
        <h2>Our History</h2>
        <p>Content about history goes here...</p>
      </section>
    </div>
        <Footer />
    </div>
  )
}

export default AboutUs;
