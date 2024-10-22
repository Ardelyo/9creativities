import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';
import VideoLink from '../components/VideoLink';

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
            Yoghurt adalah produk fermentasi susu dengan bakteri asam laktat. Yoghurt kami dibuat dari susu lokal segar berkualitas tinggi.
          </p>
          <h3 className="text-xl font-semibold mb-2">Keunggulan:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Sumber probiotik yang baik untuk kesehatan usus</li>
            <li>Kaya kalsium untuk tulang yang kuat</li>
            <li>Mendukung petani susu lokal</li>
            <li>Rendah laktosa, cocok untuk yang sensitif terhadap laktosa</li>
            <li>Sumber protein berkualitas tinggi</li>
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
            <li>Panaskan susu full cream hingga suhu 80-90°C, lalu dinginkan hingga suhu 40-45°C</li>
            <li>Campurkan yoghurt plain (bibit yoghurt) ke dalam susu hangat, aduk rata</li>
            <li>Tuang campuran ke dalam botol/gelas steril dan tutup rapat</li>
            <li>Inkubasi selama 6-8 jam pada suhu 40-45°C hingga yoghurt mengental</li>
            <li>Dinginkan yoghurt di dalam kulkas sebelum disajikan</li>
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

export default Yoghurt;