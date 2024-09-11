import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const TransitionWrapper = ({ children }) => {
  const location = useLocation();

  const dropletVariants = {
    initial: { scale: 0, opacity: 0, borderRadius: '100%' },
    animate: { scale: 1, opacity: 1, borderRadius: '0%' },
    exit: { scale: 0, opacity: 0, borderRadius: '100%' },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={dropletVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionWrapper;