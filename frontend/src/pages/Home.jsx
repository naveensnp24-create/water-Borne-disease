import Dashboard from '../components/Dashboard';
import Alerts from '../components/Alerts';
import Icon from '../components/Icon';

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="glass rounded-2xl p-8 text-center scroll-fade">
        <h1 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4">
          <Icon name="water" className="w-12 h-12 text-cyan-400" />
          <span className="gradient-text">Waterborne Disease Prediction</span>
        </h1>
        <p className="text-white/90 text-lg mb-6">
          AI-Powered Outbreak Forecasting for Coimbatore's 20 Municipal Wards
        </p>
        <div className="flex items-center justify-center gap-6 text-white/80 text-sm flex-wrap">
          <span className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-cyan-400 rounded-full status-pulse"></span>
            Water Quality Monitoring
          </span>
          <span className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full status-pulse" style={{animationDelay: '0.3s'}}></span>
            Disease Detection
          </span>
          <span className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-blue-400 rounded-full status-pulse" style={{animationDelay: '0.6s'}}></span>
            20 Wards Tracked
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card-3d scroll-slide-left scroll-animate-delay-1">
          <Dashboard />
        </div>
        <div className="card-3d scroll-slide-right scroll-animate-delay-1">
          <Alerts />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 scroll-animate scroll-animate-delay-2">
        <div className="glass rounded-xl p-6 text-center info-card">
          <div className="text-4xl font-bold text-cyan-400 gradient-text mb-2 stat-counter">2M+</div>
          <div className="text-sm text-white/70">Citizens Protected</div>
        </div>
        <div className="glass rounded-xl p-6 text-center info-card" style={{animationDelay: '0.1s'}}>
          <div className="text-4xl font-bold text-cyan-400 gradient-text mb-2 stat-counter">20</div>
          <div className="text-sm text-white/70">Wards Monitored</div>
        </div>
        <div className="glass rounded-xl p-6 text-center info-card" style={{animationDelay: '0.2s'}}>
          <div className="text-4xl font-bold text-cyan-400 gradient-text mb-2 stat-counter">85%+</div>
          <div className="text-sm text-white/70">Prediction Accuracy</div>
        </div>
        <div className="glass rounded-xl p-6 text-center info-card" style={{animationDelay: '0.3s'}}>
          <div className="text-4xl font-bold text-cyan-400 gradient-text mb-2 stat-counter">24/7</div>
          <div className="text-sm text-white/70">Real-time Monitoring</div>
        </div>
      </div>
    </div>
  );
}
