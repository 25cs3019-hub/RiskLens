import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import './Topbar.css';

function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <span className="topbar-breadcrumb">Dashboard</span>
      </div>
      <div className="topbar-center">
        <div className="search-box">
          <Search size={15} className="search-icon" />
          <input type="text" placeholder="Search transactions, alerts..." />
        </div>
      </div>
      <div className="topbar-right">
        <span className="topbar-status">● Risk engine active</span>
        <button className="topbar-btn">
          <Bell size={17} />
          <span className="notification-badge">3</span>
        </button>
        <div className="topbar-divider"></div>
        <button className="topbar-btn">
          <User size={17} />
        </button>
      </div>
    </header>
  );
}

export default Topbar;