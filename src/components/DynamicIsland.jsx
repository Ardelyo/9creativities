import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Info, Bot } from 'lucide-react';

const DynamicIsland = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const navItems = [
    { title: "Beranda", icon: <Home className="w-6 h-6" />, path: "/" },
    { title: "Tentang", icon: <Info className="w-6 h-6" />, path: "/about" },
    { title: "Robot C", icon: <Bot className="w-6 h-6" />, path: "/robot-c" },
  ];

  const islandVariants = {
    collapsed: { width: '200px', height: '40px', borderRadius: '20px' },
    expanded: { width: '300px', height: '200px', borderRadius: '30px' },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3, type: 'spring', stiffness: 300, damping: 24 },
    }),
  };

  return (
    <motion.div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={islandVariants}
      transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 30 }}
    >
      <motion.div
        className="w-full h-full bg-navy-blue rounded-full flex items-center justify-center cursor-pointer overflow-hidden shadow-lg"
        onClick={toggleExpand}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.nav
              key="expanded"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="w-full h-full flex flex-col items-center justify-center"
            >
              {navItems.map((item, index) => (
                <motion.div key={item.path} custom={index} variants={itemVariants}>
                  <Link
                    to={item.path}
                    className="flex items-center justify-center text-white p-3 hover:bg-opacity-50 hover:bg-white w-full transition-colors duration-200"
                    onClick={() => setIsExpanded(false)}
                  >
                    <motion.div
                      className="flex items-center space-x-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {item.icon}
                      <span className="text-sm font-medium">{item.title}</span>
                    </motion.div>
                  </Link>
                </motion.div>
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