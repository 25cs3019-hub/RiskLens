import React from 'react';
import { ChevronRight } from 'lucide-react';
import './AlertTable.css';

function AlertTable({ alerts, onRowClick }) {
  const getRiskColor = (risk) => {
    const colors = {
      critical: '#dc2626',
      high: '#d97706',
      medium: '#f59e0b',
      low: '#16a34a'
    };
    return colors[risk] || '#999';
  };

  const getRiskLabel = (risk) => {
    return risk.charAt(0).toUpperCase() + risk.slice(1);
  };

  return (
    <div className="alert-table-wrapper">
      <table className="alert-table">
        <thead>
          <tr>
            <th>Severity</th>
            <th>Event</th>
            <th>Affected</th>
            <th>Exposure</th>
            <th>Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id} onClick={() => onRowClick?.(alert)} className="alert-row">
              <td>
                <div className="risk-badge" style={{ borderLeftColor: getRiskColor(alert.risk) }}>
                  {getRiskLabel(alert.risk)}
                </div>
              </td>
              <td>
                <div className="alert-event">
                  <div className="alert-title">{alert.title}</div>
                  <div className="alert-desc">{alert.description}</div>
                </div>
              </td>
              <td>
                <span className="alert-meta">{alert.affected}</span>
              </td>
              <td>
                <span className="alert-exposure">{alert.exposure}</span>
              </td>
              <td>
                <span className="alert-time">{alert.timestamp}</span>
              </td>
              <td>
                <ChevronRight size={18} className="alert-arrow" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlertTable;