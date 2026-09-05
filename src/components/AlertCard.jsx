import React from 'react';
import RiskBadge from './RiskBadge';
import { ChevronRight, Clock } from 'lucide-react';
import './AlertCard.css';

function AlertCard({ title, description, risk, timestamp, onClick }) {
  return (
    <div className="alert-card" onClick={onClick}>
      <div className="alert-card-header">
        <div className="alert-card-title">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <RiskBadge risk={risk} size="sm" />
      </div>
      <div className="alert-card-footer">
        <div className="alert-card-time">
          <Clock size={14} />
          <span>{timestamp}</span>
        </div>
        <ChevronRight size={18} className="alert-card-arrow" />
      </div>
    </div>
  );
}

export default AlertCard;