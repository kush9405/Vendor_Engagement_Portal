import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './VendorList.css';

const STATUS_OPTIONS = [
  { value: 'YET_TO_RESPOND', label: 'Yet to respond' },
  { value: 'OPEN_IN_PROGRESS', label: 'Open / In progress' },
  { value: 'COMPLETED_ONBOARDED', label: 'Completed / Onboarded' },
];

const VendorList = ({ vendors = [], loading, error, onDelete, onUpdateStatus }) => {
  const [deletingId, setDeletingId] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  const handleDelete = (vendor) => {
    const confirmed = window.confirm(`Delete vendor "${vendor.companyName}"? This cannot be undone.`);
    if (!confirmed) return;
    const id = vendor.id || vendor._id;
    setDeletingId(id);
    Promise.resolve(onDelete(id))
      .finally(() => setDeletingId(null));
  };

  const handleStatusChange = (vendor, newStatus) => {
    if (!onUpdateStatus) return;
    const id = vendor.id || vendor._id;
    if (vendor.engagementStatus === newStatus) return;
    setUpdatingId(id);
    Promise.resolve(onUpdateStatus(id, newStatus))
      .catch(err => {
        console.error('Failed to update status', err);
        alert('Failed to update status. Please try again.');
      })
      .finally(() => setUpdatingId(null));
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

  const formatStatusLabel = (status) => {
    const opt = STATUS_OPTIONS.find(o => o.value === status);
    return opt ? opt.label : status.replace(/_/g, ' ');
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
          {vendors.length > 0 ? vendors.map(vendor => {
            const id = vendor.id || vendor._id;
            return (
              <tr key={id}>
                <td>
                  <Link to={`/vendor/${id}`}>
                    {vendor.companyName}
                  </Link>
                </td>
                <td>{vendor.primaryContactName}</td>
                <td>{vendor.category}</td>
                <td>
                  <div className={`status-cell ${getStatusClass(vendor.engagementStatus)}`}>
                    <select
                      aria-label={`Change status for ${vendor.companyName}`}
                      value={vendor.engagementStatus}
                      onChange={(e) => handleStatusChange(vendor, e.target.value)}
                      disabled={updatingId === id}
                      className="status-select"
                    >
                      {STATUS_OPTIONS.map(opt => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>

                    {/* colored indicator */}
                    {/* <span className={`status-indicator ${getStatusClass(vendor.engagementStatus)}`} aria-hidden="true" /> */}

                    {updatingId === id && <span className="status-loading">Updating…</span>}
                  </div>
                </td>
                <td>
                  <div className="vendor-actions">
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(vendor)}
                      disabled={deletingId === id}
                    >
                      {deletingId === id ? 'Deleting…' : 'Delete'}
                    </button>
                  </div>
                </td>
              </tr>
            );
          }) : (
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