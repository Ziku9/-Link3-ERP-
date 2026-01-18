'use client';

import { useState } from 'react';
import { addBranchExpense } from '@/lib/api';

export default function BranchExpense() {
  const [formData, setFormData] = useState({
    e_category: 'বিদ্যুৎ বিল',
    e_amount: '',
    e_desc: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addBranchExpense({
        category: formData.e_category,
        amount: formData.e_amount,
        description: formData.e_desc,
      });

      alert('খরচ সংরক্ষিত হয়েছে');
      setFormData({ e_category: 'বিদ্যুৎ বিল', e_amount: '', e_desc: '' });
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>ব্রাঞ্চ খরচ (বিদ্যুৎ বিল, নিত্যপ্রয়োজনীয়)</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>খরচের ক্যাটাগরি</label>
          <select
            name="e_category"
            className="form-control"
            value={formData.e_category}
            onChange={handleChange}
          >
            <option>বিদ্যুৎ বিল</option>
            <option>ইন্টারনেট বিল</option>
            <option>খাবার খরচ</option>
            <option>অন্যান্য</option>
          </select>
        </div>

        <div className="form-group">
          <label>টাকার পরিমাণ</label>
          <input
            type="number"
            name="e_amount"
            className="form-control"
            value={formData.e_amount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>নোট</label>
          <textarea
            name="e_desc"
            className="form-control"
            value={formData.e_desc}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'প্রক্রিয়াকরণ...' : 'সংরক্ষণ করুন'}
        </button>
      </form>
    </div>
  );
}
