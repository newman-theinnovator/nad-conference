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

const SubThemes = () => {
  return (
    <motion.section 
      className="pt-20 py-12 px-4 min-h-screen text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h3 
          variants={childVariants}
          className="text-3xl font-bold mb-6 text-center text-green-400"
        >
          Sub-Themes
        </motion.h3>
        <motion.ul 
          variants={containerVariants}
          className="space-y-4"
        >
          <motion.li variants={childVariants} className="bg-pink-800 p-4 rounded-lg text-lg">Closing the Dermatology care gap: Access, Affordability and Equity</motion.li>
          <motion.li variants={childVariants} className="bg-green-800 text-white p-4 rounded-lg text-lg">Navigating the intersection of Knowledge, technologies and innovations with local Challenges</motion.li>
          <motion.li variants={childVariants} className="bg-pink-800 p-4 rounded-lg text-lg">Achieving Health equity and addressing burning issues in skin care in Nigeria</motion.li>
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default SubThemes;