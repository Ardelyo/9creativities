import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ArticleHeader = ({ title }) => (
  <>
    <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors mb-8 inline-block">
      <ArrowLeft className="mr-2 inline" /> Kembali
    </Link>
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl sm:text-6xl font-bold mb-8 text-center text-gray-800"
    >
      {title}
    </motion.h1>
  </>
);

export default ArticleHeader;