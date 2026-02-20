import { useEffect, useState } from 'react';
import axios from 'axios';
import Icon from './Icon';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAlerts();
    const interval = setInterval(fetchAlerts, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchAlerts = async () => {
    try {
      const response = await axios.get(`${API_URL}/alerts`);
      setAlerts(response.data);
    } catch (error) {
      console.error('Failed to fetch alerts:', error);
    } finally {
      setLoading(false);
    }
  };

  const getDiseaseIcon = (disease) => {
    const iconMap = {
      'Typhoid': 'virus',
      'Cholera': 'droplet',
      'Dysentery': 'danger',
      'Gastroenteritis': 'warning'
    };
    return iconMap[disease] || 'alert';
  };

  return (
    <div className="glass rounded-sm p-8 shadow-lg" style={{background: '#ffffff', border: '1px solid #d5dbdb'}}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold gradient-text flex items-center gap-3">
            <Icon name="alert" className="w-10 h-10 text-cyan-400 float-animation" />
            AI-Generated Alerts
          </h2>
          <p className="text-sm mt-2" style={{color: '#545b64'}}>Real-time disease outbreak notifications powered by GenAI</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-sm alert-badge" style={{background: '#e6f7e6', border: '1px solid #1d8102'}}>
          <span className="w-2 h-2 rounded-full status-pulse" style={{background: '#1d8102'}}></span>
          <span className="text-xs font-bold" style={{color: '#1d8102'}}>LIVE</span>
        </div>
      </div>
      
      {loading ? (
        <div className="text-center py-12">
          <Icon name="loading" className="w-12 h-12 mx-auto mb-3 text-cyan-500" />
          <div className="font-medium" style={{color: '#545b64'}}>Loading real-time alerts...</div>
        </div>
      ) : alerts.length === 0 ? (
        <div className="text-center py-12 rounded-sm" style={{background: '#e6f7e6', border: '1px solid #1d8102'}}>
          <Icon name="success" className="w-16 h-16 mx-auto mb-3 text-green-600" />
          <div className="font-bold text-lg mb-2" style={{color: '#1d8102'}}>All Clear</div>
          <div className="text-sm" style={{color: '#545b64'}}>No high-risk alerts detected at this time</div>
        </div>
      ) : (
        <div className="space-y-4">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className="p-5 rounded-sm border-l-4 shadow-md transition-all hover:shadow-lg info-card"
              style={{
                background: alert.severity === 'CRITICAL' ? '#fff0f0' : '#fff8e6',
                borderLeftColor: alert.severity === 'CRITICAL' ? '#d13212' : '#ff9900',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon 
                      name={getDiseaseIcon(alert.disease)} 
                      className="w-8 h-8 disease-icon" 
                      style={{color: alert.severity === 'CRITICAL' ? '#d13212' : '#ff9900'}}
                    />
                    <span className="font-bold text-lg" style={{color: '#16191f'}}>{alert.ward}</span>
                    <span className={`px-3 py-1 rounded-sm text-xs font-extrabold shadow-sm ${alert.severity === 'CRITICAL' ? 'risk-badge-high' : ''}`} style={{
                      background: alert.severity === 'CRITICAL' ? '#d13212' : '#ff9900',
                      color: '#ffffff'
                    }}>
                      {alert.severity}
                    </span>
                  </div>
                  <div className="text-base font-bold mb-2 flex items-center gap-2" style={{color: alert.severity === 'CRITICAL' ? '#d13212' : '#ff9900'}}>
                    <Icon name="virus" className="w-5 h-5 disease-icon" /> {alert.disease}
                  </div>
                  <p className="text-sm leading-relaxed mb-3 font-medium" style={{color: '#16191f'}}>{alert.message}</p>
                  <div className="flex items-center gap-4 text-xs" style={{color: '#687078'}}>
                    <span className="flex items-center gap-1">
                      <Icon name="calendar" className="w-4 h-4" />
                      {new Date(alert.timestamp).toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="ml-6 text-center">
                  <div className="text-5xl font-extrabold gradient-text stat-counter">{alert.risk}%</div>
                  <div className="text-xs mt-1 font-medium" style={{color: '#687078'}}>Risk Level</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
