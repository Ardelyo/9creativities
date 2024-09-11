import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const TransitionWrapper = ({ children }) => {
  const location = useLocation();

  const dropletVariants = {
    initial: { 
      scale: 0, 
      opacity: 0, 
      borderRadius: '100%',
      boxShadow: '0 0 0 rgba(0,0,0,0)'
    },
    animate: { 
      scale: 1, 
      opacity: 1, 
      borderRadius: '0%',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
    },
    exit: { 
      scale: 0, 
      opacity: 0, 
      borderRadius: '100%',
      boxShadow: '0 0 0 rgba(0,0,0,0)'
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={dropletVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ 
          duration: 0.5, 
          ease: [0.43, 0.13, 0.23, 0.96] 
        }}
        className="w-full h-full overflow-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionWrapper;