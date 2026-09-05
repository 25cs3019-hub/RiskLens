import React from 'react';
import { TrendingDown } from 'lucide-react';
import './RiskPostureCard.css';

function RiskPostureCard({ score = 28, trend = -5, metrics }) {
  const getRiskLevel = (score) => {
    if (score < 30) return 'low';
    if (score < 50) return 'medium';
    if (score < 75) return 'high';
    return 'critical';
  };

  const getRiskLabel = (score) => {
    if (score < 30) return 'Low Exposure';
    if (score < 50) return 'Moderate Exposure';
    if (score < 75) return 'High Exposure';
    return 'Critical Exposure';
  };

  const level = getRiskLevel(score);
  const label = getRiskLabel(score);

  return (
    <div className={`risk-posture-card risk-level-${level}`}>
      <div className="risk-posture-main">
        <div className="risk-posture-header">
          <span className="risk-eyebrow">RISK POSTURE</span>
          <div className="risk-trend">
            {trend < 0 ? (
              <>
                <TrendingDown size={14} />
                <span>{Math.abs(trend)}% safer</span>
              </>
            ) : (
              <>
                <span>{trend}% increase</span>
              </>
            )}
          </div>
        </div>

        <div className="risk-posture-score">
          <div className="risk-score-number">{score}</div>
          <div className="risk-score-label">{label}</div>
        </div>

        <div className="risk-posture-metrics">
          <div className="mini-metric">
            <div className="mini-metric-value">{metrics.flagged}</div>
            <div className="mini-metric-label">flagged</div>
          </div>
          <div className="mini-metric">
            <div className="mini-metric-value">{metrics.prevented}</div>
            <div className="mini-metric-label">prevented</div>
          </div>
          <div className="mini-metric">
            <div className="mini-metric-value">{metrics.accuracy}</div>
            <div className="mini-metric-label">accuracy</div>
          </div>
        </div>
      </div>
      <div className="risk-posture-visual">
        <svg viewBox="0 0 100 120" className="risk-gauge-bg">
          <path d="M 10 100 Q 50 20, 90 100" stroke="#e5dfd6" strokeWidth="8" fill="none" />
        </svg>
        <svg viewBox="0 0 100 120" className={`risk-gauge-fill risk-${level}`}>
          <path
            d="M 10 100 Q 50 20, 90 100"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            pathLength="100"
            style={{
              strokeDasharray: `${(score / 100) * 100} 100`
            }}
          />
        </svg>
      </div>
    </div>
  );
}

export default RiskPostureCard;