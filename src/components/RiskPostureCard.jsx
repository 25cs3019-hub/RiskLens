import React from 'react';
import './RiskPostureCard.css';

function RiskPostureCard() {
  const score = 28;
  const trend = -5;
  const level = score < 30 ? 'low' : score < 50 ? 'medium' : score < 75 ? 'high' : 'critical';
  const levelText = score < 30 ? 'Low Exposure' : score < 50 ? 'Moderate Exposure' : score < 75 ? 'High Exposure' : 'Critical Exposure';

  return (
    <div className={`risk-posture-card risk-${level}`}>
      <div className="risk-posture-content">
        <div className="risk-posture-left">
          <div className="risk-eyebrow">RISK POSTURE</div>
          <div className="risk-score-display">
            <div className="risk-score-number">{score}</div>
            <div className="risk-level-text">{levelText}</div>
          </div>
          <div className="risk-trend">↓ {Math.abs(trend)}% from yesterday</div>
          <div className="risk-breakdown">
            <div className="breakdown-item">
              <span className="breakdown-value">127</span>
              <span className="breakdown-label">flagged</span>
            </div>
            <div className="breakdown-item">
              <span className="breakdown-value">₹4.2Cr</span>
              <span className="breakdown-label">prevented</span>
            </div>
            <div className="breakdown-item">
              <span className="breakdown-value">97.9%</span>
              <span className="breakdown-label">accuracy</span>
            </div>
          </div>
        </div>
        <div className="risk-posture-visual">
          <svg viewBox="0 0 120 120" className="risk-gauge">
            <defs>
              <linearGradient id="riskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4a5f7a" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#4a5f7a" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="55" fill="url(#riskGrad)" />
            <circle cx="60" cy="60" r="50" fill="none" stroke="#e1ddd3" strokeWidth="2" opacity="0.5" />
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#4a5f7a"
              strokeWidth="3"
              strokeDasharray={`${(score / 100) * 314.16} 314.16`}
              strokeLinecap="round"
              transform="rotate(-90 60 60)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default RiskPostureCard;