import React from 'react';
import './Reports.css';

const Reports = () => {
  const reports = [
    { id: 1, title: 'Monthly Revenue Report', period: 'January 2024', revenue: '$125,450', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop' },
    { id: 2, title: 'Occupancy Rate', period: 'Last 30 Days', rate: '78%', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop' },
    { id: 3, title: 'Guest Satisfaction', period: 'Q4 2023', rating: '4.8/5', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop' },
    { id: 4, title: 'Staff Performance', period: 'This Month', performance: 'Excellent', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop' },
  ];

  return (
    <div className="reports-page">
      <div className="page-header">
        <h1 className="page-title">📈 Reports</h1>
        <p className="page-subtitle">View hotel analytics and reports</p>
      </div>

      <div className="reports-hero">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop" 
          alt="Reports" 
          className="hero-image"
        />
      </div>

      <div className="reports-grid">
        {reports.map(report => (
          <div key={report.id} className="report-card">
            <div className="report-image-container">
              <img 
                src={report.image} 
                alt={report.title} 
                className="report-image"
              />
            </div>
            <div className="report-info">
              <h3 className="report-title">{report.title}</h3>
              <p className="report-period">{report.period}</p>
              <div className="report-metric">
                {report.revenue && <span className="metric-value revenue">{report.revenue}</span>}
                {report.rate && <span className="metric-value rate">{report.rate}</span>}
                {report.rating && <span className="metric-value rating">{report.rating}</span>}
                {report.performance && <span className="metric-value performance">{report.performance}</span>}
              </div>
              <button className="btn btn-primary btn-sm mt-3">View Full Report</button>
            </div>
          </div>
        ))}
      </div>

      <div className="charts-section">
        <h2 className="section-title">Analytics Overview</h2>
        <div className="charts-grid">
          <div className="chart-card">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
              alt="Revenue Chart" 
              className="chart-image"
            />
            <h4>Revenue Trends</h4>
          </div>
          <div className="chart-card">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
              alt="Occupancy Chart" 
              className="chart-image"
            />
            <h4>Occupancy Analysis</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;

