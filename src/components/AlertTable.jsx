import React from 'react';
import './AlertTable.css';

function AlertTable() {
  const alerts = [
    {
      id: 1,
      severity: 'critical',
      event: 'Velocity spike',
      affected: '42 txns',
      exposure: '₹82,400',
      time: '3m',
      status: 'review'
    },
    {
      id: 2,
      severity: 'high',
      event: 'Device anomaly',
      affected: '18 txns',
      exposure: '₹31,200',
      time: '8m',
      status: 'open'
    },
    {
      id: 3,
      severity: 'medium',
      event: 'Amount deviation',
      affected: '5 txns',
      exposure: '₹14,800',
      time: '24m',
      status: 'monitoring'
    }
  ];

  const severityColor = {
    critical: '#dc2626',
    high: '#d97706',
    medium: '#f59e0b',
    low: '#22c55e'
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
          </tr>
        </thead>
        <tbody>
          {alerts.map(alert => (
            <tr key={alert.id} className="alert-row">
              <td>
                <div
                  className="severity-badge"
                  style={{ borderLeftColor: severityColor[alert.severity] }}
                >
                  {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                </div>
              </td>
              <td>{alert.event}</td>
              <td className="text-meta">{alert.affected}</td>
              <td className="text-strong">{alert.exposure}</td>
              <td className="text-meta">{alert.time} ago</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlertTable;