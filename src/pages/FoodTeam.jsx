import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Utensils, Users, FileText, Camera } from 'lucide-react';
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const FoodTeam = () => {
  const teamMembers = [
    { name: "David Lee", role: "Ahli Kuliner", interest: "Memasak Berkelanjutan", image: "/placeholder.svg" },
    { name: "Emma Wilson", role: "Spesialis Gizi", interest: "Diet Nabati", image: "/placeholder.svg" },
    { name: "Frank Miller", role: "Peneliti Teknologi Pangan", interest: "Pengawetan Makanan", image: "/placeholder.svg" },
  ];

  const projects = [
    {
      id: 1,
      title: "Produksi Yoghurt",
      description: "Proses berkelanjutan untuk membuat yoghurt bergizi kaya probiotik.",
      image: "/placeholder.svg",
      type: "tech",
      details: "Proyek produksi yoghurt kami berfokus pada menciptakan proses yang berkelanjutan dan efisien untuk membuat yoghurt bergizi kaya probiotik. Kami menggunakan susu dan kultur lokal untuk menghasilkan produk yang sehat dan lezat.",
      howItWorks: [
        "Dapatkan susu segar berkualitas tinggi",
        "Panaskan susu hingga suhu yang tepat",
        "Tambahkan kultur hidup dan fermentasi",
        "Dinginkan dan kemas yoghurt"
      ],
      impact: "Proyek ini mendukung peternakan susu lokal, menyediakan sumber makanan bergizi, dan menciptakan peluang kerja di masyarakat.",
      photos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      documentation: "Dokumentasi lengkap meliputi proses produksi yoghurt, langkah-langkah pengendalian mutu, dan analisis gizi."
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
            Tim Pangan
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
            <Utensils className="mr-2" /> Proyek Kami
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

export default FoodTeam;