import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wifi, Users, FileText, Camera } from 'lucide-react';
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';
import AISummary from '../components/AISummary';

const CommunicationTechnology = () => {
  const teamMembers = [
    { name: "Julia", role: "PR Specialist", interest: "Media Relations", image: "/2_20240926_191949_0000.png" },
    { name: "Zaki", role: "Spesialis Media Sosial", interest: "Digital Marketing", image: "/3_20240926_191950_0001.png" },
    { name: "Pandu", role: "Content Creator", interest: "Video Production", image: "/4_20240926_191950_0002.png" },
    { name: "Ilham", role: "Graphic Designer", interest: "Visual Communication", image: "/5_20240926_191951_0003.png" },
    { name: "Rahmat", role: "Copywriter", interest: "Storytelling", image: "/6_20240926_191951_0004.png" },
    { name: "Salwa", role: "Community Manager", interest: "Social Media Engagement", image: "/7_20240926_191951_0005.png" },
    { name: "Keyla", role: "Data Analyst", interest: "Analytics and Reporting", image: "/8_20240926_191952_0006.png" },
    { name: "Andika", role: "SEO Specialist", interest: "Search Engine Optimization", image: "/9_20240926_191952_0007.png" },
    { name: "Aulia", role: "Event Coordinator", interest: "Virtual Events", image: "/10_20240926_191952_0008.png" },
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
        "Optimisasi konten untuk SEO dan aksesibilitas",
        "Distribusi konten melalui platform media sosial dan website Nine Creativities",
        "Engagement dengan audiens melalui komentar dan diskusi online",
        "Pengukuran dampak dan engagement untuk perbaikan konten berkelanjutan"
      ],
      impact: "Kampanye ini meningkatkan kesadaran dan pemahaman masyarakat tentang perkembangan teknologi terkini, mendorong minat dalam sains dan teknologi di kalangan pelajar, serta mempromosikan inovasi teknologi yang dikembangkan di sekolah kami.",
      photos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      documentation: "Dokumentasi proyek meliputi strategi konten, panduan gaya, analisis metrik engagement, dan laporan dampak kampanye."
    },
  ];

  return (
    <DropletAnimation>
      <div className="min-h-screen bg-white p-4 sm:p-8 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/" className="text-purple-600 hover:text-purple-800 transition-colors mb-8 inline-block">
            <ArrowLeft className="mr-2 inline" /> Kembali
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4">
              Tim <span className="text-purple-600">Teknologi Komunikasi</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-4"
            />
          </motion.div>
          
          <AISummary>
            Tim Teknologi Komunikasi Nine Creativities berfokus pada penciptaan konten edukatif tentang teknologi. 
            Proyek utama mereka adalah Kampanye Edukasi Teknologi, yang bertujuan mengkomunikasikan ide-ide kompleks 
            dalam format yang menarik dan mudah dipahami. Tim ini menggunakan berbagai media digital untuk menyebarkan 
            informasi tentang teknologi informasi, komunikasi, pangan, dan lingkungan kepada berbagai kalangan.
          </AISummary>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 flex items-center">
              <Users className="mr-2" /> Kenalan dengan Tim Kami
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-purple-50 p-6 rounded-2xl text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={member.image} alt={member.name} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-purple-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">
                    <span className="font-medium">Minat:</span> {member.interest}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-800 flex items-center">
            <Wifi className="mr-2" /> Proyek Kami
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

export default CommunicationTechnology;
