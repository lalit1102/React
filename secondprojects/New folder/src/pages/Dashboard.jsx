import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1 className="page-title">📊 Dashboard</h1>
      
      <div className="stats-grid">
        <div className="stat-card">
          <img 
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=200&fit=crop" 
            alt="Rooms" 
            className="stat-image"
          />
          <div className="stat-content">
            <h3>Total Rooms</h3>
            <p className="stat-number">120</p>
            <p className="stat-label">45 Available</p>
          </div>
        </div>

        <div className="stat-card">
          <img 
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300&h=200&fit=crop" 
            alt="Reservations" 
            className="stat-image"
          />
          <div className="stat-content">
            <h3>Reservations</h3>
            <p className="stat-number">85</p>
            <p className="stat-label">Today's Check-ins</p>
          </div>
        </div>

        <div className="stat-card">
          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&h=200&fit=crop" 
            alt="Guests" 
            className="stat-image"
          />
          <div className="stat-content">
            <h3>Active Guests</h3>
            <p className="stat-number">156</p>
            <p className="stat-label">Currently Staying</p>
          </div>
        </div>

        <div className="stat-card">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop" 
            alt="Revenue" 
            className="stat-image"
          />
          <div className="stat-content">
            <h3>Revenue</h3>
            <p className="stat-number">$45,230</p>
            <p className="stat-label">This Month</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-section">
          <h2>Recent Activities</h2>
          <div className="activity-list">
            <div className="activity-item">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                alt="Guest" 
                className="activity-avatar"
              />
              <div className="activity-info">
                <p><strong>John Doe</strong> checked in to Room 201</p>
                <span className="activity-time">2 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                alt="Guest" 
                className="activity-avatar"
              />
              <div className="activity-info">
                <p><strong>Jane Smith</strong> made a reservation</p>
                <span className="activity-time">5 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" 
                alt="Guest" 
                className="activity-avatar"
              />
              <div className="activity-info">
                <p><strong>Mike Johnson</strong> checked out from Room 305</p>
                <span className="activity-time">1 day ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-section">
          <h2>Hotel Overview</h2>
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop" 
            alt="Hotel Overview" 
            className="overview-image"
          />
        </div>
      </div>

      <div className="reviews-section">
        <h2 className="section-title">⭐ Guest Reviews</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-header">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                alt="Guest" 
                className="review-avatar"
              />
              <div className="reviewer-info">
                <h4 className="reviewer-name">John Doe</h4>
                <div className="review-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating-text">5.0</span>
                </div>
              </div>
            </div>
            <p className="review-text">
              "Excellent service and beautiful rooms! The staff was very helpful and the facilities were top-notch. 
              Will definitely come back again!"
            </p>
            <div className="review-meta">
              <span className="review-date">January 10, 2024</span>
              <span className="review-room">Room 201</span>
            </div>
          </div>

          <div className="review-card">
            <div className="review-header">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                alt="Guest" 
                className="review-avatar"
              />
              <div className="reviewer-info">
                <h4 className="reviewer-name">Jane Smith</h4>
                <div className="review-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating-text">5.0</span>
                </div>
              </div>
            </div>
            <p className="review-text">
              "Amazing experience! The hotel exceeded all my expectations. Clean, comfortable, and the breakfast was delicious."
            </p>
            <div className="review-meta">
              <span className="review-date">January 8, 2024</span>
              <span className="review-room">Room 305</span>
            </div>
          </div>

          <div className="review-card">
            <div className="review-header">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" 
                alt="Guest" 
                className="review-avatar"
              />
              <div className="reviewer-info">
                <h4 className="reviewer-name">Mike Johnson</h4>
                <div className="review-rating">
                  <span className="stars">⭐⭐⭐⭐</span>
                  <span className="rating-text">4.5</span>
                </div>
              </div>
            </div>
            <p className="review-text">
              "Great location and friendly staff. The room was spacious and well-maintained. Highly recommend!"
            </p>
            <div className="review-meta">
              <span className="review-date">January 5, 2024</span>
              <span className="review-room">Room 102</span>
            </div>
          </div>

          <div className="review-card">
            <div className="review-header">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" 
                alt="Guest" 
                className="review-avatar"
              />
              <div className="reviewer-info">
                <h4 className="reviewer-name">Sarah Williams</h4>
                <div className="review-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating-text">5.0</span>
                </div>
              </div>
            </div>
            <p className="review-text">
              "Perfect stay! The hotel has everything you need. The spa services were wonderful and the concierge was very helpful."
            </p>
            <div className="review-meta">
              <span className="review-date">January 3, 2024</span>
              <span className="review-room">Room 401</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

