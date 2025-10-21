import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import vendorService from '../services/vendorService';
import './VendorDetails.css';

const VendorDetail = () => {
    const { id } = useParams(); // Gets the 'id' from the URL (e.g., /vendor/123)
    const navigate = useNavigate();
    const [vendor, setVendor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        vendorService.getVendorById(id)
            .then(response => {
                setVendor(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError("Could not find vendor.");
                setLoading(false);
            });
    }, [id]);

    const handleStatusChange = (e) => {
        const newStatus = e.target.value;
        // Optimistically update the UI
        setVendor({ ...vendor, engagementStatus: newStatus }); 

        vendorService.updateVendorStatus(id, newStatus)
            .then(response => {
                // If successful, the UI is already updated. Maybe show a success message.
                console.log("Status updated!", response.data);
            })
            .catch(err => {
                // If it fails, revert the change and show an error
                alert("Failed to update status!");
                // (You would add logic here to revert the vendor state)
            });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="error-message">{error}</div>;
    if (!vendor) return <div>Vendor not found.</div>;

    return (
        <div className="vendor-detail-container">
            <button onClick={() => navigate(-1)} className="back-button">← Back to List</button>
            <h2>{vendor.companyName}</h2>
            <div className="detail-grid">
                <p><strong>Contact:</strong> {vendor.primaryContactName}</p>
                <p><strong>Email:</strong> {vendor.primaryContactEmail}</p>
                <p><strong>Category:</strong> {vendor.category}</p>
                <div className="status-updater">
                    <label>Engagement Status:</label>
                    <select value={vendor.engagementStatus} onChange={handleStatusChange}>
                        <option value="YET_TO_RESPOND">Yet to Respond</option>
                        <option value="OPEN_IN_PROGRESS">Open / In Progress</option>
                        <option value="COMPLETED_ONBOARDED">Completed / Onboarded</option>
                    </select>
                </div>
            </div>
            {/* Document Management section will go here in the next phase */}
        </div>
    );
};

export default VendorDetail;