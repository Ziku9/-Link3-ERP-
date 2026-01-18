'use client';

import { useState } from 'react';
import { addTravelExpense } from '@/lib/api';

export default function TravelExpense() {
  const [formData, setFormData] = useState({
    t_location: '',
    t_go: '',
    t_return: '',
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
      await addTravelExpense({
        location: formData.t_location,
        go_fare: formData.t_go,
        return_fare: formData.t_return,
      });

      alert('ভাড়ার হিসাব সংরক্ষিত হয়েছে');
      setFormData({ t_location: '', t_go: '', t_return: '' });
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>যাতায়াত খরচ</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>জায়গার নাম / কাজের বিবরণ</label>
          <input
            type="text"
            name="t_location"
            className="form-control"
            value={formData.t_location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid-2">
          <div className="form-group">
            <label>যাওয়ার ভাড়া</label>
            <input
              type="number"
              name="t_go"
              className="form-control"
              value={formData.t_go}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>আসার ভাড়া</label>
            <input
              type="number"
              name="t_return"
              className="form-control"
              value={formData.t_return}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'প্রক্রিয়াকরণ...' : 'এন্ট্রি দিন'}
        </button>
      </form>
    </div>
  );
}
