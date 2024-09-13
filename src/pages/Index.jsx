import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplet, Utensils, Cpu, Wifi, Info, Bot } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';

const Index = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const teams = [
    { title: "Teknologi Lingkungan", icon: Droplet, color: "from-emerald-400 to-teal-500", to: "/environmental-team" },
    { title: "Teknologi Pangan", icon: Utensils, color: "from-lime-400 to-green-500", to: "/food-team" },
    { title: "Teknologi Informasi", icon: Cpu, color: "from-blue-400 to-indigo-500", to: "/information-technology" },
    { title: "Teknologi Komunikasi", icon: Wifi, color: "from-purple-400 to-pink-500", to: "/communication-technology" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-teal-200 p-4 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-emerald-800 mb-8 text-center mt-16"
        >
          Selamat Datang di Nine Creativities
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center text-emerald-700 mb-12"
        >
          Jelajahi inovasi teknologi dari berbagai tim kreatif kami
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teams.map((team, index) => (
            <motion.div
              key={team.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className={`bg-gradient-to-br ${team.color} rounded-3xl p-6 text-white shadow-lg`}
            >
              <Link to={team.to} className="flex flex-col items-center space-y-4">
                <div className="bg-white p-4 rounded-full">
                  <team.icon className="w-12 h-12 text-emerald-500" />
                </div>
                <span className="text-xl font-semibold text-center">{team.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          custom={4}
          className="mt-8"
        >
          <Link to="/about" className="flex items-center justify-center space-x-2 bg-white text-emerald-600 py-3 px-6 rounded-full hover:bg-emerald-50 transition-all duration-300 shadow-md">
            <Info className="w-5 h-5" />
            <span>Tentang Kami</span>
          </Link>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          custom={5}
          className="mt-8"
        >
          <Link to="/cica" className="flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-white py-3 px-6 rounded-full hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 shadow-md">
            <Bot className="w-5 h-5" />
            <span>Tanya Cica AI</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;