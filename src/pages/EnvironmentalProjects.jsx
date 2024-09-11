import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: "Water Filter",
    description: "An eco-friendly water purification system using natural materials.",
    details: "Our water filter project utilizes sustainable materials such as activated charcoal, sand, and gravel to create an effective and environmentally friendly water purification system. This innovative design is not only cost-effective but also easily implementable in various settings, from households to community centers.",
    image: "/placeholder.svg",
  },
  // Add more environmental projects here
];

const EnvironmentalProjects = () => {
  return (
    <div className="min-h-screen">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Environmental Team Projects
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, staggerChildren: 0.1 }}
      >
        {projects.map(project => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default EnvironmentalProjects;