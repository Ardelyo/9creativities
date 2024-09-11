import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CicaButton = ({ isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <Button
        className={`w-16 h-16 rounded-full flex items-center justify-center ${
          isActive ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300 hover:bg-gray-400'
        } transition-colors duration-300`}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        disabled={!isActive}
      >
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Bot className={`w-8 h-8 ${isActive ? 'text-white' : 'text-gray-500'}`} />
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default CicaButton;