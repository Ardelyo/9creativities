import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';
import VideoLink from '../components/VideoLink';

const Tempe = () => {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-4xl mx-auto relative z-10">
        <Link to="/produk-kami" className="text-blue-600 hover:text-blue-800 transition-colors mb-8 inline-block">
          <ArrowLeft className="mr-2 inline" /> Kembali ke Produk Kami
        </Link>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4">
            Tempe <span className="text-green-600">Inovatif</span>
          </h1>
          <p className="text-xl text-gray-600">
            Makanan fermentasi khas Indonesia dengan nutrisi tinggi
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Tentang Produk</h2>
          <p className="text-gray-700 mb-4">
            Tempe, makanan fermentasi khas Indonesia berbahan dasar kedelai, difermentasi menggunakan ragi tempe (Rhizopus oligosporus) sehingga nutrisinya lebih mudah diserap tubuh.
          </p>
          <h3 className="text-xl font-semibold mb-2">Keunggulan:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Kaya protein, serat, vitamin B, mineral, dan probiotik yang baik untuk pencernaan</li>
            <li>Proses fermentasi membuat tempe lebih mudah dicerna</li>
            <li>Sumber protein nabati yang berkualitas tinggi</li>
            <li>Rendah lemak jenuh</li>
            <li>Mengandung antioksidan alami</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Cara Membuat</h2>
          <ol className="list-decimal list-inside text-gray-700">
            <li>Cuci bersih kedelai, lalu rendam semalaman (8-12 jam)</li>
            <li>Rebus kedelai yang sudah direndam hingga lunak, lalu kupas kulit arinya</li>
            <li>Rendam kembali kedelai yang sudah dikupas selama beberapa jam, lalu tiriskan hingga benar-benar kering</li>
            <li>Taburkan ragi tempe secara merata ke seluruh kedelai</li>
            <li>Bungkus kedelai dengan daun pisang atau plastik berlubang, lalu inkubasi selama 36-48 jam pada suhu ruang</li>
          </ol>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold mb-4">Video Tutorial</h2>
          <VideoLink 
            url="https://youtu.be/k2fI36laE2s?si=_DudyqaPKau3_65t" 
            title="TEMPE, TAPE, YOGHURT HOME MADE. SIMPEL DAN ENAK."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Tempe;