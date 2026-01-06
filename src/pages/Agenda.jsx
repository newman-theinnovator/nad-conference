import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Agenda = () => {
  return (
    <motion.section 
      className="pt-20 py-16 px-4 min-h-screen text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h3 
          variants={childVariants}
          className="text-4xl font-bold mb-8 text-center text-green-400"
        >
          Event Agenda
        </motion.h3>
        <motion.p 
          variants={childVariants}
          className="text-lg mb-6 text-center text-gray-300"
        >
          Full agenda coming soon. Stay tuned for session details, workshops, and keynotes.
        </motion.p>
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <motion.div variants={childVariants} className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
            <h4 className="text-2xl font-semibold mb-2 text-pink-400">Day 1: June 23</h4>
            <p>Opening Ceremony & Keynotes</p>
          </motion.div>
          <motion.div variants={childVariants} className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
            <h4 className="text-2xl font-semibold mb-2 text-pink-400">Day 2: June 24</h4>
            <p>Workshops on Skin Health</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Agenda;