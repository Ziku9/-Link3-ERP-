import mongoose from 'mongoose';

const branchExpenseSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['বিদ্যুৎ বিল', 'ইন্টারনেট বিল', 'খাবার খরচ', 'অন্যান্য'],
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('BranchExpense', branchExpenseSchema);
