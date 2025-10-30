import React, { useState, useEffect } from 'react';
import VendorList from '../components/VendorList';
import AddVendorForm from '../components/AddVendorForm';
import vendorService from '../services/vendorService';
import Navbar from '../components/Navbar';

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
    return vendorService.deleteVendorById(id)
      .then(() => {
        alert("Vendor deleted successfully.");
        fetchVendors(); 
      })
      .catch(error => {
        console.error("Error deleting vendor:", error);
        alert("Failed to delete vendor. Please try again.");
        throw error;
      });
  };

  // New: update vendor status handler
  const updateVendorStatus = (id, newStatus) => {
    // expects vendorService.updateVendorStatus(id, body) to exist
    return vendorService.updateVendorStatus(id,  newStatus)
      .then(() => {
        // refresh list to reflect server state
        fetchVendors();
      })
      .catch(error => {
        console.error('Error updating vendor status:', error);
        throw error;
      });
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  return (
    <>
      <Navbar />
      <AddVendorForm onVendorAdded={fetchVendors} />
      <VendorList
        vendors={vendors}
        loading={loading}
        error={error}
        onDelete={deleteVendorById}
        onUpdateStatus={updateVendorStatus}
      />
    </>
  );
};

export default Home;