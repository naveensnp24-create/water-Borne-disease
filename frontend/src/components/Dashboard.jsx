import { useState } from 'react';
import axios from 'axios';
import Icon from './Icon';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function Dashboard() {
  const [formData, setFormData] = useState({
    ph: '6.2',
    turbidity: '5',
    temp: '27',
    rainfall: '0',
    cases_7d: '0',
    cases_30d: '23'
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/predict`, formData);
      setPrediction(response.data);
    } catch (error) {
      console.error('Prediction failed:', error);
      alert('Prediction failed. Make sure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const loadScenario = (scenario) => {
    const scenarios = {
      high: { ph: '6.2', turbidity: '5.3', temp: '28', rainfall: '85', cases_7d: '23', cases_30d: '78' },
      medium: { ph: '6.5', turbidity: '6.0', temp: '28', rainfall: '45', cases_7d: '12', cases_30d: '45' },
      low: { ph: '7.1', turbidity: '2.1', temp: '27', rainfall: '0', cases_7d: '3', cases_30d: '12' }
    };
    setFormData(scenarios[scenario]);
    setPrediction(null);
  };

  return (
    <div className="space-y-6">
      <div className="glass rounded-sm p-8 shadow-lg" style={{background: '#ffffff', border: '1px solid #d5dbdb'}}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold gradient-text flex items-center gap-3">
              <Icon name="beaker" className="w-10 h-10 text-cyan-400" />
              Outbreak Risk Predictor
            </h2>
            <p className="text-sm mt-2 font-normal" style={{color: '#545b64'}}>Advanced ML-powered disease outbreak forecasting engine</p>
          </div>
        </div>
        
        <div className="mb-6 p-4 rounded-sm" style={{background: '#fff5e6', border: '1px solid #ffd591'}}>
          <h3 className="text-base font-semibold flex items-center gap-2" style={{color: '#ec7211'}}>
            <Icon name="chart" className="w-5 h-5" /> Environmental & Epidemiological Parameters
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="relative">
            <label className="text-xs mb-1 block font-semibold" style={{color: '#545b64'}}>pH Level</label>
            <input
              type="number"
              step="0.1"
              placeholder="6.5 - 8.5"
              value={formData.ph}
              onChange={(e) => setFormData({...formData, ph: e.target.value})}
              className="w-full px-4 py-3 rounded-sm border-2 font-medium"
              style={{background: '#ffffff', borderColor: '#d5dbdb', color: '#16191f'}}
            />
          </div>
          <div className="relative">
            <label className="text-xs mb-1 block font-semibold" style={{color: '#545b64'}}>Turbidity (NTU)</label>
            <input
              type="number"
              step="0.1"
              placeholder="< 5 NTU"
              value={formData.turbidity}
              onChange={(e) => setFormData({...formData, turbidity: e.target.value})}
              className="w-full px-4 py-3 rounded-sm border-2 font-medium"
              style={{background: '#ffffff', borderColor: '#d5dbdb', color: '#16191f'}}
            />
          </div>
          <div className="relative">
            <label className="text-xs mb-1 block font-semibold" style={{color: '#545b64'}}>Temperature (°C)</label>
            <input
              type="number"
              placeholder="25 - 30"
              value={formData.temp}
              onChange={(e) => setFormData({...formData, temp: e.target.value})}
              className="w-full px-4 py-3 rounded-sm border-2 font-medium"
              style={{background: '#ffffff', borderColor: '#d5dbdb', color: '#16191f'}}
            />
          </div>
          <div className="relative">
            <label className="text-xs mb-1 block font-semibold" style={{color: '#545b64'}}>Rainfall (mm)</label>
            <input
              type="number"
              placeholder="0 - 100"
              value={formData.rainfall}
              onChange={(e) => setFormData({...formData, rainfall: e.target.value})}
              className="w-full px-4 py-3 rounded-sm border-2 font-medium"
              style={{background: '#ffffff', borderColor: '#d5dbdb', color: '#16191f'}}
            />
          </div>
          <div className="relative">
            <label className="text-xs mb-1 block font-semibold" style={{color: '#545b64'}}>Patients (7 days)</label>
            <input
              type="number"
              placeholder="Recent cases"
              value={formData.cases_7d}
              onChange={(e) => setFormData({...formData, cases_7d: e.target.value})}
              className="w-full px-4 py-3 rounded-sm border-2 font-medium"
              style={{background: '#ffffff', borderColor: '#d5dbdb', color: '#16191f'}}
              title="Number of infected patients in last 7 days"
            />
          </div>
          <div className="relative">
            <label className="text-xs mb-1 block font-semibold" style={{color: '#545b64'}}>Patients (30 days)</label>
            <input
              type="number"
              placeholder="Monthly trend"
              value={formData.cases_30d}
              onChange={(e) => setFormData({...formData, cases_30d: e.target.value})}
              className="w-full px-4 py-3 rounded-sm border-2 font-medium"
              style={{background: '#ffffff', borderColor: '#d5dbdb', color: '#16191f'}}
              title="Number of infected patients in last 30 days"
            />
          </div>
        </div>

        <div className="mb-4 p-4 rounded-sm" style={{background: '#f5f5f5', border: '1px solid #d5dbdb'}}>
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2" style={{color: '#16191f'}}>
            <Icon name="target" className="w-5 h-5" /> Pre-configured Test Scenarios
          </h3>

        <div className="flex gap-3 flex-wrap">
          <button onClick={() => loadScenario('high')} className="flex-1 min-w-[150px] px-5 py-3 rounded-sm text-sm font-bold border-2 transition-all" style={{background: '#fff0f0', borderColor: '#d13212', color: '#d13212'}}>
            <div className="flex items-center justify-center gap-2">
              <Icon name="danger" className="w-6 h-6" />
              <div className="text-left">
                <div>High Risk</div>
                <div className="text-xs font-normal" style={{opacity: 0.7}}>Critical Outbreak</div>
              </div>
            </div>
          </button>
          <button onClick={() => loadScenario('medium')} className="flex-1 min-w-[150px] px-5 py-3 rounded-sm text-sm font-bold border-2 transition-all" style={{background: '#fff8e6', borderColor: '#ff9900', color: '#ff9900'}}>
            <div className="flex items-center justify-center gap-2">
              <Icon name="warning" className="w-6 h-6" />
              <div className="text-left">
                <div>Medium Risk</div>
                <div className="text-xs font-normal" style={{opacity: 0.7}}>Moderate Alert</div>
              </div>
            </div>
          </button>
          <button onClick={() => loadScenario('low')} className="flex-1 min-w-[150px] px-5 py-3 rounded-sm text-sm font-bold border-2 transition-all" style={{background: '#e6f7ff', borderColor: '#0972d3', color: '#0972d3'}}>
            <div className="flex items-center justify-center gap-2">
              <Icon name="success" className="w-6 h-6" />
              <div className="text-left">
                <div>Low Risk</div>
                <div className="text-xs font-normal" style={{opacity: 0.7}}>Safe Conditions</div>
              </div>
            </div>
          </button>
        </div>
        </div>

        <button
          onClick={handlePredict}
          disabled={loading}
          className="w-full py-5 rounded-sm font-bold text-xl transition disabled:opacity-50 shadow-lg flex items-center justify-center gap-3"
          style={{background: 'linear-gradient(90deg, #ff9900 0%, #ec7211 100%)', color: '#ffffff', border: 'none'}}
        >
          {loading ? (
            <>
              <Icon name="loading" className="w-6 h-6" />
              Analyzing Data...
            </>
          ) : (
            <>
              <Icon name="rocket" className="w-6 h-6" />
              Generate Risk Prediction
            </>
          )}
        </button>

        {prediction && (
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold" style={{color: '#16191f'}}>Prediction Results</h3>
              <span className="text-xs font-medium" style={{color: '#687078'}}>Generated by LSTM Model</span>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="rounded-sm p-6 text-center border-2 shadow-lg" style={{background: '#ffffff', borderColor: '#d5dbdb'}}>
                <div className="text-5xl font-extrabold gradient-text mb-2">{Math.round(prediction.risk * 100)}%</div>
                <div className="text-sm font-semibold mb-3" style={{color: '#545b64'}}>Outbreak Risk Score</div>
                <div className="h-3 rounded-full overflow-hidden" style={{background: '#eaeded'}}>
                  <div className="h-full rounded-full transition-all duration-1000" style={{background: 'linear-gradient(90deg, #ff9900 0%, #ec7211 100%)', width: `${prediction.risk * 100}%`}}></div>
                </div>
              </div>
              <div className="rounded-sm p-6 text-center border-2 shadow-lg" style={{background: '#ffffff', borderColor: '#d5dbdb'}}>
                <div className="text-5xl font-extrabold gradient-text mb-2">{prediction.days}</div>
                <div className="text-sm font-semibold mb-3" style={{color: '#545b64'}}>Days to Outbreak</div>
                <div className="text-xs mt-2 px-3 py-1 rounded-full inline-block" style={{background: '#eaeded', color: '#687078'}}>⏰ Estimated Timeline</div>
              </div>
              <div className={`rounded-sm p-6 text-center border-3 shadow-lg`} style={{
                background: prediction.alert === 'HIGH' ? '#fff0f0' : prediction.alert === 'MEDIUM' ? '#fff8e6' : '#e6f7ff',
                border: `3px solid ${prediction.alert === 'HIGH' ? '#d13212' : prediction.alert === 'MEDIUM' ? '#ff9900' : '#0972d3'}`,
                color: prediction.alert === 'HIGH' ? '#d13212' : prediction.alert === 'MEDIUM' ? '#ff9900' : '#0972d3'
              }}>
                <div className="text-5xl font-extrabold mb-2">{prediction.alert}</div>
                <div className="text-sm font-semibold mb-3">Alert Level</div>
                <div className="flex justify-center">
                  {prediction.alert === 'HIGH' ? (
                    <Icon name="danger" className="w-12 h-12" />
                  ) : prediction.alert === 'MEDIUM' ? (
                    <Icon name="warning" className="w-12 h-12" />
                  ) : (
                    <Icon name="success" className="w-12 h-12" />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Information Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-sm p-6 shadow-lg" style={{background: '#ffffff', border: '1px solid #d5dbdb'}}>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{color: '#16191f'}}>
            <Icon name="droplet" className="w-7 h-7 text-cyan-500" /> Water Quality Standards
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center py-3 border-b" style={{borderColor: '#d5dbdb'}}>
              <span className="font-medium" style={{color: '#545b64'}}>Safe pH Range:</span>
              <span className="font-bold text-base" style={{color: '#ff9900'}}>6.5 - 8.5</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b" style={{borderColor: '#d5dbdb'}}>
              <span className="font-medium" style={{color: '#545b64'}}>Max Turbidity:</span>
              <span className="font-bold text-base" style={{color: '#ff9900'}}>&lt; 5 NTU</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b" style={{borderColor: '#d5dbdb'}}>
              <span className="font-medium" style={{color: '#545b64'}}>Ideal Temperature:</span>
              <span className="font-bold text-base" style={{color: '#ff9900'}}>25-30°C</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="font-medium" style={{color: '#545b64'}}>Critical Risk Threshold:</span>
              <span className="font-bold text-base" style={{color: '#d13212'}}>&gt; 70%</span>
            </div>
          </div>
        </div>

        <div className="glass rounded-sm p-6 shadow-lg" style={{background: '#ffffff', border: '1px solid #d5dbdb'}}>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{color: '#16191f'}}>
            <Icon name="virus" className="w-7 h-7 text-red-500" /> Monitored Diseases
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 py-3 border-b" style={{borderColor: '#d5dbdb'}}>
              <Icon name="danger" className="w-8 h-8 text-red-500" />
              <div className="flex-1">
                <div className="font-bold text-base" style={{color: '#16191f'}}>Typhoid Fever</div>
                <div className="text-xs mt-1" style={{color: '#687078'}}>Triggered by: Low pH + High Turbidity</div>
              </div>
            </div>
            <div className="flex items-center gap-3 py-3 border-b" style={{borderColor: '#d5dbdb'}}>
              <Icon name="droplet" className="w-8 h-8 text-blue-500" />
              <div className="flex-1">
                <div className="font-bold text-base" style={{color: '#16191f'}}>Cholera</div>
                <div className="text-xs mt-1" style={{color: '#687078'}}>Triggered by: Very High Turbidity (&gt;7 NTU)</div>
              </div>
            </div>
            <div className="flex items-center gap-3 py-3 border-b" style={{borderColor: '#d5dbdb'}}>
              <Icon name="warning" className="w-8 h-8 text-yellow-500" />
              <div className="flex-1">
                <div className="font-bold text-base" style={{color: '#16191f'}}>Dysentery</div>
                <div className="text-xs mt-1" style={{color: '#687078'}}>Triggered by: Very Low pH (&lt;6.0)</div>
              </div>
            </div>
            <div className="flex items-center gap-3 py-3">
              <Icon name="bacteria" className="w-8 h-8 text-green-500" />
              <div className="flex-1">
                <div className="font-bold text-base" style={{color: '#16191f'}}>Gastroenteritis</div>
                <div className="text-xs mt-1" style={{color: '#687078'}}>Triggered by: Moderate Turbidity (5-7 NTU)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
