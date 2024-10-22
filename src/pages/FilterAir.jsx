import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';
import VideoLink from '../components/VideoLink';

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
            Proyek Teknologi Lingkungan kami menciptakan solusi sederhana dan murah untuk air bersih: filter air ramah lingkungan dari bahan alami. Filter ini menyaring air keruh sehingga lebih layak pakai.
          </p>
          <h3 className="text-xl font-semibold mb-2">Keunggulan:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Menggunakan bahan alami yang mudah didapat</li>
            <li>Biaya pembuatan yang terjangkau</li>
            <li>Efektif dalam menyaring air keruh</li>
            <li>Ramah lingkungan dan berkelanjutan</li>
            <li>Cocok untuk daerah yang sulit mengakses air bersih</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Proses Pembuatan</h2>
          <ol className="list-decimal list-inside text-gray-700">
            <li>Persiapan Alat dan Bahan: Siapkan galon 15 liter, spons 1 kotak, ijuk 1 ikat, pasir zeolit 2 kg, batu arang kecil 2 kg, air keruh untuk uji coba, keran, pipa, gunting/cutter, lem G Korea, dan korek api gas</li>
            <li>Membuat Badan Filter: Belah galon menjadi dua bagian. Buat lubang di bagian bawah galon untuk memasang pipa dan keran. Lelehkan ujung pipa dengan korek api dan pasang keran. Rekatkan sambungan pipa dan keran dengan lem agar kedap air. Potong pipa sesuai ukuran yang diinginkan. Pasang pipa yang sudah terpasang keran ke lubang di galon dan rekatkan</li>
            <li>Menyiapkan Lapisan Filter: Cuci ijuk hingga bersih, lalu gunting kecil-kecil agar mudah dimasukkan ke dalam galon. Bentuk spons menjadi lingkaran sesuai ukuran galon</li>
            <li>Menyusun Lapisan Filter: Masukkan spons ke dalam galon, ikuti dengan ijuk, pasir zeolit, dan terakhir batu arang kecil. Pastikan setiap lapisan tertata rapi</li>
            <li>Pengujian: Tuangkan air keruh ke dalam filter dan amati air yang keluar dari keran. Air yang keluar seharusnya lebih jernih</li>
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
            url="https://youtu.be/x6grfML5RMA?si=AUcIHaR_9mDmRCPg" 
            title="MEMBUAT FILTER AIR DENGAN CARA DAN BAHAN YANG ADA, MUDAH"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FilterAir;