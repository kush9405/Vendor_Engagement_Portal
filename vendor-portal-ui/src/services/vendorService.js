import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

const getAllVendors = () => {
    return axios.get(`${API_URL}/vendors`);
};

const createVendor = (vendorData) => {
    return axios.post(`${API_URL}/vendors`, vendorData);
};


const getVendorById = (id) => {
    return axios.get(`${API_URL}/vendors/${id}`);
};
const deleteVendorById = (id) => {
    return axios.delete(`${API_URL}/vendors/${id}`);
};

const updateVendorStatus = (id, newStatus) => {
    return axios.put(`${API_URL}/vendors/${id}/status`, newStatus, {
        headers: { 'Content-Type': 'application/json' }
    });
};

// Example in VendorDetail.js:
// axios.post(`${process.env.REACT_APP_API_URL}/files/upload`, formData, ...);

export default {
    getAllVendors,
    createVendor,
    getVendorById,
    updateVendorStatus,
    deleteVendorById
};