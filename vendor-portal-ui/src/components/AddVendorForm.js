import React, { useState } from 'react';
import vendorService from '../services/vendorService';
import './AddVendorForm.css';

// The 'onVendorAdded' prop is a function we'll pass from the parent 
// to let it know when to refresh the vendor list.
const AddVendorForm = ({ onVendorAdded }) => {
    const [companyName, setCompanyName] = useState('');
    const [primaryContactName, setPrimaryContactName] = useState('');
    const [primaryContactEmail, setPrimaryContactEmail] = useState('');
    const [category, setCategory] = useState('Raw Materials');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        const newVendor = {
            companyName,
            primaryContactName,
            primaryContactEmail,
            category,
            engagementStatus: 'YET_TO_RESPOND', // Default status for new vendors
            registrationDate: new Date().toISOString().split('T')[0] // Set today's date
        };

        vendorService.createVendor(newVendor)
            .then(response => {
                alert(`Vendor "${response.data.companyName}" created successfully!`);
                // Clear the form
                setCompanyName('');
                setPrimaryContactName('');
                setPrimaryContactEmail('');
                // Notify the parent component to refresh the list
                if (onVendorAdded) {
                    onVendorAdded();
                }
            })
            .catch(err => {
                console.error("Error creating vendor:", err);
                setError("Failed to create vendor. Please try again.");
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <div className="add-vendor-form-container">
            <h2>Onboard a New Vendor</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Company Name</label>
                    <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Contact Name</label>
                    <input type="text" value={primaryContactName} onChange={e => setPrimaryContactName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={primaryContactEmail} onChange={e => setPrimaryContactEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>FMCG Category</label>
                    <select value={category} onChange={e => setCategory(e.target.value)}>
                        <option>Raw Materials</option>
                        <option>Packaging</option>
                        <option>Logistics</option>
                        <option>Marketing</option>
                    </select>
                </div>
                <button type="submit" className="submit" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Add Vendor'}
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default AddVendorForm;