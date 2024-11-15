import React from 'react';
import { motion } from 'framer-motion';

const BinaryLoadingAnimation = ({ onComplete }) => {
  const binaryString = "01".repeat(20);
  
  return (
    <motion.div 
      className="fixed inset-0 bg-blue-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 3 }}
      onAnimationComplete={onComplete}
    >
      <motion.div 
        className="text-blue-300 text-2xl font-mono overflow-hidden"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {binaryString.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BinaryLoadingAnimation;