import React from 'react';
import './RiskSignalBreakdown.css';

function RiskSignalBreakdown() {
  const signals = [
    { name: 'Velocity anomaly', value: 32 },
    { name: 'Repeated attempts', value: 24 },
    { name: 'Device mismatch', value: 18 },
    { name: 'Amount deviation', value: 10 }
  ];
  const maxValue = 32;

  return (
    <div className="risk-signal-breakdown">
      <div className="signal-header">
        <h3 className="signal-title">Why was this flagged?</h3>
        <div className="signal-score">
          <span className="score-number">91</span>
          <span className="score-label">/ 100</span>
        </div>
      </div>

      <div className="signal-list">
        {signals.map((signal, idx) => (
          <div key={idx} className="signal-item">
            <div className="signal-label-row">
              <span className="signal-name">{signal.name}</span>
              <span className="signal-contribution">+{signal.value}</span>
            </div>
            <div className="signal-bar-wrapper">
              <div
                className="signal-bar"
                style={{ width: `${(signal.value / maxValue) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="signal-explanation">
        Transaction velocity is approximately 4.2× above the recent merchant baseline. The account also shows repeated failed attempts from an inconsistent device.
      </div>

      <div className="signal-actions">
        <button className="signal-action-btn primary">Review transaction</button>
        <button className="signal-action-btn secondary">View audit trail</button>
      </div>
    </div>
  );
}

export default RiskSignalBreakdown;