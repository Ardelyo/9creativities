import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Lightbulb, Award } from 'lucide-react';
import DropletAnimation from '../components/DropletAnimation';

const About = () => {
  const teamMembers = [
    { name: "Alice", role: "Project Manager" },
    { name: "Bob", role: "Designer" },
    { name: "Charlie", role: "Developer" },
    { name: "Diana", role: "Content Creator" },
  ];

  return (
    <DropletAnimation>
      <div className="page-container">
        <div className="content-card bg-white rounded-3xl shadow-lg p-8">
          <Link to="/" className="back-button text-navy-blue">
            <ArrowLeft className="mr-2" /> Back
          </Link>
          <h1 className="title text-4xl font-bold text-navy-blue mb-8">About Nine Creativities</h1>
          
          <motion.div 
            className="mb-8 p-6 bg-gray-100 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-navy-blue flex items-center">
              <Users className="mr-2" /> Our Team
            </h2>
            <p className="text-gray-700 mb-4">
              Nine Creativities was proudly created by Group 1, a team of passionate students dedicated to showcasing innovative projects in environmental and food technology.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-navy-blue rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{member.name[0]}</span>
                  </div>
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="mb-8 p-6 bg-gray-100 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-navy-blue flex items-center">
              <Lightbulb className="mr-2" /> Our Mission
            </h2>
            <p className="text-gray-700">
              Nine Creativities is dedicated to showcasing innovative projects developed by Class 9C students. 
              We aim to highlight the creativity and hard work of our classmates in the fields of environmental and food technology.
            </p>
          </motion.div>

          <motion.div 
            className="mb-8 p-6 bg-gray-100 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-navy-blue flex items-center">
              <Award className="mr-2" /> Our Vision
            </h2>
            <p className="text-gray-700">
              We envision a future where young minds contribute significantly to solving real-world challenges. 
              Through our projects, we strive to inspire and drive positive change in our communities and beyond.
            </p>
          </motion.div>
        </div>
      </div>
    </DropletAnimation>
  );
};

export default About;