import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Handle login logic here
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image-section">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=1000&fit=crop" 
            alt="Hotel" 
            className="login-image"
          />
        </div>
        <div className="login-form-section">
          <div className="login-form-container">
            <div className="login-header">
              <h1 className="login-title">🔐 Login</h1>
              <p className="login-subtitle">Welcome back! Please login to your account</p>
            </div>
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <span className="label-icon">📧</span>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  <span className="label-icon">🔒</span>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-options">
                <div className="form-check">
                  <input type="checkbox" id="remember" className="form-check-input" />
                  <label htmlFor="remember" className="form-check-label">Remember me</label>
                </div>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>

              <button type="submit" className="btn btn-primary btn-lg w-100 login-button">
                Login
              </button>

              <div className="login-divider">
                <span>Or continue with</span>
              </div>

              <div className="social-login">
                <button type="button" className="btn btn-outline-secondary social-btn">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="social-icon" />
                  Google
                </button>
                <button type="button" className="btn btn-outline-secondary social-btn">
                  <span className="social-icon">f</span>
                  Facebook
                </button>
              </div>

              <div className="login-footer">
                <p>Don't have an account? <a href="#" className="signup-link">Sign up</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

