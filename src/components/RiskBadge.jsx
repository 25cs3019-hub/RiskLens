import React from 'react';
import './RiskBadge.css';

function RiskBadge({ risk = 'medium', size = 'md' }) {
  const labels = {
    critical: 'Critical',
    high: 'High',
    medium: 'Medium',
    low: 'Low',
    resolved: 'Resolved'
  };

  return (
    <span className={`risk-badge risk-${risk} size-${size}`}>
      {labels[risk]}
    </span>
  );
}

export default RiskBadge;