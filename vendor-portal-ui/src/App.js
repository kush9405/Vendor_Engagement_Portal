import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/next';
import VendorDetails from './components/VendorDetails';
import './App.css';
import Vendors from './pages/Vendors';
import AboutUs from './pages/AboutUs';
import OurBusiness from './pages/OurBusiness';
import OurImpact from './pages/OurImpact';
import OurValues from './pages/OurValues';
import HomePage from './pages/HomePage';

function App() {
  return (
      <div className="App">
        {/* <h1>Vendor Portal Application</h1> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-business" element={<OurBusiness />} />
          <Route path="/our-impact" element={<OurImpact />} />
          <Route path="/our-values" element={<OurValues />} />
          <Route path="/vendor/:id" element={<VendorDetails />} />
        </Routes>
        <SpeedInsights />
      </div>
  );
}
export default App;