import Heatmap from '../components/Heatmap';

export default function WardMap() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="glass rounded-2xl p-6">
        <h1 className="text-4xl font-bold text-white mb-3">
          <span className="gradient-text">🗺️ Ward Risk Map</span>
        </h1>
        <p className="text-white/80">
          Interactive geographic visualization of disease outbreak risk across all 20 Coimbatore wards.
          Click on any ward to view detailed information.
        </p>
      </div>

      {/* Heatmap Component */}
      <div className="card-3d">
        <Heatmap />
      </div>

      {/* Legend Info */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Understanding Risk Levels</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl" style={{background: 'rgba(239, 68, 68, 0.1)', border: '2px solid #ef4444'}}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span className="font-bold text-white">High Risk (&gt;70%)</span>
            </div>
            <p className="text-sm text-white/70">Immediate action required. Deploy medical teams and resources.</p>
          </div>
          <div className="p-4 rounded-xl" style={{background: 'rgba(245, 158, 11, 0.1)', border: '2px solid #f59e0b'}}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <span className="font-bold text-white">Medium Risk (40-70%)</span>
            </div>
            <p className="text-sm text-white/70">Monitor closely. Prepare preventive measures.</p>
          </div>
          <div className="p-4 rounded-xl" style={{background: 'rgba(34, 211, 238, 0.1)', border: '2px solid #22d3ee'}}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-4 h-4 rounded-full bg-cyan-400"></div>
              <span className="font-bold text-white">Low Risk (&lt;40%)</span>
            </div>
            <p className="text-sm text-white/70">Continue routine monitoring and maintenance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
