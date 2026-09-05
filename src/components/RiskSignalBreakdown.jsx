import React from 'react';
import './RiskSignalBreakdown.css';

function RiskSignalBreakdown({ score = 91, signals, explanation }) {
  const maxSignal = Math.max(...signals.map(s => s.value));

  return (
    <div className="risk-signal-breakdown">
      <div className="signal-header">
        <span className="signal-eyebrow">WHY WAS THIS FLAGGED?</span>
        <div className="signal-score">
          <div className="signal-score-number">{score}</div>
          <div className="signal-score-label">/ 100</div>
        </div>
      </div>

      <div className="signal-list">
        {signals.map((signal, idx) => (
          <div key={idx} className="signal-item">
            <div className="signal-item-label">
              <span className="signal-name">{signal.name}</span>
              <span className="signal-value">+{signal.value}</span>
            </div>
            <div className="signal-bar-container">
              <div
                className="signal-bar"
                style={{
                  width: `${(signal.value / maxSignal) * 100}%`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="signal-explanation">
        <p>{explanation}</p>
      </div>

      <div className="signal-actions">
        <button className="signal-action-btn primary">View Transaction</button>
        <button className="signal-action-btn secondary">Review Decision</button>
      </div>
    </div>
  );
}

export default RiskSignalBreakdown;