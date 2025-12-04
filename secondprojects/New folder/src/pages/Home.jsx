import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">🏨 Hotel Management System</h1>
          <p className="hero-subtitle">Welcome to your comprehensive hotel management dashboard</p>
          <p className="hero-description">
            Manage your hotel operations efficiently with our all-in-one management system.
            From room bookings to guest management, we've got you covered.
          </p>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop" 
            alt="Luxury Hotel" 
            className="img-fluid rounded"
          />
        </div>
      </div>

      <div className="features-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img 
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop" 
              alt="Rooms" 
              className="feature-image"
            />
            <h3>Room Management</h3>
            <p>Efficiently manage room availability and bookings</p>
          </div>
          <div className="feature-card">
            <img 
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop" 
              alt="Reservations" 
              className="feature-image"
            />
            <h3>Reservations</h3>
            <p>Handle bookings and reservations seamlessly</p>
          </div>
          <div className="feature-card">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop" 
              alt="Guests" 
              className="feature-image"
            />
            <h3>Guest Services</h3>
            <p>Manage guest information and preferences</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

