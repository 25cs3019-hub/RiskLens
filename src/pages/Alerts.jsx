import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import SectionEyebrow from '../components/SectionEyebrow';
import './Alerts.css';

function Alerts() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedAlert, setSelectedAlert] = useState(null);

  const alerts = [
    {
      id: 1,
      severity: 'critical',
      title: 'Velocity spike',
      detected: '3 min ago',
      affected: '42 txns',
      exposure: '₹82,400',
      reason: 'Transaction count 4.2× above baseline',
      action: 'Review and escalate'
    },
    {
      id: 2,
      severity: 'high',
      title: 'Device anomaly',
      detected: '8 min ago',
      affected: '18 txns',
      exposure: '₹31,200',
      reason: 'Device fingerprint mismatch detected',
      action: 'Verify customer identity'
    },
    {
      id: 3,
      severity: 'high',
      title: 'Repeated failures',
      detected: '14 min ago',
      affected: '12 txns',
      exposure: '₹24,500',
      reason: 'Multiple failed payment attempts',
      action: 'Contact customer'
    },
    {
      id: 4,
      severity: 'medium',
      title: 'Amount deviation',
      detected: '24 min ago',
      affected: '5 txns',
      exposure: '₹14,800',
      reason: 'Transaction amount 2.8× above average',
      action: 'Monitor and review'
    },
    {
      id: 5,
      severity: 'medium',
      title: 'Location shift',
      detected: '32 min ago',
      affected: '3 txns',
      exposure: '₹8,900',
      reason: 'Geographic pattern change detected',
      action: 'Review if expected'
    }
  ];

  const tabCounts = {
    all: alerts.length,
    critical: alerts.filter(a => a.severity === 'critical').length,
    high: alerts.filter(a => a.severity === 'high').length,
    medium: alerts.filter(a => a.severity === 'medium').length
  };

  const getSeverityColor = severity => {
    switch (severity) {
      case 'critical':
        return '#dc2626';
      case 'high':
        return '#d97706';
      case 'medium':
        return '#f59e0b';
      default:
        return '#6b6660';
    }
  };

  const filtered = alerts.filter(alert => activeTab === 'all' || alert.severity === activeTab);

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="page-content">
          <div className="alerts-container">
            <div className="page-header">
              <div>
                <SectionEyebrow label="ACTIVE THREATS" />
                <h1 className="page-heading">Risk Alerts</h1>
                <p className="page-subtitle">Manage and investigate active security alerts.</p>
              </div>
            </div>

            <div className="alerts-summary">
              <div className="summary-item">
                <span className="summary-label">Total Active</span>
                <span className="summary-value">{alerts.length}</span>
              </div>
              <div className="summary-item critical">
                <span className="summary-label">Critical</span>
                <span className="summary-value">{tabCounts.critical}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Under Review</span>
                <span className="summary-value">8</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Resolved</span>
                <span className="summary-value">142</span>
              </div>
            </div>

            <div className="alerts-tabs">
              <button
                className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All <span className="tab-count">{tabCounts.all}</span>
              </button>
              <button
                className={`tab-btn ${activeTab === 'critical' ? 'active' : ''}`}
                onClick={() => setActiveTab('critical')}
              >
                Critical <span className="tab-count">{tabCounts.critical}</span>
              </button>
              <button
                className={`tab-btn ${activeTab === 'high' ? 'active' : ''}`}
                onClick={() => setActiveTab('high')}
              >
                High <span className="tab-count">{tabCounts.high}</span>
              </button>
              <button
                className={`tab-btn ${activeTab === 'medium' ? 'active' : ''}`}
                onClick={() => setActiveTab('medium')}
              >
                Medium <span className="tab-count">{tabCounts.medium}</span>
              </button>
            </div>

            <div className="alerts-list">
              {filtered.map(alert => (
                <div
                  key={alert.id}
                  className="alert-item"
                  onClick={() => setSelectedAlert(alert)}
                  style={{ borderLeftColor: getSeverityColor(alert.severity) }}
                >
                  <div className="alert-left">
                    <h3 className="alert-title">{alert.title}</h3>
                    <p className="alert-reason">{alert.reason}</p>
                  </div>
                  <div className="alert-right">
                    <div className="alert-meta">
                      <div className="meta-item">
                        <span className="meta-label">Affected</span>
                        <span className="meta-value">{alert.affected}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Exposure</span>
                        <span className="meta-value">{alert.exposure}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Detected</span>
                        <span className="meta-value">{alert.detected}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Alert Detail Panel */}
            {selectedAlert && (
              <div className="detail-panel-overlay" onClick={() => setSelectedAlert(null)}>
                <div className="detail-panel" onClick={e => e.stopPropagation()}>
                  <div className="detail-header">
                    <h2>{selectedAlert.title}</h2>
                    <button className="detail-close" onClick={() => setSelectedAlert(null)}>×</button>
                  </div>
                  <div className="detail-content">
                    <div className="detail-section">
                      <div className="detail-row">
                        <span className="detail-label">Alert ID</span>
                        <span className="detail-value">ALT-{selectedAlert.id.toString().padStart(6, '0')}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Severity</span>
                        <span className="detail-value">{selectedAlert.severity.toUpperCase()}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Detected</span>
                        <span className="detail-value">{selectedAlert.detected}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Affected</span>
                        <span className="detail-value">{selectedAlert.affected}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Financial Exposure</span>
                        <span className="detail-value">{selectedAlert.exposure}</span>
                      </div>
                    </div>
                    <div className="detail-section">
                      <h3 className="detail-section-title">Risk Reason</h3>
                      <p className="detail-description">{selectedAlert.reason}</p>
                    </div>
                    <div className="detail-section">
                      <h3 className="detail-section-title">Recommended Action</h3>
                      <p className="detail-description">{selectedAlert.action}</p>
                    </div>
                    <div className="detail-actions">
                      <button className="action-btn primary">Mark as Reviewed</button>
                      <button className="action-btn secondary">Escalate</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alerts;