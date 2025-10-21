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
          <Route path="/vendor/:id" element={<VendorDetails />} />
        </Routes>
      </div>
  );
}
export default App;