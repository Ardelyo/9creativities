import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Tool } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const ProdukKami = () => {
  const products = [
    {
      id: 1,
      name: "Website Nine Creativities",
      description: "Platform untuk memamerkan proyek inovatif dari berbagai tim teknologi.",
      icon: "🌐",
    },
    {
      id: 2,
      name: "Chatbot Robot C",
      description: "Asisten AI interaktif untuk menjawab pertanyaan tentang Nine Creativities.",
      icon: "🤖",
    },
    // Add more products as needed
  ];

  return (
    <DropletAnimation>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-700 p-4 relative overflow-hidden">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-500">
              Produk Kami
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-500 mx-auto mb-4"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{product.icon}</span>
                  <h2 className="text-2xl font-bold text-blue-200">{product.name}</h2>
                </div>
                <p className="text-blue-100">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DropletAnimation>
  );
};

export default ProdukKami;