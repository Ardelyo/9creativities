import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const EnvironmentalProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Water Filter",
      description: "An eco-friendly water purification system using natural materials.",
      image: "/placeholder.svg",
    },
    // Add more projects here
  ];

  return (
    <div className="page-container">
      <div className="content-card">
        <Link to="/" className="back-button">
          <ArrowLeft className="mr-2" /> Back
        </Link>
        <h1 className="title">Environmental Team Projects</h1>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-circle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <img src={project.image} alt={project.title} className="w-24 h-24 object-cover mt-4 rounded-full" />
            <button className="more-info-button">More Info</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EnvironmentalProjects;