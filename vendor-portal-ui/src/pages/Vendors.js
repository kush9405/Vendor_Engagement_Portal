import React, { useState, useEffect } from 'react';
import VendorList from '../components/VendorList';
import AddVendorForm from '../components/AddVendorForm';
import vendorService from '../services/vendorService';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

  // <-- changed: optimistic update so other fields are not lost and UI is snappy
  const updateVendorStatus = (id, newStatus) => {
    const prevVendors = vendors;
    setVendors(v => v.map(item => {
      const itemId = item.id || item._id;
      return itemId === id ? { ...item, engagementStatus: newStatus } : item;
    }));

    return vendorService.updateVendorStatus(id, newStatus)
      .then(() => {
        // success: we already updated UI optimistically
        return;
      })
      .catch(error => {
        // rollback on error
        setVendors(prevVendors);
        console.error('Error updating vendor status:', error);
        alert('Failed to update status. Changes have been reverted.');
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
      <Footer />
    </>
  );
};

export default Home;