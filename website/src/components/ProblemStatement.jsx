import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProblemStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: '⏰',
      title: 'Delayed Response',
      description: 'Outbreaks detected only after significant spread, leading to preventable casualties'
    },
    {
      icon: '💰',
      title: 'Resource Inefficiency',
      description: 'Emergency resources deployed reactively rather than preventively, increasing costs'
    },
    {
      icon: '☠️',
      title: 'High Mortality',
      description: 'Preventable deaths due to late intervention and lack of early warning systems'
    },
    {
      icon: '📉',
      title: 'Economic Impact',
      description: 'Healthcare costs and productivity losses affecting communities and economy'
    }
  ];

  return (
    <section id="problem" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-sm font-bold text-sm mb-4">
            THE CHALLENGE
          </div>
          <h2 className="text-5xl font-bold text-aws-dark mb-6">
            Problem Statement
          </h2>
          <p className="text-xl text-aws-gray max-w-3xl mx-auto leading-relaxed">
            Waterborne diseases remain a critical public health challenge in urban India, 
            causing thousands of preventable deaths annually. Coimbatore, with its 2+ million 
            population across 20 municipal wards, faces recurring outbreaks during monsoon seasons.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="glass rounded-sm p-8 hover:shadow-lg transition-shadow border border-aws-border"
            >
              <div className="text-5xl mb-4">{problem.icon}</div>
              <h3 className="text-2xl font-bold text-aws-dark mb-3">{problem.title}</h3>
              <p className="text-aws-gray leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-sm border-l-4 border-aws-orange"
        >
          <h3 className="text-2xl font-bold text-aws-dark mb-4">The Core Question</h3>
          <p className="text-lg text-aws-gray leading-relaxed">
            <strong>How can we leverage AI and real-time data to predict waterborne disease outbreaks 
            before they occur, enabling proactive public health interventions?</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
