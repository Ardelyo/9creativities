import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wifi, Users, FileText, Camera } from 'lucide-react';
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const CommunicationTechnology = () => {
  const teamMembers = [
    { name: "Dian Purnama", role: "Spesialis Konten Digital", interest: "Media Sosial", image: "/placeholder.svg" },
    { name: "Eko Prasetyo", role: "Desainer Grafis", interest: "Infografis", image: "/placeholder.svg" },
    { name: "Fira Rahmawati", role: "Penulis Teknis", interest: "Storytelling Digital", image: "/placeholder.svg" },
  ];

  const projects = [
    {
      id: 1,
      title: "Kampanye Edukasi Teknologi",
      description: "Seri konten digital untuk mengedukasi tentang teknologi informasi, komunikasi, pangan, dan lingkungan.",
      image: "/placeholder.svg",
      type: "digital",
      details: "Proyek Kampanye Edukasi Teknologi bertujuan untuk menciptakan serangkaian konten digital yang informatif dan menarik tentang berbagai aspek teknologi. Konten ini mencakup topik-topik seputar teknologi informasi, komunikasi, pangan, dan lingkungan, disajikan dalam format yang mudah dipahami oleh berbagai kalangan.",
      howItWorks: [
        "Riset mendalam tentang topik-topik teknologi terkini",
        "Pembuatan konten dalam berbagai format (artikel, infografis, video pendek)",
        "Distribusi konten melalui platform media sosial dan website Nine Creativities",
        "Pengukuran dampak dan engagement untuk perbaikan konten berkelanjutan"
      ],
      impact: "Kampanye ini meningkatkan kesadaran dan pemahaman masyarakat tentang perkembangan teknologi terkini, mendorong minat dalam sains dan teknologi di kalangan pelajar, serta mempromosikan inovasi teknologi yang dikembangkan di sekolah kami.",
      photos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      documentation: "Dokumentasi proyek meliputi strategi konten, panduan gaya, dan analisis metrik engagement."
    },
  ];

  return (
    <DropletAnimation>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-700 p-4 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-6xl mx-auto relative z-10 bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mt-16">
          <Link to="/" className="text-purple-300 hover:text-purple-100 transition-colors mb-8 inline-block">
            <ArrowLeft className="mr-2 inline" /> Kembali
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-purple-100 mb-8 text-center"
          >
            Tim Teknologi Komunikasi
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 p-6 bg-purple-800 bg-opacity-50 rounded-3xl shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <h2 className="text-3xl font-bold mb-4 text-purple-200">Pengenalan Teknologi Komunikasi</h2>
            <p className="text-purple-100 mb-4 text-lg">
              Teknologi Komunikasi adalah perangkat dan sistem yang memungkinkan pertukaran informasi antara individu atau kelompok. Ini mencakup berbagai media dan alat, mulai dari telepon seluler hingga internet dan media sosial, yang memfasilitasi komunikasi jarak jauh dan penyebaran informasi secara luas.
            </p>
            <p className="text-purple-100 mb-4 text-lg">
              Dalam konteks Nine Creativities, tim Teknologi Komunikasi berperan penting dalam menciptakan dan menyebarkan konten edukatif tentang berbagai aspek teknologi. Mereka bertanggung jawab untuk mengkomunikasikan ide-ide kompleks tentang teknologi informasi, komunikasi, pangan, dan lingkungan dalam format yang menarik dan mudah dipahami oleh berbagai kalangan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12 p-6 bg-purple-800 bg-opacity-50 rounded-3xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-purple-200 flex items-center">
              <Users className="mr-2" /> Kenalan dengan Tim Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-purple-700 p-6 rounded-2xl text-center shadow-lg transform hover:rotate-3 transition-all duration-300"
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-xl font-semibold text-purple-200">{member.name}</h3>
                  <p className="text-purple-300 mb-2">{member.role}</p>
                  <p className="text-purple-400">
                    <span className="font-medium">Minat:</span> {member.interest}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <h2 className="text-4xl font-bold mb-8 text-purple-100 flex items-center">
            <Wifi className="mr-2" /> Proyek Kami
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-purple-800 bg-opacity-50 rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <SliderDocumentationCard project={project} />
                <div className="p-6">
                  <h3 className="text-3xl font-bold mb-4 text-purple-200 flex items-center">
                    <Camera className="mr-2" /> Foto Proyek
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {project.photos.map((photo, index) => (
                      <motion.img 
                        key={index} 
                        src={photo} 
                        alt={`${project.title} foto ${index + 1}`} 
                        className="rounded-lg shadow-md w-full h-64 object-cover"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-purple-200 flex items-center">
                    <FileText className="mr-2" /> Dokumentasi
                  </h3>
                  <p className="text-purple-100 text-lg">{project.documentation}</p>
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