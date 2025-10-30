import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendorDetails from './components/VendorDetails';
import './App.css';
import Home from './pages/home';
import AboutUs from './pages/AboutUs';
import OurBusiness from './pages/OurBusiness';
import OurImpact from './pages/OurImpact';
import OurValues from './pages/OurValues';

function App() {
  return (
      <div className="App">
        {/* <h1>Vendor Portal Application</h1> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/our_business" element={<OurBusiness />} />
          <Route path="/our_impact" element={<OurImpact />} />
          <Route path="/our_values" element={<OurValues />} />
          <Route path="/vendor/:id" element={<VendorDetails />} />
        </Routes>
      </div>
  );
}
export default App;