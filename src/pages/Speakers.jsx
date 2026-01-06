import React from 'react';
import { motion } from 'framer-motion';
import bensonOkwara from '../assets/benson-okwara.jpg'; // Existing
import cynthiaMadubuko from '../assets/cynthia-madubuko.jpg'; // New - adjust extension if needed
import sebastineOiwoh from '../assets/sebastine-oiwoh.jpg'; // New - adjust extension if needed

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Speakers = () => {
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
          Speakers
        </motion.h3>
        <motion.p 
          variants={childVariants} 
          className="text-lg mb-6 text-center text-gray-300"
        >
          Meet our distinguished speakers. More announcements coming soon!
        </motion.p>
        <motion.div 
          variants={containerVariants} 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Dr. Benson Okwara Card */}
          <motion.div 
            variants={childVariants} 
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
          >
            <img 
              src={bensonOkwara} 
              alt="Dr. Benson Okwara" 
              className="w-full h-auto object-cover object-top rounded-t-lg mb-4" 
            />
            <h4 className="text-2xl font-semibold mb-2 text-pink-400">Dr. Benson Okwara</h4>
            <p className="text-lg text-gray-300">MBBS, FMCP</p>
            <p className="text-lg text-gray-300">University of Benin Teaching Hospital</p>
            <p className="text-lg text-green-400 font-medium">Chairman, Local Organising Committee (LOC)</p>
          </motion.div>

          {/* Prof Cynthia Roli Madubuko Card */}
          <motion.div 
            variants={childVariants} 
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
          >
            <img 
              src={cynthiaMadubuko} 
              alt="Prof Cynthia Roli Madubuko" 
              className="w-full h-auto object-cover object-top rounded-t-lg mb-4" 
            />
            <h4 className="text-2xl font-semibold mb-2 text-pink-400">Prof Cynthia Roli Madubuko</h4>
            <p className="text-lg text-gray-300">MBBS, FWACP, FMCP</p>
            <p className="text-lg text-gray-300">University of Benin Teaching Hospital, Edo State</p>
          </motion.div>

          {/* Sebastine Oseghae OIWOH Card */}
          <motion.div 
            variants={childVariants} 
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
          >
            <img 
              src={sebastineOiwoh} 
              alt="Sebastine Oseghae OIWOH" 
              className="w-full h-auto object-cover object-top rounded-t-lg mb-4" 
            />
            <h4 className="text-2xl font-semibold mb-2 text-pink-400">Sebastine Oseghae OIWOH</h4>
            <p className="text-lg text-gray-300">MBBS, Cert. Clinical Research (Harvard Chan), FWACP</p>
            <p className="text-lg text-gray-300">Irrua Specialist Teaching Hospital Irrua / Ambrose Alli University Ekpoma</p>
            <p className="text-lg text-green-400 font-medium">Publicity Committee, Scientific Committee</p>
          </motion.div>

          {/* Placeholder cards - remove or update as more speakers are added */}
          <motion.div 
            variants={childVariants} 
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform text-gray-300"
          >
            <p className="text-center text-lg">Speaker 4 (Coming Soon)</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Speakers;