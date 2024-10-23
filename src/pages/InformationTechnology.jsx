import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Users, FileText, Camera } from 'lucide-react';
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const InformationTechnology = () => {
  const teamMembers = [
    { name: "Lio", role: "Ketua Tim", image: "/ardellio.jpg" },
    { name: "Cinta", role: "Anggota Tim", image: "/cinta.jpg" },
    { name: "Satria", role: "Anggota Tim", image: "/Satria.jpg" },
    { name: "Dimas", role: "Anggota Tim", image: "/dimas.jpg" },
    { name: "Alea", role: "Anggota Tim", image: "/Alea.jpg" },
    { name: "Agnia", role: "Anggota Tim", image: "/Agnia.jpg" },
    { name: "Ritme", role: "Anggota Tim", image: "/IMG_20240920_161517.png" },
    { name: "Geovart", role: "Anggota Tim", image: "/geo.png" },
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
                </motion.div>
              ))}
            </div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-800 flex items-center">
            <Cpu className="mr-2" /> Proyek Kami
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {/* Projects mapping will go here */}
          </div>
        </div>
      </div>
    </DropletAnimation>
  );
};

export default InformationTechnology;
