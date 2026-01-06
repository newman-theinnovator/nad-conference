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

const Sponsors = () => {
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
          Sponsors & Investors
        </motion.h3>
        <motion.p 
          variants={childVariants}
          className="text-lg mb-6 text-center text-gray-300"
        >
          Welcoming international investors! Partner with us for visibility at this global event.
        </motion.p>
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <motion.div variants={childVariants} className="bg-gray-800 p-4 rounded-lg shadow-lg text-center text-gray-300">Sponsor 1</motion.div>
          <motion.div variants={childVariants} className="bg-gray-800 p-4 rounded-lg shadow-lg text-center text-gray-300">Sponsor 2</motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Sponsors;