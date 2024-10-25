import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Droplet } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';
import VideoLink from '../components/VideoLink';
import ImageGallery from '../components/products/ImageGallery';
import ProcessSteps from '../components/products/ProcessSteps';
import RelatedProducts from '../components/products/RelatedProducts';
import FeedbackSection from '../components/products/FeedbackSection';

const FilterAir = () => {
  const images = [
    "/IMG-20240920-WA0078.jpg",
    "/IMG-20240920-WA0076.jpg",
    "/IMG-20240920-WA0081.jpg",
    "/IMG-20240920-WA0072.jpg",
    "/IMG-20240920-WA0065.jpg",
    "/IMG-20240920-WA0066.jpg",
  ];

  const steps = [
    "Persiapan Alat dan Bahan: Siapkan galon 15 liter, spons 1 kotak, ijuk 1 ikat, pasir zeolit 2 kg, batu arang kecil 2 kg, air keruh untuk uji coba, keran, pipa, gunting/cutter, lem G Korea, dan korek api gas",
    "Membuat Badan Filter: Belah galon menjadi dua bagian. Buat lubang di bagian bawah galon untuk memasang pipa dan keran",
    "Menyiapkan Lapisan Filter: Cuci ijuk hingga bersih, lalu gunting kecil-kecil agar mudah dimasukkan ke dalam galon",
    "Menyusun Lapisan Filter: Masukkan spons ke dalam galon, ikuti dengan ijuk, pasir zeolit, dan terakhir batu arang kecil",
    "Pengujian: Tuangkan air keruh ke dalam filter dan amati air yang keluar dari keran"
  ];

  const relatedProducts = [
    {
      id: 5,
      name: "Tempe",
      description: "Produk fermentasi kedelai kaya nutrisi dan probiotik.",
      icon: "🫘",
      link: "/tempe",
    },
    {
      id: 6,
      name: "Yoghurt",
      description: "Yoghurt probiotik dengan bahan baku lokal.",
      icon: "🥛",
      link: "/yoghurt",
    },
    {
      id: 7,
      name: "Tape",
      description: "Makanan fermentasi tradisional dengan inovasi modern.",
      icon: "🍚",
      link: "/tape",
    },
  ];

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

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6">Galeri Produk</h2>
            <ImageGallery images={images} />
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
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
          </motion.section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Langkah Pembuatan</h2>
            <ProcessSteps steps={steps} />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Video Tutorial</h2>
            <VideoLink 
              url="https://youtu.be/x6grfML5RMA?si=AUcIHaR_9mDmRCPg" 
              title="MEMBUAT FILTER AIR DENGAN CARA DAN BAHAN YANG ADA, MUDAH"
            />
          </section>

          <RelatedProducts products={relatedProducts} currentProductId={8} />
          
          <FeedbackSection productName="Filter Air Ramah Lingkungan" />
        </div>
      </div>
    </div>
  );
};

export default FilterAir;