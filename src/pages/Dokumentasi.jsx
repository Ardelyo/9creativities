import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';

const Dokumentasi = () => {
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
            Dokumentasi <span className="text-blue-600">Proyek</span>
          </h1>
          <p className="text-xl text-gray-600">
            Kumpulan dokumentasi lengkap dari semua proyek Nine Creativities
          </p>
        </motion.div>
        
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FileText className="mr-2" /> Daftar Dokumentasi
          </h2>
          <p className="text-gray-600 mb-4">
            Halaman ini akan berisi tautan ke dokumentasi lengkap untuk setiap proyek Nine Creativities.
            Saat ini, kami sedang dalam proses mengumpulkan dan menyusun semua dokumentasi.
          </p>
          <p className="text-gray-600">
            Silakan kembali lagi nanti untuk melihat update terbaru mengenai dokumentasi proyek kami.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dokumentasi;