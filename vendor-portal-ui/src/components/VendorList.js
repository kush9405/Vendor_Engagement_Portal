import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './VendorList.css';

// Accept vendors, loading, and error as props from the parent component.
const VendorList = ({ vendors, loading, error }) => {

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
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="4">No vendors found. You can add one using the form above.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default VendorList;