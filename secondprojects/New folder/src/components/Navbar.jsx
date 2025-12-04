import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-dark bg-primary shadow-sm">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <span className="me-2 fs-4">🏨</span>
          <span className="fw-bold">Hotel Management</span>
        </Link>
        
        <ul className="navbar-nav ms-auto align-items-center flex-row">
          <li className="nav-item">
            <Link 
              to="/dashboard" 
              className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}
            >
              <span className="me-1">📊</span>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/rooms" 
              className={`nav-link ${isActive('/rooms') ? 'active' : ''}`}
            >
              <span className="me-1">🛏️</span>
              Rooms
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/reservations" 
              className={`nav-link ${isActive('/reservations') ? 'active' : ''}`}
            >
              <span className="me-1">📅</span>
              Reservations
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/guests" 
              className={`nav-link ${isActive('/guests') ? 'active' : ''}`}
            >
              <span className="me-1">👥</span>
              Guests
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/staff" 
              className={`nav-link ${isActive('/staff') ? 'active' : ''}`}
            >
              <span className="me-1">👔</span>
              Staff
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/reports" 
              className={`nav-link ${isActive('/reports') ? 'active' : ''}`}
            >
              <span className="me-1">📈</span>
              Reports
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/login" 
              className={`nav-link ${isActive('/login') ? 'active' : ''}`}
            >
              <span className="me-1">🔐</span>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <button 
              className="btn btn-outline-light ms-2"
              onClick={() => {
                // Handle logout logic here
                console.log('Logout clicked');
              }}
            >
              <span className="me-1">🚪</span>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

