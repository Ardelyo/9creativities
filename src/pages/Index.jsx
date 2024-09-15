import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplet, Utensils, Cpu, Wifi, Bot, Package } from 'lucide-react';

const Index = () => {
  const teams = [
    { title: "Teknologi Lingkungan", icon: Droplet, color: "bg-green-500", to: "/environmental-team" },
    { title: "Teknologi Pangan", icon: Utensils, color: "bg-orange-500", to: "/food-team" },
    { title: "Teknologi Informasi", icon: Cpu, color: "bg-blue-500", to: "/information-technology" },
    { title: "Teknologi Komunikasi", icon: Wifi, color: "bg-purple-500", to: "/communication-technology" },
    { title: "Produk Kami", icon: Package, color: "bg-pink-500", to: "/produk-kami" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl sm:text-7xl font-bold mb-6">
            Nine <span className="text-blue-600">Creativities</span>
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-600">
            Jelajahi inovasi teknologi dari berbagai tim kreatif kami
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <motion.div
              key={team.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link to={team.to} className="flex flex-col items-center space-y-6">
                <div className={`${team.color} p-6 rounded-full`}>
                  <team.icon className="w-16 h-16 text-white" />
                </div>
                <span className="text-2xl font-semibold text-center">{team.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link to="/robot-c" className="inline-flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-full text-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            <Bot className="w-8 h-8" />
            <span>Chat with Robot C</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
