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

const updateVendorStatus = async (id, newStatus) => {
  // Try PATCH first (preferred, partial update)
  try {
    return await axios.patch(`${API_URL}/vendors/${id}`, { engagementStatus: newStatus });
  } catch (err) {
    // If PATCH not supported (405) or other method-not-allowed type response, fallback to merge + PUT
    const status = err && err.response && err.response.status;
    if (status === 405 || status === 501 || status === 400 || !err.response) {
      // fallback: fetch current vendor, merge status and PUT full object
      try {
        const current = await axios.get(`${API_URL}/vendors/${id}`);
        const merged = { ...current.data, engagementStatus: newStatus };
        // Ensure _id is not sent as id conflict (backend may expect id in path only)
        delete merged.id;
        return await axios.put(`${API_URL}/vendors/${id}`, merged);
      } catch (innerErr) {
        // propagate inner error
        throw innerErr;
      }
    }
    // other errors: propagate
    throw err;
  }
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