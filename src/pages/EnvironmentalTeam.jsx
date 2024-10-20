import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Droplet, Users, FileText, Camera } from 'lucide-react';
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';
import AISummary from '../components/AISummary';

const EnvironmentalTeam = () => {
  const teamMembers = [
    { name: "Gita Nirmala", role: "Ahli Lingkungan", interest: "Konservasi Air", image: "/placeholder.svg" },
    { name: "Hadi Santoso", role: "Insinyur Lingkungan", interest: "Teknologi Ramah Lingkungan", image: "/placeholder.svg" },
    { name: "Indah Pertiwi", role: "Analis Kualitas Air", interest: "Pengujian Air", image: "/placeholder.svg" },
  ];

  const projects = [
    {
      id: 1,
      title: "Filter Air Ramah Lingkungan",
      description: "Sistem pemurnian air menggunakan bahan alami.",
      image: "/placeholder.svg",
      type: "environment",
      details: "Proyek ini bertujuan untuk menciptakan sistem pemurnian air yang efektif dan ramah lingkungan, menggunakan bahan alami seperti pasir, kerikil, dan arang aktif.",
      howItWorks: [
        "Mengumpulkan air kotor",
        "Menyaring melalui lapisan kerikil",
        "Filtrasi lebih lanjut dengan pasir",
        "Menghilangkan bau dan zat kimia dengan arang aktif",
        "Air bersih keluar melalui saluran output"
      ],
      impact: "Proyek ini mendukung keberlanjutan lingkungan dan memberikan akses air bersih bagi masyarakat.",
      photos: [
        "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"
      ],
      documentation: "Dokumentasi proyek mencakup prosedur operasional dan hasil uji kualitas air."
    },
  ];

  return (
    <DropletAnimation>
      <div className="min-h-screen bg-white p-4 sm:p-8 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/" className="text-green-600 hover:text-green-800 transition-colors mb-8 inline-block">
            <ArrowLeft className="mr-2 inline" /> Kembali
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4">
              Tim <span className="text-green-600">Teknologi Lingkungan</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-4"
            />
          </motion.div>
          
          <AISummary>
            Tim Teknologi Lingkungan Nine Creativities berfokus pada pengelolaan berkelanjutan air, udara, dan tanah. 
            Proyek utama mereka adalah Filter Air Ramah Lingkungan, menggunakan bahan alami untuk pemurnian air. 
            Tim ini juga aktif dalam pengalaman lapangan, seperti kunjungan ke fasilitas pengelolaan air lokal, 
            memperkaya pemahaman mereka tentang teknologi lingkungan praktis.
          </AISummary>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800 flex items-center">
              <Users className="mr-2" /> Kenalan dengan Tim Kami
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-green-50 p-6 rounded-2xl text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={member.image} alt={member.name} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-green-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">
                    <span className="font-medium">Minat:</span> {member.interest}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-800 flex items-center">
            <Droplet className="mr-2" /> Proyek Kami
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                <SliderDocumentationCard project={project} />
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800 flex items-center">
                    <Camera className="mr-2" /> Foto Proyek
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {project.photos.map((photo, index) => (
                      <motion.img 
                        key={index} 
                        src={photo} 
                        alt={`${project.title} foto ${index + 1}`} 
                        className="rounded-lg shadow-md w-full h-48 sm:h-64 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    ))}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800 flex items-center">
                    <FileText className="mr-2" /> Dokumentasi
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg">{project.documentation}</p>
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
