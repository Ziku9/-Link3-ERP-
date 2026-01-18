import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Dashboard Stats
export const getStats = () => api.get('/api/stats');

// Clients
export const addClient = (data) => api.post('/api/clients', data);
export const getClients = () => api.get('/api/clients');
export const getClient = (id) => api.get(`/api/clients/${id}`);

// Materials
export const addMaterial = (data) => api.post('/api/materials', data);
export const getMaterials = () => api.get('/api/materials');

// Attendance
export const addAttendance = (data) => api.post('/api/attendance', data);
export const getAttendance = () => api.get('/api/attendance');

// Travel Expenses
export const addTravelExpense = (data) => api.post('/api/travel', data);
export const getTravelExpenses = () => api.get('/api/travel');

// Branch Expenses
export const addBranchExpense = (data) => api.post('/api/expenses', data);
export const getBranchExpenses = () => api.get('/api/expenses');

export default api;
