import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplet, Utensils, Cpu, Wifi } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';

const Index = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, rotateY: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.05,
      rotateY: 10,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3
      }
    }
  };

  const teams = [
    { title: "Teknologi Lingkungan", icon: Droplet, color: "from-emerald-400 to-teal-500", to: "/environmental-team" },
    { title: "Teknologi Pangan", icon: Utensils, color: "from-orange-400 to-red-500", to: "/food-team" },
    { title: "Teknologi Informasi", icon: Cpu, color: "from-blue-400 to-indigo-500", to: "/information-technology" },
    { title: "Teknologi Komunikasi", icon: Wifi, color: "from-purple-400 to-pink-500", to: "/communication-technology" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-10 backdrop-blur-lg rounded-[40px] p-8 mb-8 mt-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4 text-center">
            Nine Creativities
          </h1>
          <p className="text-center text-gray-300 text-xl">
            Jelajahi inovasi teknologi dari berbagai tim kreatif kami
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teams.map((team, index) => (
            <motion.div
              key={team.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className={`bg-gradient-to-br ${team.color} rounded-[30px] p-8 text-white shadow-lg transform transition-all duration-300 perspective-1000`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Link to={team.to} className="flex flex-col items-center space-y-6">
                <motion.div 
                  className="bg-white p-6 rounded-full shadow-inner"
                  whileHover={{ rotateY: 180, transition: { duration: 0.5 } }}
                >
                  <team.icon className="w-16 h-16 text-gray-800" />
                </motion.div>
                <span className="text-2xl font-semibold text-center">{team.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;