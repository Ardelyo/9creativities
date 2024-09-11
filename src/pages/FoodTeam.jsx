import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Utensils, Users, FileText, Camera } from 'lucide-react';
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const FoodTeam = () => {
  const teamMembers = [
    { name: "David Lee", role: "Culinary Expert", interest: "Sustainable Cooking", image: "/placeholder.svg" },
    { name: "Emma Wilson", role: "Nutrition Specialist", interest: "Plant-based Diets", image: "/placeholder.svg" },
    { name: "Frank Miller", role: "Food Technology Researcher", interest: "Food Preservation", image: "/placeholder.svg" },
  ];

  const projects = [
    {
      id: 1,
      title: "Yoghurt Production",
      description: "A sustainable process for creating nutritious, probiotic-rich yoghurt.",
      image: "/placeholder.svg",
      type: "tech",
      details: "Our yoghurt production project focuses on creating a sustainable and efficient process to make nutritious, probiotic-rich yoghurt. We use locally sourced milk and cultures to produce a healthy and delicious product.",
      howItWorks: [
        "Source fresh, high-quality milk",
        "Heat milk to the correct temperature",
        "Add live cultures and ferment",
        "Cool and package the yoghurt"
      ],
      impact: "This project promotes local dairy farming, provides a nutritious food source, and creates job opportunities in the community.",
      photos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      documentation: "Comprehensive documentation covering the yoghurt production process, quality control measures, and nutritional analysis."
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
            className="title text-4xl font-bold text-navy-blue mb-8"
          >
            Food Team
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 p-6 bg-white rounded-3xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-navy-blue flex items-center">
              <Users className="mr-2" /> Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 p-6 rounded-2xl text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-lg font-semibold text-navy-blue">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                  <p className="text-sm">
                    <span className="font-medium">Interest:</span> {member.interest}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <h2 className="text-3xl font-bold mb-8 text-navy-blue flex items-center">
            <Utensils className="mr-2" /> Our Projects
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden"
              >
                <SliderDocumentationCard project={project} />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-navy-blue flex items-center">
                    <Camera className="mr-2" /> Project Photos
                  </h3>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.photos.map((photo, index) => (
                      <img key={index} src={photo} alt={`${project.title} photo ${index + 1}`} className="rounded-lg shadow-md" />
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-navy-blue flex items-center">
                    <FileText className="mr-2" /> Documentation
                  </h3>
                  <p className="text-gray-700">{project.documentation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DropletAnimation>
  );
};

export default FoodTeam;