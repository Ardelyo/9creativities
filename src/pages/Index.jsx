import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplet, Utensils, Cpu, Wifi, Bot, Package, Users } from 'lucide-react';
import SoundEffect from '../components/SoundEffect';

const Index = () => {
  const teams = [
    { title: "Teknologi Lingkungan", icon: Droplet, color: "bg-green-500", to: "/environmental-team" },
    { title: "Teknologi Pangan", icon: Utensils, color: "bg-orange-500", to: "/food-team" },
    { title: "Teknologi Informasi", icon: Cpu, color: "bg-blue-500", to: "/information-technology" },
    { title: "Teknologi Komunikasi", icon: Wifi, color: "bg-purple-500", to: "/communication-technology" },
    { title: "Produk Kami", icon: Package, color: "bg-pink-500", to: "/produk-kami" },
    { title: "Tentang Kelas Kami", icon: Users, color: "bg-yellow-500", to: "/our-class" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 text-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-3d">
            Nine <span className="text-blue-300">Creativities</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100">
            Jelajahi inovasi teknologi dari berbagai tim kreatif kami
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teams.map((team, index) => (
            <motion.div
              key={team.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="glassmorphism p-6 sm:p-8 hover-scale float"
            >
              <Link to={team.to} className="flex flex-col items-center space-y-4 sm:space-y-6">
                <SoundEffect soundUrl="/hover.mp3">
                  <div className={`${team.color} p-4 sm:p-6 rounded-full`}>
                    <team.icon className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                  </div>
                </SoundEffect>
                <span className="text-xl sm:text-2xl font-semibold text-center">{team.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <SoundEffect soundUrl="/click.mp3">
            <Link to="/robot-c" className="inline-flex items-center space-x-3 bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 glassmorphism">
              <Bot className="w-6 h-6 sm:w-8 sm:h-8" />
              <span>Chat with Robot C</span>
            </Link>
          </SoundEffect>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
