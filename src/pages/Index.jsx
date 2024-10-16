import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const Index = () => {
  const teams = [
    { name: "Teknologi Lingkungan", path: "/environmental-team", color: "from-green-400 to-blue-500" },
    { name: "Teknologi Pangan", path: "/food-team", color: "from-yellow-400 to-red-500" },
    { name: "Teknologi Informasi", path: "/information-technology", color: "from-purple-400 to-pink-500" },
    { name: "Teknologi Komunikasi", path: "/communication-technology", color: "from-blue-400 to-indigo-500" },
  ];

  return (
    <DropletAnimation>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4 sm:p-8 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4">
              Welcome to <span className="text-blue-600">Nine Creativities</span>
            </h1>
            <p className="text-xl text-gray-600">
              Explore innovative projects from our talented teams
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teams.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={team.path} className="block">
                  <div className={`bg-gradient-to-br ${team.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <h2 className="text-2xl font-bold mb-2">{team.name}</h2>
                    <p>Discover our projects and innovations</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DropletAnimation>
  );
};

export default Index;