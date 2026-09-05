import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Zap,
  CreditCard,
  LineChart,
  LogBook,
  Menu,
  X
} from 'lucide-react';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Overview', icon: BarChart3 },
    { path: '/transactions', label: 'Transactions', icon: TrendingUp },
    { path: '/alerts', label: 'Risk Alerts', icon: AlertTriangle },
    { path: '/fraud-detection', label: 'Fraud Detection', icon: Zap },
    { path: '/chargebacks', label: 'Chargebacks', icon: CreditCard },
    { path: '/model-performance', label: 'Model Performance', icon: LineChart },
    { path: '/audit-trail', label: 'Audit Trail', icon: LogBook }
  ];

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="logo-icon">RL</div>
            <span className="logo-text">RiskLens</span>
          </div>
        </div>
        <nav className="sidebar-nav">
          {menuItems.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} className="nav-icon" />
                <span className="nav-label">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="sidebar-footer">
          <div className="demo-badge">Demo Data</div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;