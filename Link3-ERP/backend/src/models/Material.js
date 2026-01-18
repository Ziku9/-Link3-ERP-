import mongoose from 'mongoose';

const materialSchema = new mongoose.Schema({
  client_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true
  },
  type: {
    type: String,
    enum: ['install', 'remove'],
    required: true
  },
  fiber: {
    type: Number,
    default: 0
  },
  onu: {
    type: Number,
    default: 0
  },
  patch: {
    type: Number,
    default: 0
  },
  tejas: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Material', materialSchema);
