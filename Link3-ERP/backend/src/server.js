import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// Import Models
import Client from './models/Client.js';
import Material from './models/Material.js';
import Attendance from './models/Attendance.js';
import TravelExpense from './models/TravelExpense.js';
import BranchExpense from './models/BranchExpense.js';

// ============ DASHBOARD STATS ============
app.get('/api/stats', async (req, res) => {
  try {
    const clients = await Client.countDocuments();
    const attendance = await Attendance.countDocuments({
      createdAt: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) }
    });
    const expenses = await BranchExpense.aggregate([
      { $match: { createdAt: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) } } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);
    
    res.json({
      clients: clients,
      attendance: attendance,
      expense: expenses[0]?.total || 0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============ CLIENTS ============
app.post('/api/clients', async (req, res) => {
  try {
    const { name, phone, address } = req.body;
    const client = new Client({ name, phone, address });
    await client.save();
    res.json({ id: client._id, message: 'Client added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/clients', async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/clients/:id', async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============ MATERIALS ============
app.post('/api/materials', async (req, res) => {
  try {
    const { client_id, type, fiber, onu, patch, tejas } = req.body;
    const material = new Material({
      client_id,
      type,
      fiber: parseInt(fiber) || 0,
      onu: parseInt(onu) || 0,
      patch: parseInt(patch) || 0,
      tejas: parseInt(tejas) || 0
    });
    await material.save();
    res.json({ message: 'Material recorded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/materials', async (req, res) => {
  try {
    const materials = await Material.find().populate('client_id');
    res.json(materials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============ ATTENDANCE ============
app.post('/api/attendance', async (req, res) => {
  try {
    const { member_name, status, time } = req.body;
    const attendance = new Attendance({ member_name, status, time });
    await attendance.save();
    res.json({ message: 'Attendance recorded' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/attendance', async (req, res) => {
  try {
    const records = await Attendance.find().sort({ createdAt: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============ TRAVEL EXPENSES ============
app.post('/api/travel', async (req, res) => {
  try {
    const { location, go_fare, return_fare } = req.body;
    const travel = new TravelExpense({
      location,
      go_fare: parseFloat(go_fare),
      return_fare: parseFloat(return_fare),
      total: parseFloat(go_fare) + parseFloat(return_fare)
    });
    await travel.save();
    res.json({ message: 'Travel expense recorded' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/travel', async (req, res) => {
  try {
    const records = await TravelExpense.find().sort({ createdAt: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============ BRANCH EXPENSES ============
app.post('/api/expenses', async (req, res) => {
  try {
    const { category, amount, description } = req.body;
    const expense = new BranchExpense({
      category,
      amount: parseFloat(amount),
      description
    });
    await expense.save();
    res.json({ message: 'Expense recorded' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/expenses', async (req, res) => {
  try {
    const records = await BranchExpense.find().sort({ createdAt: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============ Health Check ============
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running ✅' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
  console.log(`📊 Dashboard: http://localhost:3000`);
});
