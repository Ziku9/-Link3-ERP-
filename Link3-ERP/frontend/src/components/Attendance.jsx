'use client';

import { useState } from 'react';
import { addAttendance } from '@/lib/api';

const TEAM_MEMBERS = [
  { name: 'সজিব', image: 'https://picsum.photos/seed/sajib/80/80' },
  { name: 'শশী', image: 'https://picsum.photos/seed/shashi/80/80' },
];

export default function Attendance() {
  const [loading, setLoading] = useState(false);

  const handleAttendance = async (name, status) => {
    setLoading(true);
    try {
      const time = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
      await addAttendance({ member_name: name, status, time });
      alert(`${name} এর হাজিরা আপডেট হয়েছে (${status === 'in' ? 'এসেছে' : 'বের হয়েছে'})`);
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>টিম মেম্বার হাজিরা (লাইভ)</h3>
      
      <div className="attendance-grid">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.name} className="emp-card">
            <img src={member.image} alt={member.name} className="emp-image" />
            <h4>{member.name}</h4>
            <div className="emp-actions">
              <button
                className="btn btn-in"
                onClick={() => handleAttendance(member.name, 'in')}
                disabled={loading}
              >
                অফিসে এসেছে
              </button>
              <button
                className="btn btn-out"
                onClick={() => handleAttendance(member.name, 'out')}
                disabled={loading}
              >
                বের হয়েছে
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
