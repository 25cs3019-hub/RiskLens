import React from 'react';
import { Clock } from 'lucide-react';
import './AuditTimeline.css';

function AuditTimeline() {
  const activities = [
    {
      id: 1,
      time: '16:42',
      action: 'TXN-839201 reviewed',
      description: 'Risk assessment completed',
      user: 'analyst@risklens.io'
    },
    {
      id: 2,
      time: '16:31',
      action: 'Alert escalated',
      description: 'Moved to high priority queue',
      user: 'system'
    },
    {
      id: 3,
      time: '16:18',
      action: 'Model v2.3 evaluated',
      description: 'Risk score calculated: 91/100',
      user: 'system'
    },
    {
      id: 4,
      time: '15:52',
      action: 'Evidence summary prepared',
      description: 'Decision log recorded',
      user: 'system'
    }
  ];

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
              <Clock size={13} />
              {activity.time}
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