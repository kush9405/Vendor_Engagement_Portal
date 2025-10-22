import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './VendorList.css';

const VendorList = ({ vendors = [], loading, error, onDelete }) => {
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = (vendor) => {
    const confirmed = window.confirm(`Delete vendor "${vendor.companyName}"? This cannot be undone.`);
    if (!confirmed) return;
    setDeletingId(vendor.id || vendor._id); // adjust depending on id field
    Promise.resolve(onDelete(vendor.id || vendor._id))
      .finally(() => setDeletingId(null));
  };

  // Display a loading message while data is being fetched.
  if (loading) {
    return <div>Loading vendors...</div>;
  }
  
  // Display an error message if the data fetch fails.
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  // Helper function to determine the CSS class for the status badge based on the vendor's status.
  const getStatusClass = (status) => {
    switch (status) {
      case 'YET_TO_RESPOND':
        return 'status-yet-to-respond';
      case 'OPEN_IN_PROGRESS':
        return 'status-in-progress';
      case 'COMPLETED_ONBOARDED':
        return 'status-onboarded';
      default:
        return '';
    }
  };

  return (
    <div className="vendor-list-container">
      <h1>Vendor Engagement Dashboard</h1>
      <table className="vendor-table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Contact Person</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Check if there are any vendors to display. If not, show a message. */}
          {vendors.length > 0 ? vendors.map(vendor => (
            <tr key={vendor.id}>
              <td>
                {/* Each company name is a link to its detailed view. */}
                <Link to={`/vendor/${vendor.id}`}>
                  {vendor.companyName}
                </Link>
              </td>
              <td>{vendor.primaryContactName}</td>
              <td>{vendor.category}</td>
              <td>
                {/* The status is displayed as a colored badge for quick visual identification. */}
                <span className={`status-badge ${getStatusClass(vendor.engagementStatus)}`}>
                  {vendor.engagementStatus.replace(/_/g, ' ')}
                </span>
              </td>
              <td>
                <div className="vendor-actions">
                  {/* other action buttons can live here */}
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(vendor)}
                    disabled={deletingId === vendor.id}
                  >
                    {deletingId === vendor.id ? 'Deleting…' : 'Delete'}
                  </button>
                </div>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="5">No vendors found. You can add one using the form above.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VendorList;