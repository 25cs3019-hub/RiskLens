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
  X,
  Circle
} from 'lucide-react';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuGroups = [
    {
      label: 'MONITOR',
      items: [
        { path: '/', label: 'Overview', icon: BarChart3 },
        { path: '/transactions', label: 'Transactions', icon: TrendingUp },
        { path: '/alerts', label: 'Risk Alerts', icon: AlertTriangle }
      ]
    },
    {
      label: 'INVESTIGATE',
      items: [
        { path: '/fraud-detection', label: 'Fraud Detection', icon: Zap },
        { path: '/chargebacks', label: 'Chargebacks', icon: CreditCard }
      ]
    },
    {
      label: 'GOVERN',
      items: [
        { path: '/model-performance', label: 'Model Performance', icon: LineChart },
        { path: '/audit-trail', label: 'Audit Trail', icon: LogBook }
      ]
    }
  ];

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="logo-icon">RL</div>
            <span className="logo-text">RiskLens</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {menuGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="nav-group">
              <div className="nav-group-label">{group.label}</div>
              <div className="nav-group-items">
                {group.items.map(item => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`nav-item ${isActive ? 'active' : ''}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon size={17} className="nav-icon" />
                      <span className="nav-label">{item.label}</span>
                      {isActive && <div className="nav-accent"></div>}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="status-indicator">
            <Circle size={5} fill="#22c55e" stroke="none" />
            <div className="status-text">
              <div className="status-label">Risk engine operational</div>
              <div className="status-sublabel">Demo environment</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;