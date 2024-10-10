import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Utensils, Users, FileText, Camera } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';
import FoodProjects from '../components/FoodProjects';

const FoodTeam = () => {
  const teamMembers = [
    { name: "Rizka", role: "Anggota Tim", interest: "Fermentasi Makanan", image: "https://i.ibb.co/LzMXR3t/2-20241010-160341-0000.png" },
    { name: "Nabillah", role: "Anggota Tim", interest: "Nutrisi Makanan", image: "https://i.ibb.co/52wvqdJ/3-20241010-160342-0001.png" },
    { name: "Fadillah", role: "Anggota Tim", interest: "Pengembangan Produk", image: "https://i.ibb.co/9p8YCmR/4-20241010-160342-0002.png" },
    { name: "Nurul", role: "Anggota Tim", interest: "Keamanan Pangan", image: "https://i.ibb.co/k0dhzqv/5-20241010-160342-0003.png" },
    { name: "Fikri", role: "Anggota Tim", interest: "Teknologi Pengawetan", image: "https://i.ibb.co/bFss1FP/6-20241010-160342-0004.png" },
    { name: "Revan", role: "Anggota Tim", interest: "Inovasi Makanan", image: "https://i.ibb.co/3BShDLm/7-20241010-160342-0005.png" },
    { name: "Keanu", role: "Anggota Tim", interest: "Analisis Sensori", image: "https://i.ibb.co/L8YYnH3/8-20241010-160342-0006.png" },
    { name: "Abyan", role: "Anggota Tim", interest: "Pengolahan Makanan", image: "https://i.ibb.co/1f9rhzc/9-20241010-160342-0007.png" },
    { name: "Ridho", role: "Anggota Tim", interest: "Pengemasan Makanan", image: "https://i.ibb.co/d07gRQ1/10-20241010-160342-0008.png" },
  ];

  return (
    <DropletAnimation>
      <div className="min-h-screen bg-white p-4 sm:p-8 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/" className="text-orange-600 hover:text-orange-800 transition-colors mb-8 inline-block">
            <ArrowLeft className="mr-2 inline" /> Kembali
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4">
              Tim <span className="text-orange-600">Teknologi Pangan</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-4"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">Pengenalan Teknologi Pangan</h2>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              Teknologi Pangan adalah bidang ilmu yang menerapkan prinsip-prinsip sains dan teknik dalam pengolahan, pengawetan, dan distribusi makanan. Tujuannya adalah untuk menghasilkan makanan yang aman, bergizi, dan memiliki umur simpan yang panjang, sambil mempertahankan atau meningkatkan kualitas sensoriknya.
            </p>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              Tim kami fokus pada pengembangan produk pangan inovatif yang tidak hanya lezat tetapi juga memberikan manfaat kesehatan tambahan. Kami menggabungkan pengetahuan tradisional dengan teknologi modern untuk menciptakan makanan yang mendukung gaya hidup sehat dan berkelanjutan.
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
                  className="bg-orange-50 p-6 rounded-2xl text-center"
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
                  <p className="text-orange-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">
                    <span className="font-medium">Minat:</span> {member.interest}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <FoodProjects />
        </div>
      </div>
    </DropletAnimation>
  );
};

export default FoodTeam;