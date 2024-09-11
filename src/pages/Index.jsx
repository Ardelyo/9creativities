import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import ProjectBubble from '../components/ProjectBubble';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: "Water Purifier",
    description: "An eco-friendly water purification system using natural materials.",
    image: "/placeholder.svg",
    icon: "/placeholder.svg",
    category: "Environmental Technology"
  },
  {
    id: 2,
    title: "Sustainable Snacks",
    description: "Nutritious snacks made from locally-sourced, organic ingredients.",
    image: "/placeholder.svg",
    icon: "/placeholder.svg",
    category: "Food Technology"
  },
  {
    id: 3,
    title: "Solar Cooker",
    description: "A portable solar-powered cooking device for outdoor use.",
    image: "/placeholder.svg",
    icon: "/placeholder.svg",
    category: "Environmental Technology"
  },
  {
    id: 4,
    title: "Vertical Garden",
    description: "Space-efficient vertical gardening system for urban areas.",
    image: "/placeholder.svg",
    icon: "/placeholder.svg",
    category: "Environmental Technology"
  },
  {
    id: 5,
    title: "Biodegradable Packaging",
    description: "Eco-friendly packaging solutions made from plant-based materials.",
    image: "/placeholder.svg",
    icon: "/placeholder.svg",
    category: "Food Technology"
  }
];

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
          Nine Creativities
        </motion.h1>
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
        >
          {projects.map(project => (
            <ProjectBubble key={project.id} project={project} onClick={setSelectedProject} />
          ))}
        </motion.div>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard project={selectedProject} />
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Index;