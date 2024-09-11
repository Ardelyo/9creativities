import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Yoghurt Production",
    description: "A sustainable process for creating nutritious, probiotic-rich yoghurt.",
    details: "Our yoghurt production project focuses on developing a sustainable and efficient method for creating probiotic-rich yoghurt. By optimizing fermentation processes and using locally sourced ingredients, we've created a product that's not only delicious but also promotes gut health and supports local dairy farmers.",
    image: "/placeholder.svg",
    howItWorks: [
      "Fresh milk is sourced from local dairy farms",
      "The milk is pasteurized to eliminate harmful bacteria",
      "Beneficial bacteria cultures are added to the milk",
      "The mixture is incubated at a controlled temperature for several hours",
      "The yoghurt is cooled and packaged for distribution",
    ],
    impact: "This project promotes local agriculture, improves community health through probiotic consumption, and reduces carbon footprint by minimizing transportation of dairy products.",
  },
  // Add more food projects here
];

const FoodProjects = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <Link to="/" className="inline-block mb-4">
        <Button variant="ghost" className="text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </Link>
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-primary"
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
            className="bubble-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-lg font-semibold mb-2">How It Works</h3>
            <ol className="list-decimal list-inside mb-4">
              {project.howItWorks.map((step, index) => (
                <li key={index} className="mb-1">{step}</li>
              ))}
            </ol>
            <h3 className="text-lg font-semibold mb-2">Impact</h3>
            <p className="text-gray-700">{project.impact}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FoodProjects;