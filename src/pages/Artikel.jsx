import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';

const articles = [
  {
    title: "APA ITU TEKNOLOGI?",
    author: "Alea",
    content: `Apakah kamu tau apa itu teknologi?

Teknologi adalah keseluruhan sarana untuk menyediakan barang-barang yang diperlukan bagi kelangsungan dan kenyamanan hidup manusia. Penggunaan teknologi oleh manusia dimulai dengan pengubahan sumber daya alam menjadi alat-alat sederhana.

Atau secara singkat teknologi adalah penerapan pengetahuan dunia untuk mencapai tujuan praktis.

Apakah kamu sudah merasakan teknologi?`
  },
  // Add more articles here in the future
];

const Artikel = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <BackgroundArt />
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors mb-8 inline-block">
          <ArrowLeft className="mr-2 inline" /> Kembali
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-6xl font-bold mb-8 text-center text-gray-800"
        >
          Artikel
        </motion.h1>
        <div className="space-y-12">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{article.title}</h2>
                <p className="text-sm text-gray-600 mb-4">by: {article.author}</p>
                <div className="prose max-w-none">
                  {article.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artikel;