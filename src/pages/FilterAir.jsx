import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';

const FilterAir = () => {
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
            Filter Air <span className="text-blue-600">Ramah Lingkungan</span>
          </h1>
          <p className="text-xl text-gray-600">
            Sistem pemurnian air menggunakan bahan alami dan berkelanjutan
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
            Filter Air Ramah Lingkungan kami adalah solusi inovatif untuk menyediakan air bersih 
            dengan cara yang berkelanjutan. Menggunakan kombinasi bahan alami, sistem ini efektif 
            menghilangkan kontaminan sambil tetap ramah lingkungan.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Menggunakan bahan alami seperti pasir, kerikil, dan arang aktif</li>
            <li>Efektif menghilangkan kotoran, bakteri, dan bau</li>
            <li>Mudah digunakan dan dirawat</li>
            <li>Tidak memerlukan listrik</li>
            <li>Cocok untuk skala rumah tangga dan komunitas kecil</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold mb-4">Cara Kerja</h2>
          <ol className="list-decimal list-inside text-gray-700">
            <li>Air kotor dimasukkan ke dalam sistem filter</li>
            <li>Air melewati lapisan kerikil untuk menyaring kotoran besar</li>
            <li>Selanjutnya, air melewati lapisan pasir untuk filtrasi lebih lanjut</li>
            <li>Lapisan arang aktif menghilangkan bau dan zat kimia</li>
            <li>Air bersih keluar melalui saluran output</li>
            <li>Sistem dapat dibersihkan dan digunakan kembali</li>
          </ol>
        </motion.div>
      </div>
    </div>
  );
};

export default FilterAir;