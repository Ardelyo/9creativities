import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplet, Utensils } from 'lucide-react';

const Index = () => {
  const bubbleVariants = {
    initial: { scale: 1, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div 
        className="text-4xl font-bold mb-8 text-center text-white bg-navy-blue px-8 py-4 rounded-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Nine Creativities
      </motion.div>
      <motion.div 
        className="flex flex-wrap justify-center gap-8"
        initial="initial"
        animate="animate"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <Link to="/environmental-projects">
          <motion.div
            className="w-48 h-48 bg-navy-blue flex flex-col items-center justify-center text-white rounded-full shadow-lg"
            variants={bubbleVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Droplet size={48} />
            <span className="mt-2 text-xl font-semibold">Environmental Tech</span>
          </motion.div>
        </Link>
        <Link to="/food-projects">
          <motion.div
            className="w-48 h-48 bg-navy-blue flex flex-col items-center justify-center text-white rounded-full shadow-lg"
            variants={bubbleVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ type: "spring", stiffness: 300 }}
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