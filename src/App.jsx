import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Overview from './pages/Overview';
import Transactions from './pages/Transactions';
import Alerts from './pages/Alerts';
import FraudDetection from './pages/FraudDetection';
import Chargebacks from './pages/Chargebacks';
import ModelPerformance from './pages/ModelPerformance';
import AuditTrail from './pages/AuditTrail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Topbar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/fraud-detection" element={<FraudDetection />} />
              <Route path="/chargebacks" element={<Chargebacks />} />
              <Route path="/model-performance" element={<ModelPerformance />} />
              <Route path="/audit-trail" element={<AuditTrail />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
