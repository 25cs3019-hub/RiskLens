import React from 'react';
import './MetricBlock.css';

function MetricBlock({ label, value, secondary, trend, trendType }) {
  return (
    <div className="metric-block">
      <div className="metric-block-label">{label}</div>
      <div className="metric-block-value">{value}</div>
      {secondary && <div className="metric-block-secondary">{secondary}</div>}
      {trend && (
        <div className={`metric-block-trend trend-${trendType || 'neutral'}`}>{trend}</div>
      )}
    </div>
  );
}

export default MetricBlock;