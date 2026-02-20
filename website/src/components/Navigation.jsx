import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Demo', href: '#demo' },
    { name: 'Impact', href: '#impact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm aws-gradient flex items-center justify-center text-white font-bold text-xl">
              💧
            </div>
            <span className={`font-bold text-lg ${scrolled ? 'text-aws-dark' : 'text-white'}`}>
              WaterGuard AI
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-semibold hover:text-aws-orange transition-colors ${
                  scrolled ? 'text-aws-gray' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href={import.meta.env.VITE_DEMO_APP_URL || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 aws-gradient text-white font-bold rounded-sm hover:opacity-90 transition-opacity"
            >
              Launch App
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
