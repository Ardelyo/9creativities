import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Utensils, Users, FileText, Camera } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';
import FoodTeamIntroduction from '../components/FoodTeamIntroduction';
import FoodTeamMembers from '../components/FoodTeamMembers';
import FoodTeamProjects from '../components/FoodTeamProjects';

const FoodTeam = () => {
  return (
    <DropletAnimation>
      <div className="min-h-screen bg-white p-4 sm:p-8 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/" className="text-orange-600 hover:text-orange-800 transition-colors mb-8 inline-block">
            <ArrowLeft className="mr-2 inline" /> Kembali
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4">
              Tim <span className="text-orange-600">Teknologi Pangan</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-4"
            />
          </motion.div>
          
          <FoodTeamIntroduction />
          <FoodTeamMembers />
          <FoodTeamProjects />
        </div>
      </div>
    </DropletAnimation>
  );
};

export default FoodTeam;