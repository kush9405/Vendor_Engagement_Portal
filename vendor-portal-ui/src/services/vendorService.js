import axios from 'axios';

// React uses environment variables prefixed with REACT_APP_
// Vercel will provide this variable during its build process.
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/vendors';

const getAllVendors = () => {
    return axios.get(`${API_URL}/vendors`);
};

// Update other functions to use the new base URL format
const createVendor = (vendorData) => {
    return axios.post(`${API_URL}/vendors`, vendorData);
};
const deleteVendor = (vendorData) => {
    return axios.delete(`${API_URL}/vendors`, vendorData);
};

const getVendorById = (id) => {
    return axios.get(`${API_URL}/vendors/${id}`);
};

const updateVendorStatus = (id, newStatus) => {
    return axios.put(`${API_URL}/vendors/${id}/status`, newStatus, {
        headers: { 'Content-Type': 'application/json' }
    });
};

// ALSO update your file upload logic to use the variable!
// Example in VendorDetail.js:
// axios.post(`${process.env.REACT_APP_API_URL}/files/upload`, formData, ...);

export default {
    getAllVendors,
    createVendor,
    getVendorById,
    updateVendorStatus,
    deleteVendorById
};