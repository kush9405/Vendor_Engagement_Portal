
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';


const OurBusiness = () => {
  const sectors = [
'Consumer goods', 'Fintech', 'Infrastructure', 'Industrials'
];
  return (
    <div>
        <Navbar />
      
      <section className="page container">
      <h2>Our businesses</h2>
      <p>We operate across multiple sectors with deep market knowledge in emerging markets.</p>
      <ul className="business-list">
      {sectors.map(s=> <li key={s}>{s}</li>)}
      </ul>
      </section>
      <Footer />
    </div>
  )
}

export default OurBusiness
