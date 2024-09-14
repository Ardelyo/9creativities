import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const ProdukKami = () => {
  const products = [
    {
      id: 1,
      name: "Website Nine Creativities",
      description: "Platform untuk memamerkan proyek inovatif dari berbagai tim teknologi.",
      icon: "🌐",
      tag: "Web Development",
      link: "/"
    },
    {
      id: 2,
      name: "Robot C",
      description: "Asisten AI interaktif untuk menjawab pertanyaan tentang Nine Creativities.",
      icon: "🤖",
      tag: "AI",
      link: "/robot-c"
    },
    {
      id: 3,
      name: "Kalkulator Karbon",
      description: "Alat untuk menghitung dan memvisualisasikan jejak karbon.",
      icon: "🌿",
      tag: "Environment",
      link: "/carbon-calculator"
    },
  ];

  return (
    <DropletAnimation>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-4 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/" className="text-blue-300 hover:text-blue-100 transition-colors mb-8 inline-block">
            <ArrowLeft className="mr-2 inline" /> Kembali
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Produk Nine Creativities
            </h1>
            <p className="text-xl text-gray-300">
              Jelajahi inovasi terbaru dari tim kami
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{product.icon}</span>
                    {product.id === 2 && (
                      <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                        New
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">{product.name}</h2>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-400">{product.tag}</span>
                    <Link
                      to={product.link}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors duration-300"
                    >
                      Coba Sekarang →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DropletAnimation>
  );
};

export default ProdukKami;
