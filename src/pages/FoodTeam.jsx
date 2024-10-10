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
import FoodTeamMembers from '../components/FoodTeamMembers';
import FoodProjects from '../components/FoodProjects';

const FoodTeam = () => {
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
            <FoodTeamMembers />
          </motion.div>

          <FoodProjects />
        </div>
      </div>
    </DropletAnimation>
  );
};

export default FoodTeam;