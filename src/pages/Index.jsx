import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplet, Utensils, Cpu, Wifi, Bot, Package } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';

const Index = () => {
  const teams = [
    { title: "Environmental Technology", icon: Droplet, color: "from-blue-400 to-blue-600", to: "/environmental-team" },
    { title: "Food Technology", icon: Utensils, color: "from-green-400 to-green-600", to: "/food-team" },
    { title: "Information Technology", icon: Cpu, color: "from-purple-400 to-purple-600", to: "/information-technology" },
    { title: "Communication Technology", icon: Wifi, color: "from-red-400 to-red-600", to: "/communication-technology" },
    { title: "Our Products", icon: Package, color: "from-yellow-400 to-yellow-600", to: "/produk-kami" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl sm:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Nine Creativities
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Explore innovative technologies from our creative teams
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <motion.div
              key={team.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Link to={team.to} className="block p-8">
                <div className={`bg-gradient-to-br ${team.color} p-6 rounded-full w-20 h-20 mb-6 mx-auto flex items-center justify-center`}>
                  <team.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-center mb-4">{team.title}</h2>
                <p className="text-gray-400 text-center">Discover innovative projects and breakthroughs</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <Link to="/robot-c" className="inline-flex items-center space-x-3 bg-blue-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Bot className="w-8 h-8" />
            <span>Chat with Robot C</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
