import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import WardMap from './pages/WardMap';
import AlertsPage from './pages/AlertsPage';
import Analytics from './pages/Analytics';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex justify-center p-4 md:p-8">
        <div className="w-[1400px] relative z-10">
          <Navigation />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wards" element={<WardMap />} />
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/about" element={<About />} />
          </Routes>

          {/* Footer */}
          <footer className="text-center text-white/70 mt-12 backdrop-blur-sm bg-white/5 rounded-2xl p-6 glass scroll-fade scroll-animate-delay-3">
            <div className="flex items-center justify-center gap-2 mb-2 text-sm">
              <span className="hexagon w-6 h-6 bg-cyan-400/20 inline-block float-animation"></span>
              <span>LSTM Model • Real-time Monitoring • GenAI Alerts • Fixed Layout</span>
              <span className="hexagon w-6 h-6 bg-cyan-400/20 inline-block float-animation" style={{animationDelay: '1s'}}></span>
            </div>
            <p className="text-xs mt-2 opacity-60">
              Data updates every 30 seconds • Predictions accurate to 85%+ • Protecting public health through AI
            </p>
          </footer>
        </div>
      </div>
    </Router>
  );
}
