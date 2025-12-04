import React from 'react';
import './Guests.css';

const Guests = () => {
  const guests = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1234567890', status: 'Checked In', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+1234567891', status: 'Checked In', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', phone: '+1234567892', status: 'Checked Out', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', phone: '+1234567893', status: 'Checked In', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' },
    { id: 5, name: 'David Brown', email: 'david@example.com', phone: '+1234567894', status: 'Checked In', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop' },
    { id: 6, name: 'Emily Davis', email: 'emily@example.com', phone: '+1234567895', status: 'Reserved', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop' },
  ];

  const getStatusClass = (status) => {
    const statusMap = {
      'Checked In': 'status-checked-in',
      'Checked Out': 'status-checked-out',
      'Reserved': 'status-reserved'
    };
    return statusMap[status] || '';
  };

  return (
    <div className="guests-page">
      <div className="page-header">
        <h1 className="page-title">👥 Guests</h1>
        <p className="page-subtitle">Manage guest information and profiles</p>
      </div>

      <div className="guests-hero">
        <img 
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=400&fit=crop" 
          alt="Guests" 
          className="hero-image"
        />
      </div>

      <div className="guests-grid">
        {guests.map(guest => (
          <div key={guest.id} className="guest-card">
            <div className="guest-image-container">
              <img 
                src={guest.image} 
                alt={guest.name} 
                className="guest-image"
              />
              <span className={`guest-status ${getStatusClass(guest.status)}`}>
                {guest.status}
              </span>
            </div>
            <div className="guest-info">
              <h3 className="guest-name">{guest.name}</h3>
              <div className="guest-contact">
                <p className="contact-item">
                  <span className="contact-icon">📧</span>
                  {guest.email}
                </p>
                <p className="contact-item">
                  <span className="contact-icon">📞</span>
                  {guest.phone}
                </p>
              </div>
              <div className="guest-actions">
                <button className="btn btn-primary btn-sm">View Profile</button>
                <button className="btn btn-outline-primary btn-sm">Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guests;

