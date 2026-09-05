import React from 'react';
import './StatCard.css';

function StatCard({ label, value, subtext, icon: Icon, trend, trendDirection }) {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <span className="stat-label">{label}</span>
        {Icon && <Icon className="stat-icon" size={20} />}
      </div>
      <div className="stat-value">{value}</div>
      {subtext && <div className="stat-subtext">{subtext}</div>}
      {trend && (
        <div className={`stat-trend ${trendDirection || 'neutral'}`}>
          {trend}
        </div>
      )}
    </div>
  );
}

export default StatCard;