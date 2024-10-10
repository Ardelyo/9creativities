import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Droplet, Users, FileText, Camera } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';
import EnvironmentalProjects from '../components/EnvironmentalProjects';

const EnvironmentalTeam = () => {
  const teamMembers = [
    { name: "Anandita", role: "Insinyur Lingkungan", interest: "Teknologi Ramah Lingkungan", image: "https://i.ibb.co/3yXt8ft/8-20241010-163755-0006.png" },
    { name: "Bayu", role: "Analis Lingkungan", interest: "Pemantauan Kualitas Udara", image: "https://i.ibb.co/9Nf2TQz/7-20241010-163755-0005.png" },
    { name: "Asyifa R", role: "Ahli Konservasi", interest: "Konservasi Air", image: "https://i.ibb.co/GxzYn3t/6-20241010-163755-0004.png" },
    { name: "Asyifa K", role: "Spesialis Keberlanjutan", interest: "Manajemen Limbah", image: "https://i.ibb.co/xShgDzS/5-20241010-163755-0003.png" },
    { name: "Aldy", role: "Teknisi Lingkungan", interest: "Pengolahan Air Limbah", image: "https://i.ibb.co/9bZJnQV/4-20241010-163755-0002.png" },
    { name: "Aira", role: "Peneliti Ekologi", interest: "Restorasi Ekosistem", image: "https://i.ibb.co/NTTdGTy/3-20241010-163755-0001.png" },
    { name: "Indina", role: "Edukator Lingkungan", interest: "Kesadaran Lingkungan", image: "https://i.ibb.co/YBvSTQT/2-20241010-163755-0000.png" },
    { name: "Novaldo", role: "Analis Kualitas Air", interest: "Pemantauan Ekosistem Air", image: "https://i.ibb.co/3YWdbfT/9-20241010-163756-0007.png" },
  ];

  return (
    <DropletAnimation>
      <div className="min-h-screen bg-white p-4 sm:p-8 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="text-green-600 hover:text-green-800 transition-colors mb-8 inline-block text-xl">
            <ArrowLeft className="mr-2 inline" /> Kembali
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6">
              Tim <span className="text-green-600">Teknologi Lingkungan</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-6"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16 bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800">Pengenalan Teknologi Lingkungan</h2>
            <p className="text-gray-600 mb-6 text-base sm:text-lg">
              Teknologi Lingkungan adalah penerapan prinsip-prinsip ilmiah dan teknik untuk melindungi lingkungan alam dan sumber daya alam, serta mengurangi dampak negatif aktivitas manusia terhadap ekosistem. Fokus utamanya adalah pada pengelolaan air, udara, dan tanah, serta pengembangan solusi berkelanjutan untuk masalah lingkungan.
            </p>
            <p className="text-gray-600 mb-6 text-base sm:text-lg">
              Tim kami berkomitmen untuk mengembangkan solusi inovatif yang membantu melestarikan lingkungan dan meningkatkan kualitas hidup masyarakat, dengan fokus khusus pada pengelolaan dan konservasi air.
            </p>
            <motion.h3 
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-green-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Kunjungan ke PDAM Tirtawening
            </motion.h3>
            <p className="text-gray-600 text-base sm:text-lg">
              Sebagai bagian dari proyek kami, tim Teknologi Lingkungan berkesempatan mengunjungi PDAM Tirtawening. Kunjungan ini memberikan wawasan berharga tentang proses pengolahan air bersih skala besar dan praktik manajemen air yang efisien. Pengalaman ini memperkaya pemahaman kami tentang teknologi pengolahan air dan menginspirasi pengembangan proyek Filter Air Ramah Lingkungan kami.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16 bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gray-800 flex items-center">
              <Users className="mr-3 text-green-600" /> Kenalan dengan Tim Kami
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-green-50 p-6 rounded-2xl text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover"
                    onError={(e) => {
                      console.error(`Failed to load image for ${member.name}: ${member.image}`);
                      e.target.onerror = null;
                      e.target.src = `${window.location.origin}/placeholder.svg`;
                    }}
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-green-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">
                    <span className="font-medium">Minat:</span> {member.interest}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <EnvironmentalProjects />
        </div>
      </div>
    </DropletAnimation>
  );
};

export default EnvironmentalTeam;