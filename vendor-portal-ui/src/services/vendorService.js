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
  try {
    return await axios.patch(`${API_URL}/vendors/${id}`, { engagementStatus: newStatus });
  } catch (err) {
    const status = err && err.response && err.response.status;
    if (status === 405 || status === 501 || status === 400 || !err.response) {
      try {
        const current = await axios.get(`${API_URL}/vendors/${id}`);
        const merged = { ...current.data, engagementStatus: newStatus };
        delete merged.id;
        return await axios.put(`${API_URL}/vendors/${id}`, merged);
      } catch (innerErr) {

        throw innerErr;
      }
    }
    throw err;
  }
};

export default {
    getAllVendors,
    createVendor,
    getVendorById,
    updateVendorStatus,
    deleteVendorById
};