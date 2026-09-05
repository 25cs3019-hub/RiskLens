import React from 'react';
import './ChartCard.css';

function ChartCard({ eyebrow, title, subtitle, action, children }) {
  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <div className="chart-card-title-group">
          {eyebrow && <div className="chart-card-eyebrow">{eyebrow}</div>}
          <h3 className="chart-card-title">{title}</h3>
          {subtitle && <p className="chart-card-subtitle">{subtitle}</p>}
        </div>
        {action && <div className="chart-card-action">{action}</div>}
      </div>
      <div className="chart-card-body">{children}</div>
    </div>
  );
}

export default ChartCard;