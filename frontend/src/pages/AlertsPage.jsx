import Alerts from '../components/Alerts';

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="glass rounded-2xl p-6">
        <h1 className="text-4xl font-bold text-white mb-3">
          <span className="gradient-text">🚨 Real-Time Alerts</span>
        </h1>
        <p className="text-white/80">
          AI-generated alerts for high-risk disease outbreaks. Alerts are updated every 30 seconds
          based on real-time water quality and epidemiological data.
        </p>
      </div>

      {/* Alerts Component */}
      <div className="card-3d">
        <Alerts />
      </div>

      {/* Alert Types Info */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Alert Severity Levels</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-red-500/20 border-2 border-red-500">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🚨</span>
              <span className="font-bold text-white text-lg">CRITICAL</span>
            </div>
            <p className="text-sm text-white/80">
              Risk &gt; 80%. Immediate intervention required. Deploy emergency response teams.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-yellow-500/20 border-2 border-yellow-500">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">⚠️</span>
              <span className="font-bold text-white text-lg">WARNING</span>
            </div>
            <p className="text-sm text-white/80">
              Risk 60-80%. Enhanced monitoring and preventive measures recommended.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
