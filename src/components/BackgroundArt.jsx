import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Cpu, Wifi, Zap } from 'lucide-react';

const BackgroundArt = () => {
  const icons = [Droplet, Cpu, Wifi, Zap];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-gray-200 opacity-10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 40 + 20}px`,
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundArt;