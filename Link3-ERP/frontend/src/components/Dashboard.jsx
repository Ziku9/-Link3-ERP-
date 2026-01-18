'use client';

import { useState, useEffect } from 'react';
import { getStats } from '@/lib/api';

export default function Dashboard() {
  const [stats, setStats] = useState({ clients: 0, attendance: 0, expense: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const response = await getStats();
      setStats(response.data);
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">লোড হচ্ছে...</div>;
  }

  return (
    <div className="grid-container">
      <div className="card">
        <h3>মোট ক্লায়েন্ট</h3>
        <div className="value">{stats.clients}</div>
      </div>
      <div className="card">
        <h3>আজকের হাজিরা</h3>
        <div className="value">{stats.attendance}</div>
      </div>
      <div className="card">
        <h3>মোট খরচ (ব্রাঞ্চ)</h3>
        <div className="value">৳ {stats.expense}</div>
      </div>
    </div>
  );
}
