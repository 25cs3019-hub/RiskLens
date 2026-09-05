import React from 'react';
import { Clock } from 'lucide-react';
import './AuditTimeline.css';

function AuditTimeline({ activities }) {
  return (
    <div className="audit-timeline">
      {activities.map((activity, idx) => (
        <div key={activity.id} className="timeline-item">
          <div className="timeline-marker">
            <div className="timeline-dot"></div>
            {idx < activities.length - 1 && <div className="timeline-line"></div>}
          </div>
          <div className="timeline-content">
            <div className="timeline-time">
              <Clock size={14} />
              <span>{activity.timestamp}</span>
            </div>
            <div className="timeline-action">{activity.action}</div>
            <div className="timeline-description">{activity.description}</div>
            <div className="timeline-meta">by {activity.user}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AuditTimeline;