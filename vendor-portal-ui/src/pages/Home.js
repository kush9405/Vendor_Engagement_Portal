import React, { useState, useEffect } from 'react';
import VendorList from '../components/VendorList';
import AddVendorForm from '../components/AddVendorForm';
import vendorService from '../services/vendorService';

const Home = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVendors = () => {
    setLoading(true);
    vendorService.getAllVendors()
      .then(response => {
        setVendors(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the vendors!", error);
        setError("Could not load vendor data. Is the backend running?");
        setLoading(false);
      });
  };

  // Fetch data on initial component mount
  useEffect(() => {
    fetchVendors();
  }, []);
  // ... (copy all the state and fetchVendors logic from the old App.js here)


  return (
    <>
    {/* <h1>Vendor Engagement Portal</h1> */}
      <AddVendorForm onVendorAdded={fetchVendors} />
      <VendorList vendors={vendors} loading={loading} error={error} />
    </>
  );
};

export default Home;