import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Countdown from '../components/Countdown';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Home = () => {
  return (
    <motion.header 
      className="pt-20 pb-16 px-4 md:pt-32 md:pb-24 relative overflow-hidden text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-5xl mx-auto text-center bg-gray-800 bg-opacity-80 p-10 rounded-2xl shadow-2xl backdrop-blur-md">
        <motion.h1 
          variants={childVariants}
          className="text-5xl md:text-7xl font-extrabold mb-4 text-green-400"
        >
          20th AGM & Scientific Conference
        </motion.h1>
        <motion.h2 
          variants={childVariants}
          className="text-3xl md:text-5xl font-bold mb-6 text-pink-400"
        >
          Nigerian Association of Dermatologists
        </motion.h2>
        <motion.p 
          variants={childVariants}
          className="text-2xl md:text-4xl font-semibold mb-8 text-gray-200"
        >
          Theme: Treatment and Prevention of Skin Diseases as a Global Health Priority
        </motion.p>
        <motion.div 
          variants={childVariants}
          className="text-xl mb-8 text-gray-300"
        >
          <p><strong>Date:</strong> 23rd - 26th June, 2026</p>
          <p><strong>Venue:</strong> Benin City, Edo State, Nigeria</p>
        </motion.div>
        <motion.div variants={childVariants}>
          <Countdown />
        </motion.div>
        <motion.div variants={childVariants}>
          <a 
            href="https://lu.ma/" 
            className="bg-green-600 text-white py-4 px-8 rounded-lg text-xl font-bold hover:bg-green-700 transition inline-block mr-4"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Register Now
          </a>
          <Link 
            to="/about" 
            className="bg-pink-600 text-white py-4 px-8 rounded-lg text-xl font-bold hover:bg-pink-700 transition inline-block"
          >
            Explore More
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Home;