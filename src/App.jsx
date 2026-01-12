import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import SubThemes from './components/SubThemes';
import About from './components/About';
import Agenda from './components/Agenda';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import VenueMap from './components/VenueMap';
import FunFacts from './components/FunFacts';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-pink-50 to-white">
      <Hero />
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <SubThemes />
      </motion.section>
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <About />
      </motion.section>
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Agenda />
      </motion.section>
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Speakers />
      </motion.section>
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Sponsors />
      </motion.section>
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <VenueMap />
      </motion.section>
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <FunFacts />
      </motion.section>
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Newsletter />
      </motion.section>
      <Footer />
    </div>
  );
}

export default App;