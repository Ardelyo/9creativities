import React from 'react';
import { motion } from 'framer-motion';

const DropletAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, borderRadius: '100%' }}
      animate={{ scale: 1, opacity: 1, borderRadius: '0%' }}
      exit={{ scale: 0, opacity: 0, borderRadius: '100%' }}
      transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default DropletAnimation;