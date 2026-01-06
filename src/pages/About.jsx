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

const About = () => {
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
          About the Conference
        </motion.h3>
        <motion.p variants={childVariants} className="text-lg mb-4 text-gray-300">
          Join us for the 20th Annual General Meeting and Scientific Conference of the Nigerian Association of Dermatologists. This event will bring together experts, professionals, and international investors to discuss advancements in dermatology.
        </motion.p>
        <motion.p variants={childVariants} className="text-lg mb-4 text-gray-300">
          International investors are welcome! Stay tuned for more details on speakers, agenda, and updates as discussions continue.
        </motion.p>
        <motion.p variants={childVariants} className="text-lg text-gray-300">
          For certifications, we will be using Zapier to streamline the process.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;