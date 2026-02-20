export default function About() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="glass rounded-2xl p-6">
        <h1 className="text-4xl font-bold text-white mb-3">
          <span className="gradient-text">ℹ️ About the System</span>
        </h1>
        <p className="text-white/80">
          Learn about our AI-powered waterborne disease prediction system and how it protects public health.
        </p>
      </div>

      {/* Mission */}
      <div className="glass rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
        <p className="text-white/80 leading-relaxed mb-4">
          To leverage artificial intelligence and real-time data analytics to predict waterborne disease 
          outbreaks before they occur, enabling proactive public health interventions and saving lives 
          across Coimbatore's 2+ million citizens.
        </p>
      </div>

      {/* How It Works */}
      <div className="glass rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl bg-white/5">
            <div className="text-4xl mb-3">🔬</div>
            <h3 className="text-lg font-bold text-white mb-2">Data Collection</h3>
            <p className="text-sm text-white/70">
              Continuous monitoring of water quality parameters (pH, turbidity, temperature) and 
              epidemiological data (patient cases) across all 20 wards.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/5">
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="text-lg font-bold text-white mb-2">LSTM Analysis</h3>
            <p className="text-sm text-white/70">
              Long Short-Term Memory neural network analyzes historical patterns and current conditions 
              to predict outbreak probability with 85%+ accuracy.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/5">
            <div className="text-4xl mb-3">🚨</div>
            <h3 className="text-lg font-bold text-white mb-2">Early Warnings</h3>
            <p className="text-sm text-white/70">
              GenAI-powered alerts provide 7-14 day advance warning with natural language explanations 
              of risk factors and recommended actions.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/5">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-lg font-bold text-white mb-2">Targeted Response</h3>
            <p className="text-sm text-white/70">
              Health authorities can deploy resources proactively to high-risk areas, preventing 
              outbreaks before they spread.
            </p>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="glass rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Technology Stack</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
            <h3 className="font-bold text-white mb-2">Frontend</h3>
            <ul className="text-sm text-white/70 space-y-1">
              <li>• React + Vite</li>
              <li>• Tailwind CSS</li>
              <li>• Leaflet.js Maps</li>
              <li>• React Router</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
            <h3 className="font-bold text-white mb-2">Backend</h3>
            <ul className="text-sm text-white/70 space-y-1">
              <li>• Node.js + Express</li>
              <li>• LSTM Model</li>
              <li>• RESTful API</li>
              <li>• Real-time Processing</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
            <h3 className="font-bold text-white mb-2">AI/ML</h3>
            <ul className="text-sm text-white/70 space-y-1">
              <li>• LSTM Neural Network</li>
              <li>• GenAI Insights</li>
              <li>• Time-series Analysis</li>
              <li>• Predictive Analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Impact */}
      <div className="glass rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Impact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold text-cyan-400 mb-3">Public Health Benefits</h3>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Early detection prevents outbreak spread</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Reduced mortality and morbidity rates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Proactive resource allocation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Data-driven policy decisions</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-cyan-400 mb-3">Operational Benefits</h3>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Cost reduction through prevention</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Efficient medical team deployment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>24/7 automated monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Scalable to other cities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="glass rounded-2xl p-6 text-center">
        <p className="text-white/70 text-sm">
          Built for GenAI Hackathon 2024 • Protecting 2M+ citizens • 85%+ accuracy • 24/7 monitoring
        </p>
      </div>
    </div>
  );
}
