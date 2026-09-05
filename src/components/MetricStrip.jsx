import React from 'react';
import './MetricStrip.css';

function MetricStrip({ value, label, secondary, icon: Icon, trend, trendType = 'neutral' }) {
  return (
    <div className="metric-strip">
      <div className="metric-strip-content">
        <div className="metric-strip-left">
          {Icon && <Icon className="metric-strip-icon" size={18} />}
          <div className="metric-strip-labels">
            <div className="metric-strip-label">{label}</div>
            {secondary && <div className="metric-strip-secondary">{secondary}</div>}
          </div>
        </div>
        <div className="metric-strip-right">
          <div className="metric-strip-value">{value}</div>
          {trend && <div className={`metric-strip-trend trend-${trendType}`}>{trend}</div>}
        </div>
      </div>
    </div>
  );
}

export default MetricStrip;