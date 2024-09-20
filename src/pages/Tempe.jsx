import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';

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
            Produk fermentasi kedelai kaya nutrisi dan probiotik
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
            Tempe inovatif kami adalah hasil pengembangan dari makanan tradisional Indonesia yang kaya akan nutrisi. 
            Kami menggunakan kedelai organik lokal dan proses fermentasi yang dioptimalkan untuk menghasilkan tempe 
            dengan kualitas terbaik dan manfaat kesehatan yang maksimal.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Tinggi protein nabati</li>
            <li>Kaya akan serat</li>
            <li>Mengandung probiotik alami</li>
            <li>Rendah lemak jenuh</li>
            <li>Sumber vitamin B yang baik</li>
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
            <li>Pemilihan kedelai organik berkualitas tinggi</li>
            <li>Pencucian dan perendaman kedelai</li>
            <li>Perebusan dan pendinginan</li>
            <li>Inokulasi dengan ragi tempe pilihan</li>
            <li>Fermentasi dalam kondisi terkontrol</li>
            <li>Pengemasan dengan material ramah lingkungan</li>
          </ol>
        </motion.div>
      </div>
    </div>
  );
};

export default Tempe;