import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';
import VideoLink from '../components/VideoLink';
import ImageGallery from '../components/products/ImageGallery';
import ProcessSteps from '../components/products/ProcessSteps';
import RelatedProducts from '../components/products/RelatedProducts';
import FeedbackSection from '../components/products/FeedbackSection';

const Tempe = () => {
  const images = [
    "/IMG-20240920-WA0009.jpg",
    "/IMG-20240920-WA0010.jpg",
    "/IMG-20240920-WA0011.jpg",
    "/IMG-20240920-WA0012.jpg",
  ];

  const steps = [
    "Cuci bersih kedelai, lalu rendam semalaman (8-12 jam)",
    "Rebus kedelai yang sudah direndam hingga lunak, lalu kupas kulit arinya",
    "Rendam kembali kedelai yang sudah dikupas selama beberapa jam, lalu tiriskan hingga benar-benar kering",
    "Taburkan ragi tempe secara merata ke seluruh kedelai",
    "Bungkus kedelai dengan daun pisang atau plastik berlubang, lalu inkubasi selama 36-48 jam pada suhu ruang"
  ];

  const relatedProducts = [
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
    {
      id: 8,
      name: "Filter Air",
      description: "Sistem pemurnian air ramah lingkungan menggunakan bahan alami.",
      icon: "💧",
      link: "/filter-air",
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
            Tempe <span className="text-green-600">Inovatif</span>
          </h1>
          <p className="text-xl text-gray-600">
            Makanan fermentasi khas Indonesia dengan nutrisi tinggi
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
              Tempe, makanan fermentasi khas Indonesia berbahan dasar kedelai, difermentasi menggunakan ragi tempe (Rhizopus oligosporus) sehingga nutrisinya lebih mudah diserap tubuh.
            </p>
            <h3 className="text-xl font-semibold mb-2">Keunggulan:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Kaya protein, serat, vitamin B, mineral, dan probiotik yang baik untuk pencernaan</li>
              <li>Proses fermentasi membuat tempe lebih mudah dicerna</li>
              <li>Sumber protein nabati yang berkualitas tinggi</li>
              <li>Rendah lemak jenuh</li>
              <li>Mengandung antioksidan alami</li>
            </ul>
          </motion.section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Langkah Pembuatan</h2>
            <ProcessSteps steps={steps} />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Video Tutorial</h2>
            <VideoLink 
              url="https://youtu.be/k2fI36laE2s?si=_DudyqaPKau3_65t" 
              title="TEMPE, TAPE, YOGHURT HOME MADE. SIMPEL DAN ENAK."
            />
          </section>

          <RelatedProducts products={relatedProducts} currentProductId={5} />
          
          <FeedbackSection productName="Tempe Inovatif" />
        </div>
      </div>
    </div>
  );
};

export default Tempe;