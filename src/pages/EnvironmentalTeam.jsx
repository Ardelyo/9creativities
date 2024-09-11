import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const EnvironmentalTeam = () => {
  const projects = [
    {
      id: 1,
      title: "Water Filter",
      description: "An eco-friendly water purification system using natural materials.",
      image: "/placeholder.svg",
      details: "Our water filter project uses sustainable materials to create an affordable and effective water purification system. It's designed to remove contaminants and provide clean drinking water for communities in need.",
      process: [
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
    <div className="page-container">
      <div className="content-card">
        <Link to="/" className="back-button">
          <ArrowLeft className="mr-2" /> Back
        </Link>
        <h1 className="title">Environmental Team Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-circle bg-white p-6 rounded-3xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="project-title text-2xl font-bold mb-4">{project.title}</h2>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-2xl" />
              <p className="project-description mb-4">{project.description}</p>
              <h3 className="text-xl font-semibold mb-2">How It Works</h3>
              <ol className="list-decimal list-inside mb-4">
                {project.process.map((step, index) => (
                  <li key={index} className="mb-1">{step}</li>
                ))}
              </ol>
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p>{project.impact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalTeam;