import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: "Water Purifier",
    description: "An eco-friendly water purification system using natural materials.",
    image: "/placeholder.svg",
    category: "Environmental Technology"
  },
  {
    id: 2,
    title: "Sustainable Snacks",
    description: "Nutritious snacks made from locally-sourced, organic ingredients.",
    image: "/placeholder.svg",
    category: "Food Technology"
  },
  {
    id: 3,
    title: "Solar Cooker",
    description: "A portable solar-powered cooking device for outdoor use.",
    image: "/placeholder.svg",
    category: "Environmental Technology"
  },
  {
    id: 4,
    title: "Vertical Garden",
    description: "Space-efficient vertical gardening system for urban areas.",
    image: "/placeholder.svg",
    category: "Environmental Technology"
  },
  {
    id: 5,
    title: "Biodegradable Packaging",
    description: "Eco-friendly packaging solutions made from plant-based materials.",
    image: "/placeholder.svg",
    category: "Food Technology"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Projects
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
      </main>
    </div>
  );
};

export default Projects;