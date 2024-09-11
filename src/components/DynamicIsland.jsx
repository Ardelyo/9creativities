import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Info, Droplet, Utensils, Mail } from 'lucide-react';

const DynamicIsland = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const navItems = [
    { title: "Home", icon: <Home className="w-6 h-6" />, path: "/" },
    { title: "About", icon: <Info className="w-6 h-6" />, path: "/about" },
    { title: "Environmental", icon: <Droplet className="w-6 h-6" />, path: "/environmental-team" },
    { title: "Food", icon: <Utensils className="w-6 h-6" />, path: "/food-team" },
    { title: "Contact", icon: <Mail className="w-6 h-6" />, path: "/contact" },
  ];

  return (
    <motion.div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ width: '200px', height: '40px' }}
      animate={{
        width: isExpanded ? '300px' : '200px',
        height: isExpanded ? '300px' : '40px',
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-full h-full bg-navy-blue rounded-full flex items-center justify-center cursor-pointer overflow-hidden shadow-lg"
        onClick={toggleExpand}
      >
        <AnimatePresence>
          {isExpanded ? (
            <motion.nav
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex flex-col items-center justify-center"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center justify-center text-white p-3 hover:bg-opacity-50 hover:bg-white w-full transition-colors duration-200"
                  onClick={() => setIsExpanded(false)}
                >
                  <motion.div
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.title}</span>
                  </motion.div>
                </Link>
              ))}
            </motion.nav>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-white font-bold"
            >
              Nine Creativities
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default DynamicIsland;