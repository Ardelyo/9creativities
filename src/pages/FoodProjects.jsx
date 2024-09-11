import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: "Yoghurt Production",
    description: "A sustainable process for creating nutritious, probiotic-rich yoghurt.",
    details: "Our yoghurt production project focuses on developing a sustainable and efficient method for creating probiotic-rich yoghurt. By optimizing fermentation processes and using locally sourced ingredients, we've created a product that's not only delicious but also promotes gut health and supports local dairy farmers.",
    image: "/placeholder.svg",
  },
  // Add more food projects here
];

const FoodProjects = () => {
  return (
    <div className="min-h-screen">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Food Team Projects
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

export default FoodProjects;