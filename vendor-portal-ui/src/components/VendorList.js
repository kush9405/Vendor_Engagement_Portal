import React, { useState, useEffect } from 'react';
import vendorService from '../services/vendorService';
import './VendorList.css'; // We'll create this file for styling

const VendorList = () => {
    const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch vendors when the component mounts
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
    }, []); // The empty array ensures this effect runs only once

    if (loading) {
        return <div>Loading vendors...</div>;
    }
    
    if (error) {
        return <div className="error-message">{error}</div>;
    }

    // Helper function to get a CSS class based on status
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
                    {vendors.length > 0 ? vendors.map(vendor => (
                        <tr key={vendor.id}>
                            <td>{vendor.companyName}</td>
                            <td>{vendor.primaryContactName}</td>
                            <td>{vendor.fmcgCategory}</td>
                            <td>
                                <span className={`status-badge ${getStatusClass(vendor.engagementStatus)}`}>
                                    {vendor.engagementStatus.replace('_', ' ')}
                                </span>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="4">No vendors found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default VendorList;