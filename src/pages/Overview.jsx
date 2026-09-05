import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, TrendingUp, Shield, DollarSign, Target, Activity } from 'lucide-react';
import StatCard from '../components/StatCard';
import RiskScore from '../components/RiskScore';
import ChartCard from '../components/ChartCard';
import AlertCard from '../components/AlertCard';
import {
  mockMetrics,
  transactionRiskTrendData,
  riskDistributionData,
  recentAlerts,
  auditActivity
} from '../data/mockData';
import './Overview.css';

function Overview() {
  return (
    <div className="overview-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-content">
          <h1>Risk Command Center</h1>
          <p>Monitor transaction risk, investigate anomalies, and keep every decision accountable.</p>
        </div>
      </div>

      {/* Key Metrics */}
      <section className="metrics-grid">
        <StatCard
          label="Risk Health"
          value={`${mockMetrics.riskHealth}`}
          subtext="Overall platform risk score"
          icon={Shield}
          trend="↓ 5% from yesterday"
          trendDirection="positive"
        />
        <StatCard
          label="Transactions Monitored"
          value={mockMetrics.transactionsMonitored}
          subtext="Last 24 hours"
          icon={TrendingUp}
          trend="↑ 12% from last week"
          trendDirection="positive"
        />
        <StatCard
          label="Suspicious Activity"
          value={mockMetrics.suspiciousActivity}
          subtext="Flagged for review"
          icon={AlertCircle}
          trend="↑ 8% anomalies"
          trendDirection="negative"
        />
        <StatCard
          label="Estimated Loss Prevented"
          value={mockMetrics.estimatedLossPrevented}
          subtext="This month"
          icon={DollarSign}
          trend="↑ 23% vs last month"
          trendDirection="positive"
        />
        <StatCard
          label="False Positive Rate"
          value={mockMetrics.falsePositiveRate}
          subtext="Lower is better"
          icon={Target}
          trend="↓ 0.3% improvement"
          trendDirection="positive"
        />
      </section>

      {/* Charts Section */}
      <section className="charts-section">
        <div className="charts-row">
          <ChartCard
            title="Transaction Risk Trend"
            subtitle="7-day moving average of risk scores"
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={transactionRiskTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e8e8e5" />
                <XAxis dataKey="time" stroke="#999" style={{ fontSize: '12px' }} />
                <YAxis stroke="#999" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e8e8e5',
                    borderRadius: '6px'
                  }}
                  cursor={{ stroke: '#e8e8e5' }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="risk"
                  stroke="#5b7da8"
                  strokeWidth={2}
                  dot={{ fill: '#5b7da8', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
          <ChartCard
            title="Risk Distribution"
            subtitle="Transaction breakdown by risk level"
          >
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {riskDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e8e8e5',
                    borderRadius: '6px'
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </section>

      {/* Recent Alerts Section */}
      <section className="section">
        <div className="section-header">
          <h2>Recent Risk Alerts</h2>
          <p>Latest flagged transactions requiring review</p>
        </div>
        <div className="alerts-grid">
          {recentAlerts.map(alert => (
            <AlertCard
              key={alert.id}
              title={alert.title}
              description={alert.description}
              risk={alert.risk}
              timestamp={alert.timestamp}
              onClick={() => console.log('Alert clicked:', alert.id)}
            />
          ))}
        </div>
      </section>

      {/* AI Insight Section */}
      <section className="section">
        <div className="insight-card">
          <div className="insight-header">
            <Activity className="insight-icon" />
            <h3>Explainable AI Insight</h3>
          </div>
          <p className="insight-text">
            Pattern analysis detected a 23% increase in cross-border transactions originating from new merchant accounts. The model attributes this to seasonal e-commerce activity. However, 3 flagged accounts show velocity patterns inconsistent with historical behavior. Recommend manual review of merchants: MER-2024-445, MER-2024-512, MER-2024-689.
          </p>
          <div className="insight-actions">
            <button className="insight-btn">Review Flagged Merchants</button>
            <button className="insight-btn secondary">View Full Analysis</button>
          </div>
        </div>
      </section>

      {/* Audit Activity Section */}
      <section className="section">
        <div className="section-header">
          <h2>Recent Audit Activity</h2>
          <p>System and user actions logged for compliance</p>
        </div>
        <div className="audit-table">
          <table>
            <thead>
              <tr>
                <th>Action</th>
                <th>Description</th>
                <th>User</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {auditActivity.map(activity => (
                <tr key={activity.id}>
                  <td>
                    <span className="audit-action">{activity.action}</span>
                  </td>
                  <td className="audit-description">{activity.description}</td>
                  <td className="audit-user">{activity.user}</td>
                  <td className="audit-timestamp">{activity.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Overview;