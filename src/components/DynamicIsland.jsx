import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Info, Bot, Package, FileText, Presentation } from 'lucide-react';

const DynamicIsland = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const navItems = [
    { title: "Beranda", icon: <Home className="w-5 h-5 sm:w-6 sm:h-6" />, path: "/" },
    { title: "Tentang Kelas Kami", icon: <Info className="w-5 h-5 sm:w-6 sm:h-6" />, path: "/our-class" },
    { title: "Robot C", icon: <Bot className="w-5 h-5 sm:w-6 sm:h-6" />, path: "/robot-c" },
    { title: "Produk Kami", icon: <Package className="w-5 h-5 sm:w-6 sm:h-6" />, path: "/produk-kami" },
    { title: "Artikel", icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />, path: "/artikel" },
    { title: "Presentasi Proyek", icon: <Presentation className="w-5 h-5 sm:w-6 sm:h-6" />, path: "/project-presentation" },
  ];

  const islandVariants = {
    collapsed: { width: '180px', height: '36px', borderRadius: '18px' },
    expanded: { width: '280px', height: '300px', borderRadius: '24px' },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
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
        className="w-full h-full bg-black bg-opacity-80 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer overflow-hidden shadow-lg"
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
                <motion.div key={item.path} custom={index} variants={itemVariants} className="w-full">
                  <Link
                    to={item.path}
                    className="flex items-center justify-center text-white p-3 hover:bg-white hover:bg-opacity-20 w-full transition-colors duration-200"
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
              className="text-white font-bold text-sm sm:text-base"
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