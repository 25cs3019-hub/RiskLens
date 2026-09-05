import React, { useState } from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import SectionEyebrow from '../components/SectionEyebrow';
import RiskPostureCard from '../components/RiskPostureCard';
import MetricBlock from '../components/MetricBlock';
import ChartCard from '../components/ChartCard';
import RiskSignalBreakdown from '../components/RiskSignalBreakdown';
import AlertTable from '../components/AlertTable';
import AuditTimeline from '../components/AuditTimeline';
import { mockMetrics, transactionRiskTrendData } from '../data/mockData';
import './Overview.css';

function Overview() {
  const [timeRange, setTimeRange] = useState('7d');

  const severityDistribution = [
    { level: 'Low', percentage: 82.4, color: '#22c55e' },
    { level: 'Medium', percentage: 11.8, color: '#f59e0b' },
    { level: 'High', percentage: 4.3, color: '#d97706' },
    { level: 'Critical', percentage: 1.5, color: '#dc2626' }
  ];

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="page-content">
          <div className="overview-container">
            {/* Page Header */}
            <div className="page-header">
              <div className="page-header-content">
                <SectionEyebrow label="Risk Intelligence / Overview" />
                <h1 className="page-heading">Risk command center</h1>
                <p className="page-subtitle">
                  Understand what changed, why it matters, and where your attention is needed.
                </p>
              </div>
              <div className="page-header-controls">
                <div className="time-filter">
                  <button
                    className={`filter-btn ${timeRange === '24h' ? 'active' : ''}`}
                    onClick={() => setTimeRange('24h')}
                  >
                    Last 24h
                  </button>
                  <button
                    className={`filter-btn ${timeRange === '7d' ? 'active' : ''}`}
                    onClick={() => setTimeRange('7d')}
                  >
                    7 days
                  </button>
                </div>
                <div className="page-status">
                  <div className="status-item">
                    <span className="status-label">Updated</span>
                    <span className="status-value">2 min ago</span>
                  </div>
                  <div className="status-divider"></div>
                  <div className="status-item demo">
                    <span>● Demo data</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Risk Posture */}
            <section className="section primary-section">
              <RiskPostureCard />
            </section>

            {/* Secondary Metrics */}
            <section className="section metrics-section">
              <div className="metrics-grid">
                <MetricBlock
                  label="Transactions Monitored"
                  value="2.45M"
                  secondary="Last 24 hours"
                  trend="↑ 12% this week"
                  trendType="positive"
                />
                <MetricBlock
                  label="Suspicious Activity"
                  value="127"
                  secondary="Flagged for review"
                  trend="↑ 8% anomalies"
                  trendType="negative"
                />
                <MetricBlock
                  label="Loss Prevented"
                  value="₹4.2Cr"
                  secondary="Estimated impact"
                  trend="↑ 23% this month"
                  trendType="positive"
                />
                <MetricBlock
                  label="False Positives"
                  value="2.1%"
                  secondary="Lower is better"
                  trend="↓ 0.3% improved"
                  trendType="positive"
                />
              </div>
            </section>

            {/* Transaction Risk Trend */}
            <section className="section">
              <ChartCard
                eyebrow="ANALYSIS"
                title="Transaction Risk Trend"
                subtitle="Risk movement across the last 7 days"
                action={
                  <div className="chart-controls">
                    <button className="chart-control-btn active">7D</button>
                    <button className="chart-control-btn">30D</button>
                  </div>
                }
              >
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={transactionRiskTrendData}>
                    <defs>
                      <linearGradient id="riskGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4a5f7a" stopOpacity={0.08} />
                        <stop offset="100%" stopColor="#4a5f7a" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e1ddd3" vertical={false} />
                    <XAxis dataKey="time" stroke="#9b9390" style={{ fontSize: '11px' }} />
                    <YAxis stroke="#9b9390" style={{ fontSize: '11px' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #e1ddd3',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                        fontSize: '12px'
                      }}
                      cursor={{ stroke: '#4a5f7a', strokeWidth: 1 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="risk"
                      stroke="#4a5f7a"
                      strokeWidth={2}
                      dot={false}
                      fill="url(#riskGradient)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartCard>
              <div className="chart-annotation">Risk spike detected · Tue 14:20</div>
            </section>

            {/* Risk Distribution */}
            <section className="section">
              <SectionEyebrow label="Risk Distribution" />
              <div className="risk-distribution">
                {severityDistribution.map((item, idx) => (
                  <div key={idx} className="distribution-item">
                    <div className="distribution-info">
                      <span className="distribution-level">{item.level}</span>
                      <span className="distribution-percentage">{item.percentage}%</span>
                    </div>
                    <div className="distribution-bar-wrapper">
                      <div
                        className="distribution-bar"
                        style={{
                          width: `${item.percentage}%`,
                          backgroundColor: item.color
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Explainable AI */}
            <section className="section">
              <RiskSignalBreakdown />
            </section>

            {/* Recent Alerts */}
            <section className="section">
              <SectionEyebrow label="Active Threats" />
              <h2 className="section-heading">Recent Risk Alerts</h2>
              <AlertTable />
            </section>

            {/* Audit Trail */}
            <section className="section">
              <SectionEyebrow label="Compliance" />
              <h2 className="section-heading">Audit Activity</h2>
              <AuditTimeline />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;