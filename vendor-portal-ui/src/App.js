import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendorDetails from './components/VendorDetails';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
      <div className="App">
        {/* <h1>Vendor Portal Application</h1> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<Home />} />
          <Route path="/our_business" element={<Home />} />
          <Route path="/our_impact" element={<Home />} />
          <Route path="/our_values" element={<Home />} />
          <Route path="/vendor/:id" element={<VendorDetails />} />
        </Routes>
      </div>
  );
}
export default App;