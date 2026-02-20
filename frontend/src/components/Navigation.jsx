import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: 'home' },
    { path: '/wards', label: 'Ward Map', icon: 'map' },
    { path: '/alerts', label: 'Alerts', icon: 'alert' },
    { path: '/analytics', label: 'Analytics', icon: 'analytics' },
    { path: '/about', label: 'About', icon: 'info' },
  ];

  return (
    <nav className="glass rounded-2xl p-4 mb-6 scroll-fade">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="text-cyan-400 float-animation">
            <Icon name="water" className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white gradient-text">WaterGuard AI</h1>
            <p className="text-xs text-white/60">Disease Prediction System</p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link px-4 py-2 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
                location.pathname === item.path
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <Icon name={item.icon} className="w-5 h-5" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
