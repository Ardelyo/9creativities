import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Droplet } from 'lucide-react';
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const EnvironmentalTeam = () => {
  const teamMembers = [
    { name: "Alice Johnson", role: "Team Lead", interest: "Water Conservation" },
    { name: "Bob Smith", role: "Research Specialist", interest: "Sustainable Materials" },
    { name: "Carol Davis", role: "Project Manager", interest: "Eco-friendly Technologies" },
  ];

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
            Environmental Team
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

export default EnvironmentalTeam;