import React from 'react';
import './Rooms.css';

const Rooms = () => {
  const rooms = [
    { id: 1, number: '101', type: 'Deluxe', price: 150, status: 'Available', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop' },
    { id: 2, number: '102', type: 'Suite', price: 250, status: 'Occupied', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop' },
    { id: 3, number: '201', type: 'Standard', price: 100, status: 'Available', image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop' },
    { id: 4, number: '202', type: 'Deluxe', price: 150, status: 'Maintenance', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop' },
    { id: 5, number: '301', type: 'Presidential', price: 500, status: 'Available', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop' },
    { id: 6, number: '302', type: 'Suite', price: 250, status: 'Occupied', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop' },
  ];

  const getStatusClass = (status) => {
    const statusMap = {
      'Available': 'status-available',
      'Occupied': 'status-occupied',
      'Maintenance': 'status-maintenance'
    };
    return statusMap[status] || '';
  };

  return (
    <div className="rooms-page">
      <div className="page-header">
        <h1 className="page-title">🛏️ Rooms Management</h1>
        <p className="page-subtitle">Manage hotel rooms and availability</p>
      </div>

      <div className="rooms-grid">
        {rooms.map(room => (
          <div key={room.id} className="room-card">
            <div className="room-image-container">
              <img 
                src={room.image} 
                alt={`Room ${room.number}`} 
                className="room-image"
              />
              <span className={`room-status ${getStatusClass(room.status)}`}>
                {room.status}
              </span>
            </div>
            <div className="room-info">
              <h3 className="room-number">Room {room.number}</h3>
              <p className="room-type">{room.type}</p>
              <div className="room-details">
                <span className="room-price">${room.price}/night</span>
                <button className="btn btn-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;

