import axios from 'axios';

// The base URL of your Spring Boot backend
const API_URL = 'http://localhost:8080/api/vendors';

const getAllVendors = () => {
    return axios.get(API_URL);
};

const createVendor = (vendorData) => {
    return axios.post(API_URL, vendorData);
};

// You can add more functions here for update, delete, etc.
// ... existing functions

const getVendorById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

const updateVendorStatus = (id, newStatus) => {
    // Note: This endpoint specific to status update is what we created first
    return axios.put(`${API_URL}/${id}/status`, newStatus, {
        headers: { 'Content-Type': 'application/json' }
    });
};

export default {
    getAllVendors,
    createVendor,
    getVendorById,
    updateVendorStatus // export the new function
};