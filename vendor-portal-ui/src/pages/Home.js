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

  const deleteVendorById = (id) => {
    vendorService.deleteVendorById(id)
      .then(() => {
        alert("Vendor deleted successfully.");
        fetchVendors(); // Refresh the list after deletion
      })
      .catch(error => {
        console.error("Error deleting vendor:", error);
        alert("Failed to delete vendor. Please try again.");
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
      {/* pass the delete handler down to the list */}
      <VendorList vendors={vendors} loading={loading} error={error} onDelete={deleteVendorById} />
    </>
  );
};

export default Home;