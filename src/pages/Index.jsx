import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplet, Utensils, Cpu, Wifi, Bot, Package } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';

const Index = () => {
  const teams = [
    { title: "Teknologi Lingkungan", icon: Droplet, color: "from-blue-400 to-blue-600", to: "/environmental-team" },
    { title: "Teknologi Pangan", icon: Utensils, color: "from-blue-400 to-blue-600", to: "/food-team" },
    { title: "Teknologi Informasi", icon: Cpu, color: "from-blue-400 to-blue-600", to: "/information-technology" },
    { title: "Teknologi Komunikasi", icon: Wifi, color: "from-blue-400 to-blue-600", to: "/communication-technology" },
    { title: "Produk Kami", icon: Package, color: "from-blue-400 to-blue-600", to: "/produk-kami" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Nine <span className="text-blue-400">Creativities</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            Jelajahi inovasi teknologi dari berbagai tim kreatif kami
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team, index) => (
            <motion.div
              key={team.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300"
            >
              <Link to={team.to} className="flex flex-col items-center space-y-4">
                <div className={`bg-gradient-to-br ${team.color} p-4 rounded-full`}>
                  <team.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-lg font-semibold text-center">{team.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link to="/robot-c" className="inline-flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-300">
            <Bot className="w-6 h-6" />
            <span>Chat with Robot C</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
