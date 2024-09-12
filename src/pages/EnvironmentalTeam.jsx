import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Droplet, Users, FileText, Camera } from 'lucide-react';
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const EnvironmentalTeam = () => {
  const teamMembers = [
    { name: "Alice Johnson", role: "Ketua Tim", interest: "Konservasi Air", image: "/placeholder.svg" },
    { name: "Bob Smith", role: "Spesialis Riset", interest: "Material Berkelanjutan", image: "/placeholder.svg" },
    { name: "Carol Davis", role: "Manajer Proyek", interest: "Teknologi Ramah Lingkungan", image: "/placeholder.svg" },
  ];

  const projects = [
    {
      id: 1,
      title: "Filter Air",
      description: "Sistem pemurnian air ramah lingkungan menggunakan bahan alami.",
      image: "/placeholder.svg",
      type: "water",
      details: "Proyek filter air kami menggunakan bahan berkelanjutan untuk menciptakan sistem pemurnian air yang terjangkau dan efektif. Dirancang untuk menghilangkan kontaminan dan menyediakan air minum bersih untuk masyarakat yang membutuhkan.",
      howItWorks: [
        "Kumpulkan bahan penyaring alami (pasir, kerikil, arang)",
        "Susun lapisan dalam wadah",
        "Tuangkan air tercemar melalui filter",
        "Kumpulkan dan uji air yang telah disaring"
      ],
      impact: "Proyek ini dapat menyediakan air bersih untuk ratusan orang, mengurangi penyakit yang ditularkan melalui air dan meningkatkan kesehatan masyarakat secara keseluruhan.",
      photos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      documentation: "Dokumentasi proyek terperinci termasuk temuan penelitian, spesifikasi bahan, dan hasil pengujian."
    },
  ];

  return (
    <DropletAnimation>
      <div className="page-container relative">
        <BackgroundArt />
        <div className="content-card relative z-10">
          <Link to="/" className="back-button">
            <ArrowLeft className="mr-2" /> Kembali
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="title text-4xl font-bold text-navy-blue mb-8"
          >
            Tim Lingkungan
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 p-6 bg-white rounded-3xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-navy-blue flex items-center">
              <Users className="mr-2" /> Kenalan dengan Tim Kami
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
                    <span className="font-medium">Minat:</span> {member.interest}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <h2 className="text-3xl font-bold mb-8 text-navy-blue flex items-center">
            <Droplet className="mr-2" /> Proyek Kami
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
                    <Camera className="mr-2" /> Foto Proyek
                  </h3>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.photos.map((photo, index) => (
                      <img key={index} src={photo} alt={`${project.title} foto ${index + 1}`} className="rounded-lg shadow-md" />
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-navy-blue flex items-center">
                    <FileText className="mr-2" /> Dokumentasi
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

export default EnvironmentalTeam;