import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplet, Utensils, Cpu, Wifi, Bot, Package } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';

const Index = () => {
  const teams = [
    { title: "Environmental Technology", icon: Droplet, color: "from-blue-400 to-blue-600", to: "/environmental-team" },
    { title: "Food Technology", icon: Utensils, color: "from-blue-400 to-blue-600", to: "/food-team" },
    { title: "Information Technology", icon: Cpu, color: "from-blue-400 to-blue-600", to: "/information-technology" },
    { title: "Communication Technology", icon: Wifi, color: "from-blue-400 to-blue-600", to: "/communication-technology" },
    { title: "Our Products", icon: Package, color: "from-blue-400 to-blue-600", to: "/produk-kami" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8 relative overflow-hidden flex items-center justify-center">
      <BackgroundArt />
      <div className="max-w-8xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-8xl sm:text-9xl lg:text-10xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Nine Creativities
          </h1>
          <p className="text-3xl sm:text-4xl lg:text-5xl text-gray-300 max-w-5xl mx-auto mb-16">
            Explore innovative technologies from our creative teams
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teams.map((team, index) => (
            <motion.div
              key={team.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link to={team.to} className="block p-12">
                <div className={`bg-gradient-to-br ${team.color} p-10 rounded-full w-32 h-32 mb-10 mx-auto flex items-center justify-center`}>
                  <team.icon className="w-16 h-16 text-white" />
                </div>
                <h2 className="text-4xl font-semibold text-center mb-8">{team.title}</h2>
                <p className="text-gray-400 text-center text-xl">Discover innovative projects and breakthroughs</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-24 text-center"
        >
          <Link to="/robot-c" className="inline-flex items-center space-x-6 bg-blue-500 text-white px-12 py-6 rounded-full text-3xl font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <Bot className="w-12 h-12" />
            <span>Chat with Robot C</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
