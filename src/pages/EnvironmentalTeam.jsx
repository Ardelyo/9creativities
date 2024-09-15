import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Droplet, Users, FileText, Camera } from 'lucide-react';
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const EnvironmentalTeam = () => {
  const teamMembers = [
    { name: "Gita Nirmala", role: "Environmental Specialist", interest: "Water Conservation", image: "/placeholder.svg" },
    { name: "Hadi Santoso", role: "Environmental Engineer", interest: "Wastewater Treatment", image: "/placeholder.svg" },
    { name: "Indah Pertiwi", role: "Water Quality Analyst", interest: "Aquatic Ecosystem Monitoring", image: "/placeholder.svg" },
  ];

  const projects = [
    {
      id: 1,
      title: "Eco-Friendly Water Filter",
      description: "Water purification system using natural and sustainable materials.",
      image: "/placeholder.svg",
      type: "water",
      details: "Our Eco-Friendly Water Filter project uses a combination of natural materials such as sand, gravel, activated charcoal, and aquatic plants to create an effective and environmentally friendly water purification system. This system is designed to remove contaminants and provide clean water for local communities.",
      howItWorks: [
        "Collection and preparation of natural filter materials",
        "Assembly of filter layers in a sustainable container",
        "Water filtration process through layers of natural materials",
        "Testing of filtered water quality",
        "Regular maintenance and regeneration of filter materials"
      ],
      impact: "This project can provide affordable access to clean water for communities, reduce the risk of waterborne diseases, and raise awareness about the importance of water conservation.",
      photos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      documentation: "Comprehensive documentation includes system design, laboratory test results, and maintenance guidelines."
    },
  ];

  return (
    <DropletAnimation>
      <div className="min-h-screen bg-gray-900 p-8 sm:p-16 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-8xl mx-auto relative z-10">
          <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors mb-16 inline-block text-2xl">
            <ArrowLeft className="mr-3 inline w-8 h-8" /> Back
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h1 className="text-8xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Environmental Technology Team
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-2 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-16"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-24 bg-gray-800 rounded-3xl p-16 shadow-xl"
          >
            <h2 className="text-5xl font-bold mb-10 text-blue-400">Introduction to Environmental Technology</h2>
            <p className="text-gray-300 mb-10 text-2xl leading-relaxed">
              Environmental Technology is the application of scientific and engineering principles to protect the natural environment and natural resources, and to mitigate the negative impacts of human activity on ecosystems. Our focus is primarily on water management, air and soil quality, and the development of sustainable solutions for environmental challenges.
            </p>
            <p className="text-gray-300 mb-10 text-2xl leading-relaxed">
              Our team is committed to developing innovative solutions that help preserve the environment and improve the quality of life for communities, with a special focus on water management and conservation.
            </p>
            <motion.h3 
              className="text-4xl font-semibold mb-8 text-blue-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Visit to PDAM Tirtawening
            </motion.h3>
            <p className="text-gray-300 text-2xl leading-relaxed">
              As part of our project, the Environmental Technology team had the opportunity to visit PDAM Tirtawening. This visit provided valuable insights into large-scale clean water treatment processes and efficient water management practices. This experience enriched our understanding of water treatment technologies and inspired the development of our Eco-Friendly Water Filter project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-24 bg-gray-800 rounded-3xl p-16 shadow-xl"
          >
            <h2 className="text-5xl font-bold mb-16 text-blue-400 flex items-center">
              <Users className="mr-6 w-12 h-12" /> Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 p-10 rounded-2xl text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-8 object-cover" />
                  <h3 className="text-3xl font-semibold text-blue-400 mb-4">{member.name}</h3>
                  <p className="text-gray-300 mb-6 text-xl">{member.role}</p>
                  <p className="text-blue-300 text-xl">
                    <span className="font-medium">Interest:</span> {member.interest}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <h2 className="text-6xl font-bold mb-16 text-blue-400 flex items-center">
            <Droplet className="mr-6 w-16 h-16" /> Our Projects
          </h2>
          <div className="grid grid-cols-1 gap-24">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800 rounded-3xl overflow-hidden shadow-xl"
              >
                <SliderDocumentationCard project={project} />
                <div className="p-16">
                  <h3 className="text-5xl font-bold mb-10 text-blue-400 flex items-center">
                    <Camera className="mr-6 w-12 h-12" /> Project Photos
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                    {project.photos.map((photo, index) => (
                      <motion.img 
                        key={index} 
                        src={photo} 
                        alt={`${project.title} photo ${index + 1}`} 
                        className="rounded-2xl shadow-md w-full h-96 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    ))}
                  </div>
                  <h3 className="text-5xl font-bold mb-10 text-blue-400 flex items-center">
                    <FileText className="mr-6 w-12 h-12" /> Documentation
                  </h3>
                  <p className="text-gray-300 text-2xl leading-relaxed">{project.documentation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DropletAnimation>
  );
};

export default EnvironmentalTeam;
