import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wifi, Users, FileText, Camera } from 'lucide-react';
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const CommunicationTechnology = () => {
  const teamMembers = [
    { name: "Julia", role: "Ketua Tim", image: "/2_20240926_191949_0000.png" },
    { name: "Zaki", role: "Anggota Tim", image: "/3_20240926_191950_0001.png" },
    { name: "Pandu", role: "Anggota Tim", image: "/4_20240926_191950_0002.png" },
    { name: "Ilham", role: "Anggota Tim", image: "/5_20240926_191951_0003.png" },
    { name: "Rahmat", role: "Anggota Tim", image: "/6_20240926_191951_0004.png" },
    { name: "Salwa", role: "Anggota Tim", image: "/7_20240926_191951_0005.png" },
    { name: "Keyla", role: "Anggota Tim", image: "/8_20240926_191952_0006.png" },
    { name: "Andika", role: "Anggota Tim", image: "/9_20240926_191952_0007.png" },
    { name: "Aulia", role: "Anggota Tim", image: "/10_20240926_191952_0008.png" },
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">Pengenalan Teknologi Komunikasi</h2>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              Teknologi Komunikasi adalah perangkat dan sistem yang memungkinkan pertukaran informasi antara individu atau kelompok. Ini mencakup berbagai media dan alat, mulai dari telepon seluler hingga internet dan media sosial, yang memfasilitasi komunikasi jarak jauh dan penyebaran informasi secara luas.
            </p>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              Dalam konteks Nine Creativities, tim Teknologi Komunikasi berperan penting dalam menciptakan dan menyebarkan konten edukatif tentang berbagai aspek teknologi. Mereka bertanggung jawab untuk mengkomunikasikan ide-ide kompleks tentang teknologi informasi, komunikasi, pangan, dan lingkungan dalam format yang menarik dan mudah dipahami oleh berbagai kalangan.
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
                </motion.div>
              ))}
            </div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-800 flex items-center">
            <Wifi className="mr-2" /> Proyek Kami
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {/* Add your project components here */}
          </div>
        </div>
      </div>
    </DropletAnimation>
  );
};

export default CommunicationTechnology;