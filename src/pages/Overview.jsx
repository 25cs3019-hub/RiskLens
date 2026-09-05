import React, { useState } from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { TrendingUp, AlertCircle, DollarSign, Target, BarChart3 } from 'lucide-react';
import RiskPostureCard from '../components/RiskPostureCard';
import MetricStrip from '../components/MetricStrip';
import ChartCard from '../components/ChartCard';
import RiskSignalBreakdown from '../components/RiskSignalBreakdown';
import AlertTable from '../components/AlertTable';
import AuditTimeline from '../components/AuditTimeline';
import { mockMetrics, transactionRiskTrendData, recentAlerts, auditActivity } from '../data/mockData';
import './Overview.css';

function Overview() {
  const [timeRange, setTimeRange] = useState('24h');

  const riskSignals = [
    { name: 'Velocity anomaly', value: 32 },
    { name: 'Repeated attempts', value: 24 },
    { name: 'Device mismatch', value: 18 },
    { name: 'Amount deviation', value: 10 }
  ];

  const alertsForTable = [
    {
      id: 1,
      title: 'Unusual Transaction Pattern',
      description: 'Account TXN-2024-001 shows 5 large transactions',
      risk: 'critical',
      affected: '42 txns',
      exposure: '₹82,400',
      timestamp: '3m ago'
    },
    {
      id: 2,
      title: 'Velocity Breach',
      description: 'User exceeded daily transaction limit',
      risk: 'high',
      affected: '18 txns',
      exposure: '₹34,200',
      timestamp: '15m ago'
    },
    {
      id: 3,
      title: 'Device Fingerprint Mismatch',
      description: 'Login attempt from unrecognized device',
      risk: 'medium',
      affected: '1 txn',
      exposure: '₹8,900',
      timestamp: '32m ago'
    },
    {
      id: 4,
      title: 'Chargeback Filed',
      description: 'Transaction MER-2024-556 disputed',
      risk: 'high',
      affected: '1 txn',
      exposure: '₹12,500',
      timestamp: '1h ago'
    }
  ];

  return (
    <div className="overview-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-left">
          <span className="page-eyebrow">RISK INTELLIGENCE</span>
          <h1 className="page-title">Risk Command Center</h1>
          <p className="page-subtitle">
            Understand what changed, why it matters, and where your attention is needed.
          </p>
        </div>
        <div className="page-header-right">
          <div className="time-selector">
            <button
              className={`time-btn ${timeRange === '24h' ? 'active' : ''}`}
              onClick={() => setTimeRange('24h')}
            >
              Last 24h
            </button>
            <button
              className={`time-btn ${timeRange === '7d' ? 'active' : ''}`}
              onClick={() => setTimeRange('7d')}
            >
              7 days
            </button>
          </div>
          <div className="demo-pill">Demo data</div>
        </div>
      </div>

      {/* Primary Risk Posture Card */}
      <section className="section-primary">
        <RiskPostureCard
          score={28}
          trend={-5}
          metrics={{
            flagged: '127',
            prevented: '₹4.2Cr',
            accuracy: '97.9%'
          }}
        />
      </section>

      {/* Secondary Metrics */}
      <section className="section-metrics">
        <div className="metrics-layout">
          <MetricStrip
            value={mockMetrics.transactionsMonitored}
            label="Transactions Monitored"
            secondary="Last 24 hours"
            icon={TrendingUp}
            trend="↑ 12%"
            trendType="positive"
          />
          <MetricStrip
            value={mockMetrics.suspiciousActivity}
            label="Suspicious Activity"
            secondary="Flagged for review"
            icon={AlertCircle}
            trend="↑ 8%"
            trendType="negative"
          />
          <MetricStrip
            value={mockMetrics.falsePositiveRate}
            label="False Positive Rate"
            secondary="Lower is better"
            icon={Target}
            trend="↓ 0.3%"
            trendType="positive"
          />
        </div>
      </section>

      {/* Main Chart */}
      <section className="section">
        <ChartCard
          eyebrow="ANALYSIS"
          title="Transaction Risk Trend"
          subtitle="Risk movement across the last 7 days"
          action={
            <div className="chart-selector">
              <button className="chart-btn active">7D</button>
              <button className="chart-btn">30D</button>
            </div>
          }
        >
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={transactionRiskTrendData}>
              <defs>
                <linearGradient id="riskGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5b7da8" stopOpacity={0.1} />
                  <stop offset="100%" stopColor="#5b7da8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5dfd6" vertical={false} />
              <XAxis dataKey="time" stroke="#a89c8f" style={{ fontSize: '12px' }} />
              <YAxis stroke="#a89c8f" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5dfd6',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }}
                cursor={{ stroke: '#5b7da8', strokeWidth: 1 }}
              />
              <Line
                type="monotone"
                dataKey="risk"
                stroke="#5b7da8"
                strokeWidth={2.5}
                dot={false}
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="chart-annotation">Risk spike detected · Tue 14:20</div>
        </ChartCard>
      </section>

      {/* Risk Signal Breakdown */}
      <section className="section">
        <RiskSignalBreakdown
          score={91}
          signals={riskSignals}
          explanation="Transaction velocity is approximately 4.2× above the recent merchant baseline. The account also shows repeated failed attempts from an inconsistent device."
        />
      </section>

      {/* Alerts Table */}
      <section className="section">
        <div className="section-header">
          <span className="section-eyebrow">ACTIVE THREATS</span>
          <h2 className="section-title">Recent Risk Alerts</h2>
        </div>
        <AlertTable
          alerts={alertsForTable}
          onRowClick={(alert) => console.log('Alert clicked:', alert)}
        />
      </section>

      {/* Audit Timeline */}
      <section className="section">
        <div className="section-header">
          <span className="section-eyebrow">COMPLIANCE</span>
          <h2 className="section-title">Recent Audit Activity</h2>
        </div>
        <AuditTimeline activities={auditActivity} />
      </section>
    </div>
  );
}

export default Overview;