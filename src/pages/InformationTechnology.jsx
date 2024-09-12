import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Users, FileText, Camera } from 'lucide-react';
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const InformationTechnology = () => {
  const teamMembers = [
    { name: "Andi Pratama", role: "Pengembang Web", interest: "Desain UI/UX", image: "/placeholder.svg" },
    { name: "Budi Santoso", role: "Analis Sistem", interest: "Keamanan Informasi", image: "/placeholder.svg" },
    { name: "Citra Dewi", role: "Manajer Proyek IT", interest: "Agile Development", image: "/placeholder.svg" },
  ];

  const projects = [
    {
      id: 1,
      title: "Website Nine Creativities",
      description: "Platform untuk memperkenalkan proyek-proyek inovatif dari berbagai tim teknologi.",
      image: "/placeholder.svg",
      type: "web",
      details: "Website Nine Creativities adalah platform yang dirancang untuk memperkenalkan dan memamerkan proyek-proyek inovatif dari tim Teknologi Informasi, Komunikasi, Lingkungan, dan Pangan. Website ini menyediakan informasi tentang setiap tim, anggotanya, dan proyek-proyek yang sedang mereka kerjakan.",
      howItWorks: [
        "Pengembangan menggunakan React dan Tailwind CSS",
        "Implementasi animasi dengan Framer Motion",
        "Integrasi dengan API Gemini untuk fitur chatbot Cica",
        "Penggunaan komponen yang dapat digunakan kembali untuk konsistensi desain"
      ],
      impact: "Website ini memungkinkan pengunjung untuk menjelajahi dan mempelajari tentang berbagai proyek teknologi yang dikembangkan oleh siswa, meningkatkan visibilitas dan apresiasi terhadap inovasi teknologi di sekolah.",
      photos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      documentation: "Dokumentasi lengkap meliputi panduan pengembangan, struktur proyek, dan petunjuk deployment."
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
            Tim Teknologi Informasi
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 p-6 bg-white rounded-3xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-navy-blue">Pengenalan Teknologi Informasi</h2>
            <p className="text-gray-700 mb-4">
              Teknologi Informasi (TI) adalah penggunaan komputer dan sistem digital untuk menyimpan, mengambil, mengirim, dan memanipulasi data atau informasi. TI mencakup berbagai aspek yang berkaitan dengan komputasi, termasuk perangkat keras, perangkat lunak, jaringan, dan infrastruktur yang mendukungnya.
            </p>
            <p className="text-gray-700 mb-4">
              Dalam konteks Nine Creativities, tim Teknologi Informasi bertanggung jawab untuk merancang, mengembangkan, dan memelihara website yang Anda jelajahi saat ini. Website ini berfungsi sebagai platform untuk memperkenalkan proyek-proyek inovatif dari berbagai tim teknologi di sekolah kami.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
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
            <Cpu className="mr-2" /> Proyek Kami
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

export default InformationTechnology;