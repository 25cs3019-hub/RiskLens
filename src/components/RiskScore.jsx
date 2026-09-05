import React from 'react';
import './RiskScore.css';

function RiskScore({ score, maxScore = 100, label }) {
  const percentage = (score / maxScore) * 100;
  let riskLevel = 'low';
  let statusText = 'Low Risk';

  if (percentage >= 75) {
    riskLevel = 'critical';
    statusText = 'Critical Risk';
  } else if (percentage >= 50) {
    riskLevel = 'high';
    statusText = 'High Risk';
  } else if (percentage >= 25) {
    riskLevel = 'medium';
    statusText = 'Medium Risk';
  }

  return (
    <div className="risk-score">
      <div className="risk-score-meter">
        <svg className="risk-gauge" viewBox="0 0 100 60">
          <path
            className="risk-gauge-background"
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            strokeWidth="6"
          />
          <path
            className={`risk-gauge-fill risk-${riskLevel}`}
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            strokeWidth="6"
            strokeDasharray={`${(percentage / 100) * 251} 251`}
          />
        </svg>
        <div className="risk-score-center">
          <div className="risk-score-number">{score}</div>
        </div>
      </div>
      <div className="risk-score-info">
        {label && <div className="risk-score-label">{label}</div>}
        <div className={`risk-score-status risk-${riskLevel}`}>{statusText}</div>
      </div>
    </div>
  );
}

export default RiskScore;