import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import BackgroundArt from '../components/BackgroundArt';

const EnvironmentalTeam = () => {
  const projects = [
    {
      id: 1,
      title: "Water Filter",
      description: "An eco-friendly water purification system using natural materials.",
      image: "/placeholder.svg",
      type: "water",
      details: "Our water filter project uses sustainable materials to create an affordable and effective water purification system. It's designed to remove contaminants and provide clean drinking water for communities in need.",
      howItWorks: [
        "Collect natural filtering materials (sand, gravel, charcoal)",
        "Assemble layers in a container",
        "Pour contaminated water through the filter",
        "Collect and test the filtered water"
      ],
      impact: "This project can provide clean water to hundreds of people, reducing waterborne diseases and improving overall community health."
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
          Environmental Team Projects
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

export default EnvironmentalTeam;