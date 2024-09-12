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
            Tim Teknologi Komunikasi
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 p-6 bg-white rounded-3xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-navy-blue">Pengenalan Teknologi Komunikasi</h2>
            <p className="text-gray-700 mb-4">
              Teknologi Komunikasi adalah perangkat dan sistem yang memungkinkan pertukaran informasi antara individu atau kelompok. Ini mencakup berbagai media dan alat, mulai dari telepon seluler hingga internet dan media sosial, yang memfasilitasi komunikasi jarak jauh dan penyebaran informasi secara luas.
            </p>
            <p className="text-gray-700 mb-4">
              Dalam konteks Nine Creativities, tim Teknologi Komunikasi berperan penting dalam menciptakan dan menyebarkan konten edukatif tentang berbagai aspek teknologi. Mereka bertanggung jawab untuk mengkomunikasikan ide-ide kompleks tentang teknologi informasi, komunikasi, pangan, dan lingkungan dalam format yang menarik dan mudah dipahami oleh berbagai kalangan.
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
            <Wifi className="mr-2" /> Proyek Kami
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

export default CommunicationTechnology;