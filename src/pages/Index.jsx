import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplet, Utensils, Cpu, Wifi, Bot, Package, Calculator } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';

const Index = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 }
    }
  };

  const teams = [
    { title: "Teknologi Lingkungan", icon: Droplet, color: "from-emerald-700 to-teal-600", to: "/environmental-team" },
    { title: "Teknologi Pangan", icon: Utensils, color: "from-orange-700 to-red-600", to: "/food-team" },
    { title: "Teknologi Informasi", icon: Cpu, color: "from-blue-700 to-indigo-600", to: "/information-technology" },
    { title: "Teknologi Komunikasi", icon: Wifi, color: "from-purple-700 to-pink-600", to: "/communication-technology" },
    { title: "Produk Kami", icon: Package, color: "from-yellow-600 to-amber-600", to: "/produk-kami" },
    { title: "Kalkulator Karbon", icon: Calculator, color: "from-green-700 to-teal-600", to: "/carbon-calculator" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-4 sm:p-8 relative overflow-hidden flex flex-col justify-center items-center"
    >
      <BackgroundArt />
      <div className="max-w-4xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-white">
            Nine <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-white">Creativities</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-300 via-blue-500 to-white mx-auto mb-4 rounded-full"
          />
          <p className="text-gray-300 text-lg sm:text-xl">
            Jelajahi inovasi teknologi dari berbagai tim kreatif kami
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team, index) => (
            <motion.div
              key={team.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className={`bg-gradient-to-br ${team.color} rounded-3xl p-6 text-white shadow-lg transform transition-all duration-300`}
            >
              <Link to={team.to} className="flex flex-col items-center space-y-4">
                <motion.div 
                  className="bg-white p-4 rounded-full shadow-inner"
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                >
                  <team.icon className="w-10 h-10 sm:w-12 sm:h-12 text-gray-800" />
                </motion.div>
                <span className="text-lg sm:text-xl font-semibold text-center">{team.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <Link to="/robot-c" className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-full hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            <Bot className="w-6 h-6" />
            <span>Chat with Robot C</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
