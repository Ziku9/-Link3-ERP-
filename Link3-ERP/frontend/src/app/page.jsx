'use client';

import { useState, useEffect } from 'react';
import Dashboard from '@/components/Dashboard';
import Materials from '@/components/Materials';
import Attendance from '@/components/Attendance';
import TravelExpense from '@/components/TravelExpense';
import BranchExpense from '@/components/BranchExpense';

export default function Home() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [menuOpen, setMenuOpen] = useState(true);
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('bn-BD'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const sections = {
    dashboard: <Dashboard />,
    materials: <Materials />,
    attendance: <Attendance />,
    travel: <TravelExpense />,
    expenses: <BranchExpense />,
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className={`sidebar ${menuOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>Link3</h2>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        <nav className="menu">
          {[
            { id: 'dashboard', label: 'ড্যাশবোর্ড', icon: 'fa-home' },
            { id: 'materials', label: 'ক্লায়েন্ট ও মালামাল', icon: 'fa-boxes' },
            { id: 'attendance', label: 'হাজিরা (টিম)', icon: 'fa-user-clock' },
            { id: 'travel', label: 'যাতায়াত খরচ', icon: 'fa-bus' },
            { id: 'expenses', label: 'ব্রাঞ্চ খরচ', icon: 'fa-file-invoice-dollar' },
          ].map((item) => (
            <button
              key={item.id}
              className={`menu-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <i className={`fas ${item.icon}`}></i>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="header">
          <h3>স্বাগতম</h3>
          <div className="clock">{time}</div>
        </div>
        
        <div className="content">
          {sections[activeSection]}
        </div>
      </main>
    </div>
  );
}
