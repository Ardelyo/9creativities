import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Lightbulb, Award } from 'lucide-react';
import DropletAnimation from '../components/DropletAnimation';
import BackgroundArt from '../components/BackgroundArt';

const About = () => {
  const teamMembers = [
    { name: "Alice", role: "Project Manager", image: "/placeholder.svg" },
    { name: "Bob", role: "Designer", image: "/placeholder.svg" },
    { name: "Charlie", role: "Developer", image: "/placeholder.svg" },
    { name: "Diana", role: "Content Creator", image: "/placeholder.svg" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 20px rgba(0,0,0,0.15)"
    }
  };

  return (
    <DropletAnimation>
      <div className="min-h-screen bg-gray-900 p-12 relative overflow-hidden flex items-center justify-center">
        <BackgroundArt />
        <div className="max-w-7xl w-full mx-auto relative z-10">
          <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors mb-12 inline-block text-xl">
            <ArrowLeft className="mr-2 inline w-6 h-6" /> Back
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              About Nine Creativities
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-12"
            />
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="mb-20 p-12 bg-gray-800 rounded-3xl shadow-xl"
          >
            <h2 className="text-4xl font-bold mb-8 text-blue-400 flex items-center">
              <Users className="mr-4 w-10 h-10" /> Our Team
            </h2>
            <p className="text-gray-300 mb-12 text-xl leading-relaxed">
              Nine Creativities was created by Group 1, a team of students passionate about showcasing innovative projects in environmental and food technologies.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <img src={member.image} alt={member.name} className="w-36 h-36 rounded-full object-cover" />
                  </div>
                  <p className="font-semibold text-white text-2xl mb-2">{member.name}</p>
                  <p className="text-blue-400 text-lg">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="mb-20 p-12 bg-gray-800 rounded-3xl shadow-xl"
          >
            <h2 className="text-4xl font-bold mb-8 text-blue-400 flex items-center">
              <Lightbulb className="mr-4 w-10 h-10" /> Our Mission
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed">
              Nine Creativities aims to showcase innovative projects developed by students in Class 9C. 
              We strive to demonstrate the creativity and hard work of our peers in the fields of environmental and food technologies.
            </p>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="mb-20 p-12 bg-gray-800 rounded-3xl shadow-xl"
          >
            <h2 className="text-4xl font-bold mb-8 text-blue-400 flex items-center">
              <Award className="mr-4 w-10 h-10" /> Our Vision
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed">
              We envision a future where young people contribute significantly to solving real-world problems. 
              Through our projects, we seek to inspire and drive positive change in our community and beyond.
            </p>
          </motion.div>
        </div>
      </div>
    </DropletAnimation>
  );
};

export default About;
