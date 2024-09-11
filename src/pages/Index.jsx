import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplet, Utensils } from 'lucide-react';

const Index = () => {
  return (
    <div className="page-container">
      <div className="content-card">
        <h1 className="title">Welcome to Nine Creativities</h1>
        <div className="flex justify-center space-x-8">
          <Link to="/environmental-projects">
            <motion.div
              className="nav-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Droplet className="nav-icon" />
              <span className="nav-text">Environmental Tech</span>
            </motion.div>
          </Link>
          <Link to="/food-projects">
            <motion.div
              className="nav-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Utensils className="nav-icon" />
              <span className="nav-text">Food Tech</span>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;