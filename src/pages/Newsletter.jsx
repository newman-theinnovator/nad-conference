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

const Newsletter = () => {
  return (
    <motion.section 
      className="pt-20 py-16 px-4 bg-green-900 min-h-screen text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h3 
          variants={childVariants}
          className="text-4xl font-bold mb-6 text-green-400"
        >
          Stay Updated
        </motion.h3>
        <motion.p 
          variants={childVariants}
          className="text-lg mb-6 text-gray-300"
        >
          Subscribe for the latest news, speaker announcements, and updates.
        </motion.p>
        <motion.form 
          variants={childVariants}
          className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
        >
          <input type="email" placeholder="Your email" className="py-3 px-4 rounded-lg w-full md:w-64 bg-gray-700 text-white" />
          <button type="submit" className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700">Subscribe</button>
        </motion.form>
        <motion.p 
          variants={childVariants}
          className="text-sm mt-4 text-gray-300"
        >
          We'll use Zapier for certification and automation integrations.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Newsletter;