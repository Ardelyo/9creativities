import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Users, FileText, Camera } from 'lucide-react';
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';
import AISummary from '../components/AISummary';

const InformationTechnology = () => {
  const teamMembers = [
    { name: "Ardellio", role: "Pengembang Web", interest: "Frontend Development", image: "/ardellio.jpg" },
    { name: "Cinta", role: "Dokumentasi", interest: "Technical Writing", image: "/cinta.jpg" },
    { name: "Satria", role: "Tim Kreatif", interest: "UI/UX Design", image: "/Satria.jpg" },
    { name: "Dimas", role: "Pengumpul Informasi", interest: "Research", image: "/dimas.jpg" },
    { name: "Alea", role: "Dokumentasi", interest: "Content Creation", image: "/Alea.jpg" },
    { name: "Agnia", role: "Dokumentasi", interest: "Project Management", image: "/Agnia.jpg" },
    { name: "Ritme", role: "Tim Kreatif", interest: "Graphic Design", image: "/IMG_20240920_161517.png" },
    { name: "Geovart", role: "Pengembang Web", interest: "Backend Development", image: "/geo.png" },
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
        "Integrasi dengan API Gemini untuk fitur chatbot Robot C",
        "Penggunaan komponen yang dapat digunakan kembali untuk konsistensi desain",
        "Implementasi routing dengan React Router untuk navigasi halaman",
        "Optimisasi performa dengan lazy loading dan code splitting"
      ],
      impact: "Website ini memungkinkan pengunjung untuk menjelajahi dan mempelajari tentang berbagai proyek teknologi yang dikembangkan oleh siswa, meningkatkan visibilitas dan apresiasi terhadap inovasi teknologi di sekolah.",
      photos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      documentation: "Dokumentasi lengkap meliputi panduan pengembangan, struktur proyek, dan petunjuk deployment. Termasuk juga dokumentasi API dan panduan kontribusi untuk pengembang masa depan."
    },
  ];

  return (
    <DropletAnimation>
      <div className="min-h-screen bg-white p-4 sm:p-8 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors mb-8 inline-block">
            <ArrowLeft className="mr-2 inline" /> Kembali
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4">
              Tim <span className="text-blue-600">Teknologi Informasi</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-4"
            />
          </motion.div>
          
          <AISummary>
            Tim Teknologi Informasi Nine Creativities bertanggung jawab atas pengembangan website Nine Creativities. 
            Menggunakan teknologi modern seperti React dan Tailwind CSS, tim ini menciptakan platform yang memamerkan 
            proyek-proyek inovatif dari berbagai tim teknologi. Fokus utama mereka adalah pada desain yang ramah pengguna 
            dan aksesibilitas, memastikan pengalaman yang menarik dan responsif bagi pengunjung website.
          </AISummary>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">Pengenalan Teknologi Informasi</h2>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              Teknologi Informasi (TI) adalah penggunaan komputer dan sistem digital untuk menyimpan, mengambil, mengirim, dan memanipulasi data atau informasi. TI mencakup berbagai aspek yang berkaitan dengan komputasi, termasuk perangkat keras, perangkat lunak, jaringan, dan infrastruktur yang mendukungnya.
            </p>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              Dalam konteks Nine Creativities, tim Teknologi Informasi bertanggung jawab untuk merancang, mengembangkan, dan memelihara website yang Anda jelajahi saat ini. Website ini berfungsi sebagai platform untuk memperkenalkan proyek-proyek inovatif dari berbagai tim teknologi di sekolah kami.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12 bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 flex items-center">
              <Users className="mr-2" /> Kenalan dengan Tim Kami
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-50 p-6 rounded-2xl text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={member.image} alt={member.name} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">
                    <span className="font-medium">Minat:</span> {member.interest}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-800 flex items-center">
            <Cpu className="mr-2" /> Proyek Kami
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

export default InformationTechnology;
