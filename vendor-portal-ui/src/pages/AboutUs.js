
import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div>
        <Navbar />
        <section className="page container">
          <h2>About us</h2>
          <p>Founded in 1948, Tolaram began in Indonesia and over the decades has expanded into manufacturing, distribution and investment across geographies. We focus on building enduring businesses that serve local markets.</p>
          <p>Headquartered in Singapore with operations across Asia, Africa, and beyond.</p>
        </section>
        <Footer />
    </div>
  )
}

export default AboutUs;
