export const mockMetrics = {
  riskHealth: 28,
  transactionsMonitored: '2.45M',
  suspiciousActivity: 127,
  estimatedLossPrevented: '₹4.2Cr',
  falsePositiveRate: '2.1%'
};

export const transactionRiskTrendData = [
  { time: 'Mon', risk: 34, transactions: 2400 },
  { time: 'Tue', risk: 42, transactions: 2210 },
  { time: 'Wed', risk: 28, transactions: 2290 },
  { time: 'Thu', risk: 51, transactions: 2000 },
  { time: 'Fri', risk: 35, transactions: 2181 },
  { time: 'Sat', risk: 22, transactions: 2500 },
  { time: 'Sun', risk: 38, transactions: 2100 }
];

export const riskDistributionData = [
  { name: 'Low Risk', value: 1880, color: '#16a34a' },
  { name: 'Medium Risk', value: 390, color: '#f59e0b' },
  { name: 'High Risk', value: 120, color: '#d97706' },
  { name: 'Critical Risk', value: 60, color: '#dc2626' }
];

export const recentAlerts = [
  {
    id: 1,
    title: 'Unusual Transaction Pattern',
    description: 'Account TXN-2024-001 shows 5 large transactions from new location',
    risk: 'high',
    timestamp: '2 minutes ago'
  },
  {
    id: 2,
    title: 'Velocity Breach',
    description: 'User exceeded daily transaction limit in 30 minutes',
    risk: 'medium',
    timestamp: '15 minutes ago'
  },
  {
    id: 3,
    title: 'Chargeback Filed',
    description: 'Transaction MER-2024-556 disputed by customer',
    risk: 'high',
    timestamp: '32 minutes ago'
  },
  {
    id: 4,
    title: 'Device Fingerprint Mismatch',
    description: 'Login attempt from unrecognized device detected',
    risk: 'medium',
    timestamp: '1 hour ago'
  }
];

export const auditActivity = [
  {
    id: 1,
    action: 'Rule Updated',
    description: 'Velocity check threshold changed from 50K to 75K INR',
    user: 'admin@risklens.io',
    timestamp: '3 hours ago',
    status: 'completed'
  },
  {
    id: 2,
    action: 'Model Retrained',
    description: 'Fraud detection model v2.3 deployed with 94.2% accuracy',
    user: 'system',
    timestamp: '6 hours ago',
    status: 'completed'
  },
  {
    id: 3,
    action: 'Access Granted',
    description: 'New analyst user onboarded to alerts dashboard',
    user: 'ops-manager@risklens.io',
    timestamp: '1 day ago',
    status: 'completed'
  },
  {
    id: 4,
    action: 'Data Export',
    description: 'Q1 risk report exported for stakeholder review',
    user: 'finance@risklens.io',
    timestamp: '2 days ago',
    status: 'completed'
  }
];