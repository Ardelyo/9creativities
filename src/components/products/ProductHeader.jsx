import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ProductHeader = () => {
  return (
    <>
      <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors mb-8 inline-block">
        <ArrowLeft className="mr-2 inline" /> Kembali
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6">
          Produk <span className="text-blue-600">Nine Creativities</span>
        </h1>
        <p className="text-xl text-gray-600">
          Jelajahi inovasi terbaru dari tim kami
        </p>
      </motion.div>
    </>
  );
};

export default ProductHeader;