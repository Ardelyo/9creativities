import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';
import VideoLink from '../components/VideoLink';

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
            Tape, makanan fermentasi tradisional dari singkong atau beras ketan, dibuat dengan sentuhan modern untuk cita rasa yang konsisten dan inovatif.
          </p>
          <h3 className="text-xl font-semibold mb-2">Keunggulan:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Rasa manis-asam yang unik</li>
            <li>Menjadi sumber energi karena kandungan karbohidratnya</li>
            <li>Terus berinovasi dengan varian rasa dan kemasan modern</li>
            <li>Mengandung probiotik alami yang baik untuk pencernaan</li>
            <li>Memiliki kandungan alkohol rendah sebagai hasil fermentasi</li>
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
            <li>Cuci bersih singkong, kupas kulitnya, dan potong-potong sesuai selera. Kukus hingga ¾ matang</li>
            <li>Siapkan wadah bersih yang dialasi daun pisang. Dinginkan singkong, lalu tata di atas daun pisang</li>
            <li>Taburkan ragi tape secara merata di atas singkong</li>
            <li>Tutup wadah rapat-rapat dan diamkan selama 2-3 hari pada suhu ruang hingga singkong berubah menjadi tape</li>
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

export default Tape;