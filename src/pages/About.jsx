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
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: { 
      scale: 1.05,
      rotateY: 15,
      boxShadow: "0px 5px 20px rgba(0,0,0,0.15)"
    }
  };

  return (
    <DropletAnimation>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-4 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/" className="text-blue-300 hover:text-blue-100 transition-colors mb-8 inline-block">
            <ArrowLeft className="mr-2 inline" /> Kembali
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Tentang <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-white">Nine Creativities</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-blue-300 via-blue-500 to-white mx-auto mb-4"
            />
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="mb-8 p-6 md:p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-[20px] shadow-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-300 flex items-center">
              <Users className="mr-2" /> Tim Kami
            </h2>
            <p className="text-gray-300 mb-6">
              Nine Creativities dibuat oleh Kelompok 1, tim siswa yang bersemangat untuk menampilkan proyek inovatif dalam teknologi lingkungan dan pangan.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  whileHover={{ scale: 1.1, rotateY: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                    <img src={member.image} alt={member.name} className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover" />
                  </div>
                  <p className="font-semibold text-white text-sm md:text-base">{member.name}</p>
                  <p className="text-xs md:text-sm text-blue-300">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="mb-8 p-6 md:p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-[20px] shadow-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-300 flex items-center">
              <Lightbulb className="mr-2" /> Misi Kami
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              Nine Creativities bertujuan untuk menampilkan proyek inovatif yang dikembangkan oleh siswa Kelas 9C. 
              Kami ingin menunjukkan kreativitas dan kerja keras teman-teman kami di bidang teknologi lingkungan dan pangan.
            </p>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="mb-8 p-6 md:p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-[20px] shadow-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-300 flex items-center">
              <Award className="mr-2" /> Visi Kami
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              Kami membayangkan masa depan di mana anak muda berkontribusi besar dalam menyelesaikan masalah dunia nyata. 
              Melalui proyek kami, kami berusaha menginspirasi dan mendorong perubahan positif di komunitas kami dan sekitarnya.
            </p>
          </motion.div>
        </div>
      </div>
    </DropletAnimation>
  );
};

export default About;