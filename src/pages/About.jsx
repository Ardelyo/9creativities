import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const About = () => {
  return (
    <div className="page-container">
      <div className="content-card">
        <Link to="/" className="back-button">
          <ArrowLeft className="mr-2" /> Back
        </Link>
        <h1 className="title">About Nine Creativities</h1>
        <div className="mission-vision-container">
          <motion.div 
            className="mission-vision-circle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="mission-vision-title">Our Mission</h2>
            <p className="mission-vision-text">
              Nine Creativities is dedicated to showcasing innovative projects developed by Class 9C students. 
              We aim to highlight the creativity and hard work of our classmates in the fields of environmental and food technology.
            </p>
          </motion.div>
          <motion.div 
            className="mission-vision-circle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h2 className="mission-vision-title">Our Vision</h2>
            <p className="mission-vision-text">
              We envision a future where young minds contribute significantly to solving real-world challenges. 
              Through our projects, we strive to inspire and drive positive change in our communities and beyond.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;