import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';

const Yoghurt = () => {
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
            Yoghurt <span className="text-pink-600">Probiotik</span>
          </h1>
          <p className="text-xl text-gray-600">
            Yoghurt sehat dengan bahan baku lokal dan kaya probiotik
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
            Yoghurt probiotik kami adalah hasil inovasi yang menggabungkan kearifan lokal dengan teknologi modern. 
            Kami menggunakan susu segar dari peternakan lokal dan kultur probiotik pilihan untuk menghasilkan yoghurt 
            yang tidak hanya lezat, tetapi juga menyehatkan sistem pencernaan.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Kaya akan probiotik hidup</li>
            <li>Sumber protein dan kalsium yang baik</li>
            <li>Rendah laktosa</li>
            <li>Tanpa pemanis buatan</li>
            <li>Tersedia dalam berbagai varian rasa buah lokal</li>
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
            <li>Pengumpulan susu segar dari peternakan lokal</li>
            <li>Pasteurisasi susu untuk menjamin keamanan</li>
            <li>Penambahan kultur probiotik pilihan</li>
            <li>Fermentasi dalam suhu terkontrol</li>
            <li>Penambahan buah lokal untuk varian rasa (opsional)</li>
            <li>Pengemasan dalam kemasan ramah lingkungan</li>
          </ol>
        </motion.div>
      </div>
    </div>
  );
};

export default Yoghurt;