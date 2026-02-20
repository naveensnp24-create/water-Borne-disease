import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #232f3e 0%, #1a242f 100%)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-aws-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-aws-blue rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-6 py-2 rounded-sm aws-gradient">
            <span className="text-white text-sm font-bold tracking-wide">
              🏆 GENAI HACKATHON 2024 - PUBLIC HEALTH INNOVATION
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Waterborne Disease
            <br />
            <span className="bg-gradient-to-r from-aws-orange to-aws-orange-dark bg-clip-text text-transparent">
              Prediction System
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI-powered outbreak forecasting protecting 2M+ citizens across Coimbatore's 20 wards
            with 85% prediction accuracy and 7-14 day early warning
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#demo"
              className="px-8 py-4 aws-gradient text-white font-bold rounded-sm hover:opacity-90 transition-opacity text-lg shadow-lg"
            >
              View Live Demo
            </a>
            <a
              href="#architecture"
              className="px-8 py-4 bg-white text-aws-dark font-bold rounded-sm hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Technical Details
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '2M+', label: 'Citizens Protected' },
              { value: '85%', label: 'Accuracy' },
              { value: '20', label: 'Wards Monitored' },
              { value: '24/7', label: 'Real-time' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                className="glass rounded-sm p-6"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-aws-orange to-aws-orange-dark bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-aws-gray uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
