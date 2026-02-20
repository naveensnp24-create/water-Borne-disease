import { motion } from 'framer-motion';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Solution from './components/Solution';
import TechnicalArchitecture from './components/TechnicalArchitecture';
import DataModel from './components/DataModel';
import DesignPhilosophy from './components/DesignPhilosophy';
import DemoScenarios from './components/DemoScenarios';
import Impact from './components/Impact';
import FutureEnhancements from './components/FutureEnhancements';
import Installation from './components/Installation';
import WhyThisWins from './components/WhyThisWins';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemStatement />
      <Solution />
      <TechnicalArchitecture />
      <DataModel />
      <DesignPhilosophy />
      <DemoScenarios />
      <Impact />
      <FutureEnhancements />
      <Installation />
      <WhyThisWins />
      <Footer />
    </div>
  );
}

export default App;
