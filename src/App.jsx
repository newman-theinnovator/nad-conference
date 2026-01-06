import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import Home from './pages/Home';
import SubThemes from './pages/SubThemes';
import About from './pages/About';
import Agenda from './pages/Agenda';
import Speakers from './pages/Speakers';
import Sponsors from './pages/Sponsors';
import VenueMap from './pages/VenueMap';
import ExcitingFacts from './pages/ExcitingFacts';
import Newsletter from './pages/Newsletter';

const pageVariants = {
  initial: { opacity: 0, x: '100vw', scale: 0.8 },
  in: { opacity: 1, x: 0, scale: 1 },
  out: { opacity: 0, x: '-100vw', scale: 1.2 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

function App() {
  const location = useLocation();
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-gray-900 to-gray-800"> {/* Dark gradient */}
      <ParticlesBackground />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="relative z-10"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/sub-themes" element={<SubThemes />} />
            <Route path="/about" element={<About />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/venue" element={<VenueMap />} />
            <Route path="/exciting-facts" element={<ExcitingFacts />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;