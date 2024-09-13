import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Cpu, Wifi, Utensils } from 'lucide-react';

const BackgroundArt = () => {
  const icons = [Droplet, Cpu, Wifi, Utensils];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-white opacity-5"
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
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.1)" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
      </svg>
    </div>
  );
};

export default BackgroundArt;