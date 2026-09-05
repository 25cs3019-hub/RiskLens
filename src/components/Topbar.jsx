import React from 'react';
import { Bell, Search, User, Circle } from 'lucide-react';
import './Topbar.css';

function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="breadcrumb">
          <span>Dashboard</span>
        </div>
      </div>
      <div className="topbar-center">
        <div className="search-box">
          <Search size={16} className="search-icon" />
          <input type="text" placeholder="Search transactions, alerts..." />
        </div>
      </div>
      <div className="topbar-right">
        <div className="status-dot">
          <Circle size={6} fill="#22c55e" stroke="none" />
          <span>Risk engine active</span>
        </div>
        <button className="topbar-btn" title="Notifications">
          <Bell size={18} />
          <span className="notification-badge">3</span>
        </button>
        <button className="topbar-btn" title="Profile">
          <User size={18} />
        </button>
      </div>
    </header>
  );
}

export default Topbar;