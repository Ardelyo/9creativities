import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Utensils } from 'lucide-react';
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const FoodTeam = () => {
  const teamMembers = [
    { name: "David Lee", role: "Culinary Expert", interest: "Sustainable Cooking" },
    { name: "Emma Wilson", role: "Nutrition Specialist", interest: "Plant-based Diets" },
    { name: "Frank Miller", role: "Food Technology Researcher", interest: "Food Preservation" },
  ];

  const projects = [
    {
      id: 1,
      title: "Yoghurt Production",
      description: "A sustainable process for creating nutritious, probiotic-rich yoghurt.",
      image: "/placeholder.svg",
      type: "tech",
      details: "Our yoghurt production project focuses on creating a sustainable and efficient process to make nutritious, probiotic-rich yoghurt. We use locally sourced milk and cultures to produce a healthy and delicious product.",
      howItWorks: [
        "Source fresh, high-quality milk",
        "Heat milk to the correct temperature",
        "Add live cultures and ferment",
        "Cool and package the yoghurt"
      ],
      impact: "This project promotes local dairy farming, provides a nutritious food source, and creates job opportunities in the community."
    },
    // Add more projects here
  ];

  return (
    <DropletAnimation>
      <div className="page-container relative">
        <BackgroundArt />
        <div className="content-card relative z-10">
          <Link to="/" className="back-button">
            <ArrowLeft className="mr-2" /> Back
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="title"
          >
            Food Team
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 p-6 bg-white rounded-3xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-navy-blue">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 p-4 rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <p className="text-sm mt-2">
                    <span className="font-medium">Interest:</span> {member.interest}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <h2 className="text-2xl font-bold mb-6 text-navy-blue">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SliderDocumentationCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DropletAnimation>
  );
};

export default FoodTeam;