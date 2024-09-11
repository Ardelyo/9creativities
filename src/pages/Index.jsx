import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplet, Utensils } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Nine Creativities
      </motion.h1>
      <motion.div 
        className="flex flex-wrap justify-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, staggerChildren: 0.1 }}
      >
        <Link to="/environmental-projects">
          <motion.div
            className="bubble w-48 h-48 bg-blue-400 flex flex-col items-center justify-center text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Droplet size={48} />
            <span className="mt-2 text-xl font-semibold">Environmental Tech</span>
          </motion.div>
        </Link>
        <Link to="/food-projects">
          <motion.div
            className="bubble w-48 h-48 bg-green-400 flex flex-col items-center justify-center text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Utensils size={48} />
            <span className="mt-2 text-xl font-semibold">Food Tech</span>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Index;