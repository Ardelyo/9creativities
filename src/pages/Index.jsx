import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplet, Utensils, Cpu, Wifi, Info } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

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
      boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  const teams = [
    { title: "Teknologi Informasi", icon: Cpu, color: "bg-blue-500", to: "/information-technology" },
    { title: "Teknologi Komunikasi", icon: Wifi, color: "bg-green-500", to: "/communication-technology" },
    { title: "Teknologi Lingkungan", icon: Droplet, color: "bg-teal-500", to: "/environmental-team" },
    { title: "Teknologi Pangan", icon: Utensils, color: "bg-yellow-500", to: "/food-team" },
  ];

  return (
    <DropletAnimation>
      <div className="page-container bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen flex flex-col items-center justify-center p-4 relative">
        <BackgroundArt />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="content-card bg-white rounded-3xl shadow-lg p-8 w-full max-w-4xl relative z-10"
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="title text-4xl font-bold text-navy-blue mb-8 text-center"
          >
            Selamat Datang di Nine Creativities
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center text-gray-600 mb-8"
          >
            Jelajahi inovasi teknologi dari berbagai tim kreatif kami
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teams.map((team, index) => (
              <motion.div
                key={team.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className={`${team.color} rounded-2xl p-6 text-white shadow-md transition-all duration-300`}
              >
                <Link to={team.to} className="flex flex-col items-center space-y-4">
                  <team.icon className="w-16 h-16" />
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
            className="mt-6"
          >
            <Link to="/about" className="flex items-center justify-center space-x-2 bg-navy-blue text-white py-3 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300">
              <Info className="w-5 h-5" />
              <span>Tentang Kami</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </DropletAnimation>
  );
};

export default Index;