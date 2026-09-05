import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import SectionEyebrow from '../components/SectionEyebrow';
import './Transactions.css';

function Transactions() {
  const [selectedTxn, setSelectedTxn] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [riskFilter, setRiskFilter] = useState('all');

  const transactions = [
    {
      id: 'TXN-2024-001',
      amount: '₹52,400',
      time: '2 min ago',
      customer: 'Acme Corp',
      risk: 91,
      level: 'critical',
      status: 'review',
      method: 'Card',
      device: 'iPhone 14 Pro',
      location: 'Delhi, IN'
    },
    {
      id: 'TXN-2024-002',
      amount: '₹18,900',
      time: '5 min ago',
      customer: 'Tech Startup Inc',
      risk: 67,
      level: 'high',
      status: 'open',
      method: 'UPI',
      device: 'Samsung Galaxy',
      location: 'Mumbai, IN'
    },
    {
      id: 'TXN-2024-003',
      amount: '₹8,400',
      time: '12 min ago',
      customer: 'Retail Store Ltd',
      risk: 34,
      level: 'medium',
      status: 'reviewed',
      method: 'Card',
      device: 'Desktop',
      location: 'Bangalore, IN'
    },
    {
      id: 'TXN-2024-004',
      amount: '₹125,600',
      time: '18 min ago',
      customer: 'Enterprise Solutions',
      risk: 12,
      level: 'low',
      status: 'cleared',
      method: 'Bank Transfer',
      device: 'Desktop',
      location: 'Pune, IN'
    },
    {
      id: 'TXN-2024-005',
      amount: '₹34,200',
      time: '24 min ago',
      customer: 'E-Commerce Store',
      risk: 54,
      level: 'high',
      status: 'review',
      method: 'Card',
      device: 'iPhone',
      location: 'Hyderabad, IN'
    }
  ];

  const filtered = transactions.filter(txn => {
    const matchesSearch =
      txn.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      txn.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRisk = riskFilter === 'all' || txn.level === riskFilter;
    return matchesSearch && matchesRisk;
  });

  const getRiskColor = level => {
    switch (level) {
      case 'critical':
        return '#dc2626';
      case 'high':
        return '#d97706';
      case 'medium':
        return '#f59e0b';
      case 'low':
        return '#22c55e';
      default:
        return '#6b6660';
    }
  };

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="page-content">
          <div className="transactions-container">
            <div className="page-header">
              <div>
                <SectionEyebrow label="INVESTIGATION" />
                <h1 className="page-heading">Transaction Intelligence</h1>
                <p className="page-subtitle">Monitor, search, and investigate transaction behavior patterns.</p>
              </div>
            </div>

            <div className="txn-controls">
              <div className="search-input-wrapper">
                <Search size={16} />
                <input
                  type="text"
                  placeholder="Search by transaction ID or customer..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="filter-group">
                <button
                  className={`filter-pill ${riskFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setRiskFilter('all')}
                >
                  All
                </button>
                <button
                  className={`filter-pill ${riskFilter === 'critical' ? 'active' : ''}`}
                  onClick={() => setRiskFilter('critical')}
                >
                  Critical
                </button>
                <button
                  className={`filter-pill ${riskFilter === 'high' ? 'active' : ''}`}
                  onClick={() => setRiskFilter('high')}
                >
                  High
                </button>
                <button
                  className={`filter-pill ${riskFilter === 'medium' ? 'active' : ''}`}
                  onClick={() => setRiskFilter('medium')}
                >
                  Medium
                </button>
              </div>
            </div>

            <div className="txn-table-wrapper">
              <table className="txn-table">
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Amount</th>
                    <th>Time</th>
                    <th>Customer</th>
                    <th>Risk</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(txn => (
                    <tr key={txn.id} className="txn-row" onClick={() => setSelectedTxn(txn)}>
                      <td className="txn-id">{txn.id}</td>
                      <td className="txn-amount">{txn.amount}</td>
                      <td className="txn-time">{txn.time}</td>
                      <td className="txn-customer">{txn.customer}</td>
                      <td>
                        <div className="risk-badge" style={{ borderLeftColor: getRiskColor(txn.level) }}>
                          {txn.risk}/100
                        </div>
                      </td>
                      <td>
                        <span className="status-badge">{txn.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Detail Panel */}
            {selectedTxn && (
              <div className="detail-panel-overlay" onClick={() => setSelectedTxn(null)}>
                <div className="detail-panel" onClick={e => e.stopPropagation()}>
                  <div className="detail-header">
                    <h2>Transaction Details</h2>
                    <button className="detail-close" onClick={() => setSelectedTxn(null)}>×</button>
                  </div>
                  <div className="detail-content">
                    <div className="detail-section">
                      <div className="detail-row">
                        <span className="detail-label">Transaction ID</span>
                        <span className="detail-value">{selectedTxn.id}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Amount</span>
                        <span className="detail-value">{selectedTxn.amount}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Customer</span>
                        <span className="detail-value">{selectedTxn.customer}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Payment Method</span>
                        <span className="detail-value">{selectedTxn.method}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Device</span>
                        <span className="detail-value">{selectedTxn.device}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Location</span>
                        <span className="detail-value">{selectedTxn.location}</span>
                      </div>
                    </div>
                    <div className="detail-section">
                      <h3 className="detail-section-title">Risk Assessment</h3>
                      <div className="risk-score-large">{selectedTxn.risk}/100</div>
                      <div className="detail-row">
                        <span className="detail-label">Risk Level</span>
                        <span className="detail-value">{selectedTxn.level.toUpperCase()}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Confidence</span>
                        <span className="detail-value">94%</span>
                      </div>
                    </div>
                    <div className="detail-section">
                      <h3 className="detail-section-title">Risk Signals</h3>
                      <ul className="signal-list">
                        <li>Transaction velocity above baseline</li>
                        <li>Device consistency score low</li>
                        <li>Amount deviation detected</li>
                      </ul>
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

export default Transactions;