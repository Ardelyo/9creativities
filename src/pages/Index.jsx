import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplet, Utensils, Cpu, Wifi } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const Index = () => {
  const bubbleVariants = {
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <DropletAnimation>
      <div className="page-container bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen flex flex-col items-center justify-center p-4 relative">
        <BackgroundArt />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="content-card bg-white rounded-3xl shadow-lg p-6 w-full max-w-4xl relative z-10"
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="title text-3xl font-bold text-navy-blue mb-8 text-center"
          >
            Selamat Datang di Nine Creativities
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/information-technology">
              <motion.div
                className="nav-button bg-navy-blue text-white rounded-full p-6 flex items-center justify-center space-x-4"
                variants={bubbleVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Cpu className="nav-icon text-4xl" />
                <span className="nav-text text-xl font-semibold">Teknologi Informasi</span>
              </motion.div>
            </Link>
            <Link to="/communication-technology">
              <motion.div
                className="nav-button bg-navy-blue text-white rounded-full p-6 flex items-center justify-center space-x-4"
                variants={bubbleVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Wifi className="nav-icon text-4xl" />
                <span className="nav-text text-xl font-semibold">Teknologi Komunikasi</span>
              </motion.div>
            </Link>
            <Link to="/environmental-team">
              <motion.div
                className="nav-button bg-navy-blue text-white rounded-full p-6 flex items-center justify-center space-x-4"
                variants={bubbleVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Droplet className="nav-icon text-4xl" />
                <span className="nav-text text-xl font-semibold">Teknologi Lingkungan</span>
              </motion.div>
            </Link>
            <Link to="/food-team">
              <motion.div
                className="nav-button bg-navy-blue text-white rounded-full p-6 flex items-center justify-center space-x-4"
                variants={bubbleVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Utensils className="nav-icon text-4xl" />
                <span className="nav-text text-xl font-semibold">Teknologi Pangan</span>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </DropletAnimation>
  );
};

export default Index;