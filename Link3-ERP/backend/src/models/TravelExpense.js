import mongoose from 'mongoose';

const travelExpenseSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  go_fare: {
    type: Number,
    required: true
  },
  return_fare: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('TravelExpense', travelExpenseSchema);
