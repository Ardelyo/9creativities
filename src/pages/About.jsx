import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Lightbulb, Award } from 'lucide-react';
import DropletAnimation from '../components/DropletAnimation';
import BackgroundArt from '../components/BackgroundArt';

const About = () => {
  const teamMembers = [
    { name: "Alice", role: "Manajer Proyek", image: "/placeholder.svg" },
    { name: "Bob", role: "Desainer", image: "/placeholder.svg" },
    { name: "Charlie", role: "Pengembang", image: "/placeholder.svg" },
    { name: "Diana", role: "Pembuat Konten", image: "/placeholder.svg" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 20px rgba(0,0,0,0.1)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <DropletAnimation>
      <div className="min-h-screen bg-white p-4 sm:p-8 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors mb-8 inline-block text-xl">
            <ArrowLeft className="mr-2 inline" /> Kembali
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6">
              Tentang <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Nine Creativities</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"
            />
          </motion.div>
          
          {[
            { title: "Tim Kami", icon: Users, content: (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div key={index} className="text-center" whileHover={{ scale: 1.1, rotateY: 15 }} transition={{ type: "spring", stiffness: 300 }}>
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <img src={member.image} alt={member.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover" />
                    </div>
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">{member.name}</p>
                    <p className="text-blue-600 text-xs sm:text-sm">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            )},
            { title: "Misi Kami", icon: Lightbulb, content: "Nine Creativities bertujuan untuk menampilkan proyek inovatif yang dikembangkan oleh siswa Kelas 9C. Kami ingin menunjukkan kreativitas dan kerja keras teman-teman kami di bidang teknologi lingkungan dan pangan." },
            { title: "Visi Kami", icon: Award, content: "Kami membayangkan masa depan di mana anak muda berkontribusi besar dalam menyelesaikan masalah dunia nyata. Melalui proyek kami, kami berusaha menginspirasi dan mendorong perubahan positif di komunitas kami dan sekitarnya." }
          ].map((section, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="mb-12 p-6 sm:p-8 bg-white rounded-3xl shadow-xl"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 flex items-center">
                <section.icon className="mr-3 text-blue-600" /> {section.title}
              </h2>
              {typeof section.content === 'string' ? (
                <p className="text-gray-600 text-base sm:text-lg">{section.content}</p>
              ) : (
                section.content
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </DropletAnimation>
  );
};

export default About;
