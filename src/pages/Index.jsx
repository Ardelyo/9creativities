import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplet, Utensils, Cpu, Wifi, Bot, Package, Users } from 'lucide-react';

const Index = () => {
  const teams = [
    { title: "Teknologi Lingkungan", icon: Droplet, color: "from-green-400 to-green-600", to: "/environmental-team" },
    { title: "Teknologi Pangan", icon: Utensils, color: "from-orange-400 to-orange-600", to: "/food-team" },
    { title: "Teknologi Informasi", icon: Cpu, color: "from-blue-400 to-blue-600", to: "/information-technology" },
    { title: "Teknologi Komunikasi", icon: Wifi, color: "from-purple-400 to-purple-600", to: "/communication-technology" },
    { title: "Produk Kami", icon: Package, color: "from-pink-400 to-pink-600", to: "/produk-kami" },
    { title: "Tentang Kelas Kami", icon: Users, color: "from-yellow-400 to-yellow-600", to: "/our-class" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-gray-800 p-4 sm:p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg z-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 sm:mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Nine <span className="font-extrabold">Creativities</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700">
            Jelajahi inovasi teknologi dari berbagai tim kreatif kami
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teams.map((team, index) => (
            <motion.div
              key={team.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-md rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-white border-opacity-20"
            >
              <Link to={team.to} className="flex flex-col items-center space-y-4 sm:space-y-6">
                <div className={`bg-gradient-to-br ${team.color} p-4 sm:p-6 rounded-full shadow-lg`}>
                  <team.icon className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                </div>
                <span className="text-xl sm:text-2xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">{team.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <Link to="/robot-c" className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <Bot className="w-6 h-6 sm:w-8 sm:h-8" />
            <span>Chat with Robot C</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
