'use client';

import { useState } from 'react';
import { addClient, addMaterial } from '@/lib/api';

export default function Materials() {
  const [formData, setFormData] = useState({
    c_name: '',
    c_phone: '',
    c_address: '',
    m_type: 'install',
    m_fiber: '0',
    m_onu: '0',
    m_patch: '0',
    m_tejas: '0',
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
      // Add Client
      const clientRes = await addClient({
        name: formData.c_name,
        phone: formData.c_phone,
        address: formData.c_address,
      });

      // Add Material
      await addMaterial({
        client_id: clientRes.data.id,
        type: formData.m_type,
        fiber: formData.m_fiber,
        onu: formData.m_onu,
        patch: formData.m_patch,
        tejas: formData.m_tejas,
      });

      alert('তথ্য সফলভাবে সংরক্ষিত হয়েছে!');
      
      // Reset form
      setFormData({
        c_name: '',
        c_phone: '',
        c_address: '',
        m_type: 'install',
        m_fiber: '0',
        m_onu: '0',
        m_patch: '0',
        m_tejas: '0',
      });
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>নতুন ক্লায়েন্ট ও মালামাল এন্ট্রি</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ক্লায়েন্টের নাম</label>
          <input
            type="text"
            name="c_name"
            className="form-control"
            placeholder="নাম লিখুন"
            value={formData.c_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <input
            type="text"
            name="c_phone"
            className="form-control"
            placeholder="মোবাইল নম্বর"
            value={formData.c_phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="c_address"
            className="form-control"
            placeholder="ঠিকানা"
            value={formData.c_address}
            onChange={handleChange}
          />
        </div>

        <hr style={{ margin: '15px 0', border: '0', borderTop: '1px dashed #ccc' }} />

        <div className="form-group">
          <label>কাজের ধরন</label>
          <select
            name="m_type"
            className="form-control"
            value={formData.m_type}
            onChange={handleChange}
          >
            <option value="install">ইনস্টলেশন (নতুন কানেকশন)</option>
            <option value="remove">রিমুভ (মালামাল তুলে নেওয়া)</option>
          </select>
        </div>

        <div className="grid-2">
          <div className="form-group">
            <label>ফাইবার (মিটার)</label>
            <input
              type="number"
              name="m_fiber"
              className="form-control"
              value={formData.m_fiber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>ONU</label>
            <input
              type="number"
              name="m_onu"
              className="form-control"
              value={formData.m_onu}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>প্যাচ কেবল</label>
            <input
              type="number"
              name="m_patch"
              className="form-control"
              value={formData.m_patch}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>TJ BOX</label>
            <input
              type="number"
              name="m_tejas"
              className="form-control"
              value={formData.m_tejas}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'প্রক্রিয়াকরণ...' : 'সংরক্ষণ করুন'}
        </button>
      </form>
    </div>
  );
}
