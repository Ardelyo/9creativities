import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ReactMarkdown from 'react-markdown';

const Artikel = () => {
  const [expandedArticle, setExpandedArticle] = useState(null);

  const articles = [
    {
      title: "APA ITU TEKNOLOGI?",
      author: "Alea",
      content: `
Teknologi adalah **keseluruhan sarana** untuk menyediakan barang-barang yang diperlukan bagi kelangsungan dan kenyamanan hidup manusia. Penggunaan teknologi oleh manusia dimulai dengan pengubahan sumber daya alam menjadi alat-alat sederhana.

> Secara singkat, teknologi adalah penerapan pengetahuan dunia untuk mencapai tujuan praktis.

### Apakah kamu sudah merasakan teknologi?

Beberapa contoh teknologi yang mungkin kamu gunakan sehari-hari:
1. **Smartphone**: Alat komunikasi multifungsi yang menghubungkan kita dengan dunia.
2. **Internet**: Jaringan global yang memungkinkan pertukaran informasi secara instan.
3. **Transportasi modern**: Mobil, pesawat, dan kereta yang memudahkan perjalanan.
4. **Peralatan rumah tangga**: Kulkas, mesin cuci, dan microwave yang membantu pekerjaan rumah.

Perkembangan teknologi terus berlanjut, membawa kita ke era digital yang semakin canggih. Namun, penting untuk menggunakan teknologi secara bijak dan bertanggung jawab.

![Teknologi Modern](https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)

#### Fun Fact
Tahukah kamu? Komputer pertama seberat 27 ton dan membutuhkan ruangan sebesar lapangan tenis untuk menempatkannya!
      `,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    // Add more articles here in the future
  ];

  const funFacts = [
    "Tahukah kamu? Komputer pertama seberat 27 ton dan membutuhkan ruangan sebesar lapangan tenis untuk menempatkannya!",
    "Fakta menarik: 90% dari data dunia saat ini diciptakan hanya dalam dua tahun terakhir.",
    "Pernahkah kamu berpikir? Ada lebih banyak perangkat yang terhubung ke internet daripada jumlah manusia di Bumi!"
  ];

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8">
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
              <img src={article.image} alt={article.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{article.title}</h2>
                <p className="text-sm text-gray-600 mb-4">by: {article.author}</p>
                <AnimatePresence>
                  {expandedArticle === index ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="prose max-w-none"
                    >
                      <ReactMarkdown>{article.content}</ReactMarkdown>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setExpandedArticle(null)}
                        className="flex items-center text-blue-600 hover:text-blue-800 mt-4"
                      >
                        Baca lebih sedikit <ChevronUp className="ml-1" />
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{article.content.split('\n\n')[0]}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setExpandedArticle(index)}
                        className="flex items-center text-blue-600 hover:text-blue-800 mt-4"
                      >
                        Baca selengkapnya <ChevronDown className="ml-1" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 bg-gray-100 rounded-3xl p-6"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <Lightbulb className="mr-2 text-yellow-500" />
            Fun Facts Teknologi
          </h3>
          <ul className="space-y-4">
            {funFacts.map((fact, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start"
              >
                <span className="text-blue-500 font-bold mr-2">•</span>
                {fact}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Artikel;