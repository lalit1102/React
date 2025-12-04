import React from 'react';
import './Staff.css';

const Staff = () => {
  const staffMembers = [
    { id: 1, name: 'Robert Chen', role: 'Manager', department: 'Management', email: 'robert@hotel.com', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop' },
    { id: 2, name: 'Maria Garcia', role: 'Receptionist', department: 'Front Desk', email: 'maria@hotel.com', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' },
    { id: 3, name: 'James Wilson', role: 'Housekeeping', department: 'Housekeeping', email: 'james@hotel.com', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
    { id: 4, name: 'Lisa Anderson', role: 'Chef', department: 'Kitchen', email: 'lisa@hotel.com', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' },
    { id: 5, name: 'Tom Martinez', role: 'Security', department: 'Security', email: 'tom@hotel.com', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop' },
    { id: 6, name: 'Anna Taylor', role: 'Concierge', department: 'Guest Services', email: 'anna@hotel.com', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop' },
  ];

  return (
    <div className="staff-page">
      <div className="page-header">
        <h1 className="page-title">👔 Staff Management</h1>
        <p className="page-subtitle">Manage hotel staff and schedules</p>
      </div>

      <div className="staff-hero">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=400&fit=crop" 
          alt="Staff" 
          className="hero-image"
        />
      </div>

      <div className="staff-grid">
        {staffMembers.map(staff => (
          <div key={staff.id} className="staff-card">
            <div className="staff-image-container">
              <img 
                src={staff.image} 
                alt={staff.name} 
                className="staff-image"
              />
            </div>
            <div className="staff-info">
              <h3 className="staff-name">{staff.name}</h3>
              <p className="staff-role">{staff.role}</p>
              <div className="staff-details">
                <p className="detail-item">
                  <span className="detail-icon">🏢</span>
                  {staff.department}
                </p>
                <p className="detail-item">
                  <span className="detail-icon">📧</span>
                  {staff.email}
                </p>
              </div>
              <div className="staff-actions">
                <button className="btn btn-primary btn-sm">View Schedule</button>
                <button className="btn btn-outline-primary btn-sm">Contact</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;

