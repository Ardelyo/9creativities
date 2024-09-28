import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';

const articles = [
  {
    title: "APA ITU TEKNOLOGI?",
    author: "Alea",
    content: `Apakah kamu tau apa itu teknologi?

Teknologi adalah keseluruhan sarana untuk menyediakan barang-barang yang diperlukan bagi kelangsungan dan kenyamanan hidup manusia. Penggunaan teknologi oleh manusia dimulai dengan pengubahan sumber daya alam menjadi alat-alat sederhana.

Atau secara singkat teknologi adalah penerapan pengetahuan dunia untuk mencapai tujuan praktis.

Apakah kamu sudah merasakan teknologi?

Beberapa contoh teknologi yang mungkin kamu gunakan sehari-hari:
1. Smartphone: Alat komunikasi multifungsi yang menghubungkan kita dengan dunia.
2. Internet: Jaringan global yang memungkinkan pertukaran informasi secara instan.
3. Transportasi modern: Mobil, pesawat, dan kereta yang memudahkan perjalanan.
4. Peralatan rumah tangga: Kulkas, mesin cuci, dan microwave yang membantu pekerjaan rumah.

Perkembangan teknologi terus berlanjut, membawa kita ke era digital yang semakin canggih. Namun, penting untuk menggunakan teknologi secara bijak dan bertanggung jawab.`
  },
  // Add more articles here in the future
];

const Artikel = () => {
  const [expandedArticle, setExpandedArticle] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-4 sm:p-8">
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
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{article.title}</h2>
                <p className="text-sm text-gray-600 mb-4">by: {article.author}</p>
                <div className="prose max-w-none">
                  {expandedArticle === index ? (
                    <>
                      {article.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4">{paragraph}</p>
                      ))}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setExpandedArticle(null)}
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        Baca lebih sedikit <ChevronUp className="ml-1" />
                      </motion.button>
                    </>
                  ) : (
                    <>
                      <p>{article.content.split('\n\n')[0]}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setExpandedArticle(index)}
                        className="flex items-center text-blue-600 hover:text-blue-800 mt-4"
                      >
                        Baca selengkapnya <ChevronDown className="ml-1" />
                      </motion.button>
                    </>
                  )}
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