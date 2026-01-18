import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  member_name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['in', 'out'],
    required: true
  },
  time: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Attendance', attendanceSchema);
