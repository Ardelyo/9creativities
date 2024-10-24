import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BackgroundArt from './BackgroundArt';
import DropletAnimation from './DropletAnimation';

const TeamPageLayout = ({ 
  teamName, 
  accentColor, 
  gradientFrom, 
  gradientTo, 
  icon: Icon,
  children,
  backgroundPattern 
}) => {
  return (
    <DropletAnimation>
      <div className="min-h-screen bg-white p-4 sm:p-8 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(backgroundPattern)}")`,
            backgroundSize: '50px'
          }}
        />
        <BackgroundArt />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link 
            to="/" 
            className={`text-${accentColor}-600 hover:text-${accentColor}-800 transition-colors mb-8 inline-block text-xl`}
          >
            <ArrowLeft className="mr-2 inline" /> Kembali
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Icon className={`w-16 h-16 sm:w-20 sm:h-20 text-${accentColor}-600`} />
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6">
              Tim <span className={`bg-gradient-to-r from-${gradientFrom} to-${gradientTo} bg-clip-text text-transparent`}>
                {teamName}
              </span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className={`h-1 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} mx-auto mb-6`}
            />
          </motion.div>

          {children}
        </div>
      </div>
    </DropletAnimation>
  );
};

export default TeamPageLayout;