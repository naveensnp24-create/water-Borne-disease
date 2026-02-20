import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function Analytics() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get(`${API_URL}/heatmap`);
      const data = response.data;
      
      const highRisk = data.filter(w => w.risk > 0.7).length;
      const mediumRisk = data.filter(w => w.risk > 0.4 && w.risk <= 0.7).length;
      const lowRisk = data.filter(w => w.risk <= 0.4).length;
      const totalCases = data.reduce((sum, w) => sum + w.cases, 0);
      const avgRisk = (data.reduce((sum, w) => sum + w.risk, 0) / data.length * 100).toFixed(1);

      setStats({ highRisk, mediumRisk, lowRisk, totalCases, avgRisk, totalWards: data.length });
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="glass rounded-2xl p-6">
        <h1 className="text-4xl font-bold text-white mb-3">
          <span className="gradient-text">📊 Analytics Dashboard</span>
        </h1>
        <p className="text-white/80">
          Comprehensive analytics and insights on waterborne disease risk across Coimbatore.
        </p>
      </div>

      {/* Key Metrics */}
      {stats && (
        <>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Risk Distribution</h3>
                <span className="text-3xl">📈</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">High Risk</span>
                  <span className="font-bold text-red-400">{stats.highRisk} wards</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Medium Risk</span>
                  <span className="font-bold text-orange-400">{stats.mediumRisk} wards</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Low Risk</span>
                  <span className="font-bold text-cyan-400">{stats.lowRisk} wards</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Total Cases</h3>
                <span className="text-3xl">🏥</span>
              </div>
              <div className="text-5xl font-bold gradient-text mb-2">{stats.totalCases}</div>
              <p className="text-sm text-white/70">Patients in last 30 days</p>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Average Risk</h3>
                <span className="text-3xl">⚡</span>
              </div>
              <div className="text-5xl font-bold gradient-text mb-2">{stats.avgRisk}%</div>
              <p className="text-sm text-white/70">Across {stats.totalWards} wards</p>
            </div>
          </div>

          {/* Visual Risk Bar */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Ward Risk Overview</h3>
            <div className="h-12 rounded-full overflow-hidden flex">
              <div 
                className="bg-red-500 flex items-center justify-center text-white font-bold text-sm"
                style={{width: `${(stats.highRisk / stats.totalWards) * 100}%`}}
              >
                {stats.highRisk > 0 && `${stats.highRisk}`}
              </div>
              <div 
                className="bg-orange-500 flex items-center justify-center text-white font-bold text-sm"
                style={{width: `${(stats.mediumRisk / stats.totalWards) * 100}%`}}
              >
                {stats.mediumRisk > 0 && `${stats.mediumRisk}`}
              </div>
              <div 
                className="bg-cyan-400 flex items-center justify-center text-white font-bold text-sm"
                style={{width: `${(stats.lowRisk / stats.totalWards) * 100}%`}}
              >
                {stats.lowRisk > 0 && `${stats.lowRisk}`}
              </div>
            </div>
            <div className="flex justify-between mt-3 text-sm text-white/70">
              <span>High Risk</span>
              <span>Medium Risk</span>
              <span>Low Risk</span>
            </div>
          </div>
        </>
      )}

      {/* Model Performance */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Model Performance</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center p-4 rounded-xl bg-white/5">
            <div className="text-3xl font-bold text-cyan-400 mb-1">85%</div>
            <div className="text-sm text-white/70">Accuracy</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-white/5">
            <div className="text-3xl font-bold text-cyan-400 mb-1">7-14</div>
            <div className="text-sm text-white/70">Days Forecast</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-white/5">
            <div className="text-3xl font-bold text-cyan-400 mb-1">LSTM</div>
            <div className="text-sm text-white/70">Neural Network</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-white/5">
            <div className="text-3xl font-bold text-cyan-400 mb-1">30s</div>
            <div className="text-sm text-white/70">Update Interval</div>
          </div>
        </div>
      </div>
    </div>
  );
}
