import React, { useState } from 'react';
import vendorService from '../services/vendorService';
import './AddVendorForm.css';

const AddVendorForm = ({ onVendorAdded }) => {
    const [companyName, setCompanyName] = useState('');
    const [primaryContactName, setPrimaryContactName] = useState('');
    const [primaryContactEmail, setPrimaryContactEmail] = useState('');
    const [primaryNewField, setprimaryNewField] = useState('');
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
            primaryNewField,
            engagementStatus: 'YET_TO_RESPOND', // Default status for new vendors
            registrationDate: new Date().toISOString().split('T')[0] // Set today's date
        };

        vendorService.createVendor(newVendor)
            .then(response => {
                alert(`Vendor "${response.data.companyName}" created successfully!`);
                setCompanyName('');
                setPrimaryContactName('');
                setPrimaryContactEmail('');
                setprimaryNewField('');
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
                    <label>New Field</label>
                    <input type="text" value={primaryNewField} onChange={e => setprimaryNewField(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <select value={category} onChange={e => setCategory(e.target.value)}>
                        <option>Raw Materials (Wheat, Palm Oil)</option>
                        <option>Logistics & Shipping</option>
                        <option>Packaging Solutions</option>
                        <option>Industrial Machinery & Automation</option>
                        <option>IT & Cloud Infrastructure</option>
                        <option>Audit & Professional Services</option>
                        <option>Audit & Professional Services</option>
                        <option>Marketing & Advertising</option>
                        <option>Fintech Software Development</option>
                        <option>European Distribution</option>
                        <option>Cybersecurity Services</option>
                        <option>HR & Payroll Systems</option>
                        <option>Construction & Civil Engineering</option>
                        <option>Food Ingredients & Flavoring</option>
                        <option>Market Research & Consumer Insights</option>
                        <option>Corporate Legal Services</option>
                        <option>Energy & Fuel Supply</option>
                        <option>Data Analytics & BI Solutions</option>
                        <option>Payment Gateway Services</option>
                        <option>Corporate Travel Management</option>
                        <option>Facilities Management</option>
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