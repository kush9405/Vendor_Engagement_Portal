import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
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

  if (loading) {
    return <div>Loading vendors...</div>;
  }
  
  if (error) {
    return <div className="error-message">{error}</div>;
  }

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
          {vendors.length > 0 ? vendors.map(vendor => (
            <tr key={vendor.id}>
              <td>
                <Link to={`/vendor/${vendor.id}`}>
                  {vendor.companyName}
                </Link>
              </td>
              <td>{vendor.primaryContactName}</td>
              <td>{vendor.category}</td>
              <td>
                <span className={`status-badge ${getStatusClass(vendor.engagementStatus)}`}>
                  {vendor.engagementStatus.replace(/_/g, ' ')}
                </span>
              </td>
              <td>
                <div className="vendor-actions">
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