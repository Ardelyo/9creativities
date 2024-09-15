import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wifi, Users, FileText, Camera } from 'lucide-react';
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const CommunicationTechnology = () => {
  const teamMembers = [
    { name: "Dian Purnama", role: "Digital Content Specialist", interest: "Social Media", image: "/placeholder.svg" },
    { name: "Eko Prasetyo", role: "Graphic Designer", interest: "Infographics", image: "/placeholder.svg" },
    { name: "Fira Rahmawati", role: "Technical Writer", interest: "Digital Storytelling", image: "/placeholder.svg" },
  ];

  const projects = [
    {
      id: 1,
      title: "Technology Education Campaign",
      description: "Series of digital content to educate about information, communication, food, and environmental technologies.",
      image: "/placeholder.svg",
      type: "digital",
      details: "The Technology Education Campaign project aims to create a series of informative and engaging digital content about various aspects of technology. This content covers topics related to information technology, communication, food, and environmental technologies, presented in a format that is easily understood by various audiences.",
      howItWorks: [
        "In-depth research on current technology topics",
        "Content creation in various formats (articles, infographics, short videos)",
        "Distribution of content through Nine Creativities' social media platforms and website",
        "Measurement of impact and engagement for continuous content improvement"
      ],
      impact: "This campaign increases public awareness and understanding of current technological developments, encourages interest in science and technology among students, and promotes technological innovations developed at our school.",
      photos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      documentation: "Project documentation includes content strategy, style guide, and engagement metric analysis."
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
              Communication Technology Team
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
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Introduction to Communication Technology</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Communication Technology refers to the tools and systems that enable the exchange of information between individuals or groups. This includes various media and tools, from mobile phones to the internet and social media, which facilitate long-distance communication and wide dissemination of information.
            </p>
            <p className="text-gray-300 mb-6 text-lg">
              In the context of Nine Creativities, the Communication Technology team plays a crucial role in creating and disseminating educational content about various aspects of technology. They are responsible for communicating complex ideas about information technology, communication, food, and environmental technologies in engaging and easily understood formats for various audiences.
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
            <Wifi className="mr-3" /> Our Projects
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

export default CommunicationTechnology;
