import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import BackgroundArt from '../components/BackgroundArt';

const FoodTeam = () => {
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
          Food Team Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodTeam;