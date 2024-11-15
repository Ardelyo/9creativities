import React from 'react';
import { motion } from 'framer-motion';
import InfoCards from '../components/InfoCards';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Nine Creativities
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mengeksplorasi Inovasi Teknologi Melalui Kreativitas Tanpa Batas
          </p>
        </motion.div>

        <InfoCards />
      </motion.div>
    </div>
  );
};

export default Home;