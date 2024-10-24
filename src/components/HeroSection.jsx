import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-16 sm:py-24"
    >
      <div className="absolute inset-0 z-0">
        <svg className="absolute right-0 top-0 h-full w-1/2 translate-x-1/3 transform text-blue-50" fill="currentColor">
          <defs>
            <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-5xl sm:text-7xl font-bold text-transparent mb-4"
          >
            Nine Creativities
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto"
          >
            Mengeksplorasi Inovasi Teknologi Melalui Kreativitas Tanpa Batas
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;