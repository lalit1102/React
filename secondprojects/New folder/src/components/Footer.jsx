import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="footer-icon">🏨</span>
              Hotel Management
            </h3>
            <p className="footer-description">
              Your trusted partner in hotel management solutions. 
              We provide comprehensive tools to manage your hotel operations efficiently.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <span>📘</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <span>📷</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>💼</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/rooms">Rooms</Link></li>
              <li><Link to="/reservations">Reservations</Link></li>
              <li><Link to="/guests">Guests</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Management</h4>
            <ul className="footer-links">
              <li><Link to="/staff">Staff</Link></li>
              <li><Link to="/reports">Reports</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📍</span>
                <span>123 Hotel Street, City, Country 12345</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <span className="contact-icon">📧</span>
                <span>info@hotelmanagement.com</span>
              </li>
              <li>
                <span className="contact-icon">🌐</span>
                <span>www.hotelmanagement.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Hotel Management System. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#">Terms of Service</a>
            <span className="separator">|</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

