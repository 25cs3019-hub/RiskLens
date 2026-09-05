import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import './Topbar.css';

function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1 className="topbar-title">RiskLens</h1>
      </div>
      <div className="topbar-right">
        <button className="topbar-icon-btn" title="Notifications">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
        <button className="topbar-icon-btn" title="Settings">
          <Settings size={20} />
        </button>
        <div className="topbar-divider"></div>
        <button className="topbar-icon-btn" title="Profile">
          <User size={20} />
        </button>
      </div>
    </header>
  );
}

export default Topbar;