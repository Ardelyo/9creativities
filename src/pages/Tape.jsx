import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';

const Tape = () => {
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
            Tape <span className="text-yellow-600">Modern</span>
          </h1>
          <p className="text-xl text-gray-600">
            Makanan fermentasi tradisional dengan sentuhan inovasi
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
            Tape modern kami adalah hasil pengembangan dari makanan fermentasi tradisional Indonesia. 
            Kami menggunakan bahan baku lokal berkualitas tinggi dan proses fermentasi yang dioptimalkan 
            untuk menghasilkan tape dengan cita rasa unik dan manfaat kesehatan yang maksimal.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Tersedia dalam varian singkong dan ketan</li>
            <li>Kaya akan probiotik alami</li>
            <li>Sumber energi yang baik</li>
            <li>Membantu meningkatkan sistem kekebalan tubuh</li>
            <li>Dikemas dalam kemasan modern dan higienis</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold mb-4">Proses Produksi</h2>
          <ol className="list-decimal list-inside text-gray-700">
            <li>Pemilihan bahan baku berkualitas (singkong atau ketan)</li>
            <li>Pencucian dan pengukusan bahan</li>
            <li>Pendinginan hingga suhu optimal</li>
            <li>Inokulasi dengan ragi tape pilihan</li>
            <li>Fermentasi dalam kondisi terkontrol</li>
            <li>Pengemasan dengan material food-grade</li>
          </ol>
        </motion.div>
      </div>
    </div>
  );
};

export default Tape;