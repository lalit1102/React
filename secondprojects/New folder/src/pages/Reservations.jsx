import React from 'react';
import './Reservations.css';

const Reservations = () => {
  const reservations = [
    { 
      id: 1, 
      guest: 'John Doe', 
      room: '201', 
      checkIn: '2024-01-15', 
      checkOut: '2024-01-18',
      status: 'Confirmed',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
    },
    { 
      id: 2, 
      guest: 'Jane Smith', 
      room: '305', 
      checkIn: '2024-01-20', 
      checkOut: '2024-01-25',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'
    },
    { 
      id: 3, 
      guest: 'Mike Johnson', 
      room: '102', 
      checkIn: '2024-01-12', 
      checkOut: '2024-01-14',
      status: 'Confirmed',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
    },
    { 
      id: 4, 
      guest: 'Sarah Williams', 
      room: '401', 
      checkIn: '2024-01-22', 
      checkOut: '2024-01-28',
      status: 'Confirmed',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop'
    },
  ];

  const getStatusClass = (status) => {
    return status === 'Confirmed' ? 'status-confirmed' : 'status-pending';
  };

  return (
    <div className="reservations-page">
      <div className="page-header">
        <h1 className="page-title">📅 Reservations</h1>
        <p className="page-subtitle">View and manage room reservations</p>
      </div>

      <div className="reservations-hero">
        <img 
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=400&fit=crop" 
          alt="Reservations" 
          className="hero-image"
        />
      </div>

      <div className="reservations-list">
        {reservations.map(reservation => (
          <div key={reservation.id} className="reservation-card">
            <div className="reservation-avatar">
              <img 
                src={reservation.image} 
                alt={reservation.guest} 
                className="avatar-image"
              />
            </div>
            <div className="reservation-details">
              <h3 className="guest-name">{reservation.guest}</h3>
              <div className="reservation-info">
                <div className="info-item">
                  <span className="info-label">Room:</span>
                  <span className="info-value">Room {reservation.room}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Check-in:</span>
                  <span className="info-value">{reservation.checkIn}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Check-out:</span>
                  <span className="info-value">{reservation.checkOut}</span>
                </div>
              </div>
            </div>
            <div className="reservation-actions">
              <span className={`status-badge ${getStatusClass(reservation.status)}`}>
                {reservation.status}
              </span>
              <button className="btn btn-primary btn-sm mt-2">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reservations;

