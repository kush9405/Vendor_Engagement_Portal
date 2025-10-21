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

export default {
    getAllVendors,
    createVendor
};