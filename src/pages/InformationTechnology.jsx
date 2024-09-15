import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Users, FileText, Camera } from 'lucide-react';
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const InformationTechnology = () => {
  const teamMembers = [
    { name: "Andi Pratama", role: "Web Developer", interest: "UI/UX Design", image: "/placeholder.svg" },
    { name: "Budi Santoso", role: "System Analyst", interest: "Information Security", image: "/placeholder.svg" },
    { name: "Citra Dewi", role: "IT Project Manager", interest: "Agile Development", image: "/placeholder.svg" },
  ];

  const projects = [
    {
      id: 1,
      title: "Nine Creativities Website",
      description: "Platform to showcase innovative projects from various technology teams.",
      image: "/placeholder.svg",
      type: "web",
      details: "The Nine Creativities Website is a platform designed to introduce and showcase innovative projects from the Information Technology, Communication, Environmental, and Food Technology teams. This website provides information about each team, its members, and the projects they are working on.",
      howItWorks: [
        "Development using React and Tailwind CSS",
        "Implementation of animations with Framer Motion",
        "Integration with Gemini API for the Cica chatbot feature",
        "Use of reusable components for design consistency"
      ],
      impact: "This website allows visitors to explore and learn about various technology projects developed by students, increasing visibility and appreciation for technological innovation in schools.",
      photos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      documentation: "Comprehensive documentation includes development guidelines, project structure, and deployment instructions."
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
              Information Technology Team
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
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Introduction to Information Technology</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Information Technology (IT) is the use of computers and digital systems to store, retrieve, transmit, and manipulate data or information. IT encompasses various aspects related to computing, including hardware, software, networks, and the infrastructure that supports them.
            </p>
            <p className="text-gray-300 mb-6 text-lg">
              In the context of Nine Creativities, the Information Technology team is responsible for designing, developing, and maintaining the website you are exploring right now. This website serves as a platform to introduce innovative projects from various technology teams in our school.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8,delay: 0.4 }}
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
            <Cpu className="mr-3" /> Our Projects
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

export default InformationTechnology;
