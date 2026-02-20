import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: '🔬',
      title: 'Outbreak Risk Predictor',
      description: 'ML model generates risk scores (0-100%), days to outbreak, and alert levels (LOW/MEDIUM/HIGH)',
      tech: 'LSTM Neural Network'
    },
    {
      icon: '🗺️',
      title: 'Geographic Risk Distribution',
      description: 'Interactive map showing all 20 wards with color-coded risk levels and click-to-zoom functionality',
      tech: 'Leaflet.js + React'
    },
    {
      icon: '🚨',
      title: 'AI-Generated Alerts',
      description: 'GenAI-powered natural language explanations with disease-specific warnings and severity classification',
      tech: 'GenAI Integration'
    },
    {
      icon: '💧',
      title: 'Water Quality Standards',
      description: 'Reference guidelines for safe parameters, threshold monitoring, and compliance tracking',
      tech: 'Real-time Monitoring'
    }
  ];

  return (
    <section id="solution" ref={ref} className="py-24" style={{ background: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 aws-gradient text-white rounded-sm font-bold text-sm mb-4">
            OUR SOLUTION
          </div>
          <h2 className="text-5xl font-bold text-aws-dark mb-6">
            AI-Powered Predictive Platform
          </h2>
          <p className="text-xl text-aws-gray max-w-3xl mx-auto leading-relaxed">
            A comprehensive system that forecasts waterborne disease outbreaks 7-14 days in advance 
            using LSTM neural networks, real-time monitoring, and GenAI insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="bg-white rounded-sm p-8 hover:shadow-xl transition-all border border-aws-border group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-aws-dark mb-3">{feature.title}</h3>
              <p className="text-aws-gray leading-relaxed mb-4">{feature.description}</p>
              <div className="inline-block px-3 py-1 bg-aws-bg text-aws-gray-light text-sm font-semibold rounded-sm">
                {feature.tech}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-white rounded-sm p-8 border-2 border-aws-orange shadow-xl"
        >
          <h3 className="text-3xl font-bold text-aws-dark mb-6 text-center">Core Technologies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🧠</div>
              <h4 className="font-bold text-aws-dark mb-2">LSTM Neural Network</h4>
              <p className="text-sm text-aws-gray">Time-series prediction analyzing historical patterns</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="font-bold text-aws-dark mb-2">Real-time Monitoring</h4>
              <p className="text-sm text-aws-gray">Continuous water quality surveillance</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h4 className="font-bold text-aws-dark mb-2">GenAI Insights</h4>
              <p className="text-sm text-aws-gray">Natural language risk explanations</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
