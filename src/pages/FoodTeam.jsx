import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Utensils, Users, FileText, Camera } from 'lucide-react';
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const FoodTeam = () => {
  const teamMembers = [
    { name: "Joko Widodo", role: "Food Technology Expert", interest: "Food Fermentation", image: "/placeholder.svg" },
    { name: "Kartini Sari", role: "Nutritionist", interest: "Functional Foods", image: "/placeholder.svg" },
    { name: "Laksono Adi", role: "Food Processing Technician", interest: "Natural Preservation", image: "/placeholder.svg" },
  ];

  const projects = [
    {
      id: 1,
      title: "Probiotic Yogurt Production",
      description: "Development of probiotic-rich yogurt using local ingredients.",
      image: "/placeholder.svg",
      type: "food",
      details: "Our Probiotic Yogurt Production project focuses on developing yogurt that is rich in beneficial bacteria (probiotics) using local milk and bacterial cultures. We combine traditional fermentation techniques with modern technology to produce a product that is not only delicious but also promotes digestive health.",
      howItWorks: [
        "Selection of high-quality milk from local dairy farmers",
        "Pasteurization of milk to eliminate unwanted bacteria",
        "Inoculation with selected probiotic cultures",
        "Fermentation under controlled temperature and time",
        "Cooling and packaging of the finished product"
      ],
      impact: "This project supports local dairy farmers, promotes healthy lifestyles through probiotic consumption, and opens up entrepreneurial opportunities in the healthy food industry.",
      photos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      documentation: "Project documentation includes yogurt formulation, standardized production procedures, and laboratory test results for nutritional content and probiotic count."
    },
  ];

  return (
    <DropletAnimation>
      <div className="min-h-screen bg-gray-900 p-8 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors mb-8 inline-block">
            <ArrowLeft className="mr-2 inline" /> Back
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Food Technology Team
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 bg-gray-800 rounded-3xl p-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Introduction to Food Technology</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Food Technology is the application of food science to the selection, preservation, processing, packaging, distribution, and use of safe food. The goal is to produce food that is safe, nutritious, and has a long shelf life, while maintaining or improving its sensory qualities.
            </p>
            <p className="text-gray-300 mb-6 text-lg">
              Our team focuses on developing innovative food products that are not only delicious but also provide additional health benefits. We combine traditional knowledge with modern technology to create foods that support healthy and sustainable lifestyles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16 bg-gray-800 rounded-3xl p-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-8 text-blue-400 flex items-center">
              <Users className="mr-3" /> Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 p-6 rounded-2xl text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-xl font-semibold text-blue-400">{member.name}</h3>
                  <p className="text-gray-300 mb-2">{member.role}</p>
                  <p className="text-blue-300">
                    <span className="font-medium">Interest:</span> {member.interest}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <h2 className="text-4xl font-bold mb-8 text-blue-400 flex items-center">
            <Utensils className="mr-3" /> Our Projects
          </h2>
          <div className="grid grid-cols-1 gap-16">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800 rounded-3xl overflow-hidden shadow-xl"
              >
                <SliderDocumentationCard project={project} />
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-6 text-blue-400 flex items-center">
                    <Camera className="mr-3" /> Project Photos
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {project.photos.map((photo, index) => (
                      <motion.img 
                        key={index} 
                        src={photo} 
                        alt={`${project.title} photo ${index + 1}`} 
                        className="rounded-2xl shadow-md w-full h-64 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-blue-400 flex items-center">
                    <FileText className="mr-3" /> Documentation
                  </h3>
                  <p className="text-gray-300 text-lg">{project.documentation}</p>
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
