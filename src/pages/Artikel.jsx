import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, Lightbulb, ExternalLink, BookOpen, Clock, Tag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ReactMarkdown from 'react-markdown';
import { Card } from "@/components/ui/card";
import BackgroundArt from '../components/BackgroundArt';

const Artikel = () => {
  const [expandedArticle, setExpandedArticle] = useState(null);

  const articles = [
    {
      title: "APA ITU TEKNOLOGI?",
      author: "Alea",
      readTime: "5 menit",
      tags: ["Teknologi", "Inovasi"],
      content: `
# Teknologi: Mengubah Dunia Kita

Teknologi adalah **keseluruhan sarana** untuk menyediakan barang-barang yang diperlukan bagi kelangsungan dan kenyamanan hidup manusia. Penggunaan teknologi oleh manusia dimulai dengan pengubahan sumber daya alam menjadi alat-alat sederhana.

> Secara singkat, teknologi adalah penerapan pengetahuan dunia untuk mencapai tujuan praktis.

## Dampak Teknologi dalam Kehidupan Sehari-hari

Teknologi telah mengubah cara kita hidup, bekerja, dan berinteraksi. Beberapa contoh teknologi yang mungkin kamu gunakan sehari-hari:

1. **Smartphone**: Alat komunikasi multifungsi yang menghubungkan kita dengan dunia.
2. **Internet**: Jaringan global yang memungkinkan pertukaran informasi secara instan.
3. **Transportasi modern**: Mobil, pesawat, dan kereta yang memudahkan perjalanan.
4. **Peralatan rumah tangga**: Kulkas, mesin cuci, dan microwave yang membantu pekerjaan rumah.

🌟 **Fun Fact**: Tahukah kamu? Komputer pertama seberat 27 ton dan membutuhkan ruangan sebesar lapangan tenis untuk menempatkannya!

## Perkembangan Teknologi Terkini

Perkembangan teknologi terus berlanjut, membawa kita ke era digital yang semakin canggih. Beberapa teknologi terbaru yang sedang berkembang:

- Kecerdasan Buatan (AI)
- Internet of Things (IoT)
- Realitas Virtual dan Augmented Reality
- Blockchain
- Quantum Computing

🌟 **Fun Fact**: 90% dari data dunia saat ini diciptakan hanya dalam dua tahun terakhir. Bayangkan betapa cepatnya perkembangan teknologi!

## Tantangan dan Peluang

Meskipun teknologi membawa banyak manfaat, kita juga harus waspada terhadap tantangannya:

- Privasi dan keamanan data
- Ketergantungan teknologi
- Dampak lingkungan dari produksi perangkat elektronik

Namun, dengan penggunaan yang bijak, teknologi dapat menjadi alat yang luar biasa untuk memecahkan masalah global dan meningkatkan kualitas hidup manusia.

🌟 **Fun Fact**: Ada lebih banyak perangkat yang terhubung ke internet daripada jumlah manusia di Bumi! Ini menunjukkan betapa terkoneksinya dunia kita saat ini.

## Kesimpulan

Teknologi akan terus berevolusi dan mempengaruhi kehidupan kita. Penting bagi kita untuk tetap up-to-date dengan perkembangan teknologi sambil tetap kritis dalam penggunaannya. Mari kita manfaatkan teknologi untuk menciptakan masa depan yang lebih baik bagi semua orang.

[Baca lebih lanjut tentang perkembangan teknologi terbaru](https://www.techradar.com/news/world-of-tech/future-tech)
      `,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
  ];

  const FunFact = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-yellow-100 p-4 rounded-lg my-4 shadow-md"
    >
      <h4 className="flex items-center text-lg font-bold text-yellow-800 mb-2">
        <Lightbulb className="mr-2" />
        Fun Fact
      </h4>
      <p className="text-yellow-700">{children}</p>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4 sm:p-8">
      <BackgroundArt />
      <div className="max-w-4xl mx-auto relative z-10">
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
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-64 object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="p-6">
                <motion.h2 
                  className="text-3xl font-bold mb-2 text-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {article.title}
                </motion.h2>
                <motion.div 
                  className="flex items-center text-sm text-gray-600 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <BookOpen className="w-4 h-4 mr-1" />
                  <span className="mr-4">oleh: {article.author}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{article.readTime}</span>
                </motion.div>
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {article.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </motion.div>
                <AnimatePresence>
                  {expandedArticle === index ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="prose max-w-none"
                    >
                      <ReactMarkdown
                        components={{
                          h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />,
                          h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mt-5 mb-3" {...props} />,
                          h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />,
                          p: ({ node, ...props }) => <p className="mb-4" {...props} />,
                          ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-4" {...props} />,
                          ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-4" {...props} />,
                          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                          blockquote: ({ node, ...props }) => (
                            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
                          ),
                          a: ({ node, ...props }) => (
                            <a className="text-blue-600 hover:underline flex items-center" {...props}>
                              {props.children}
                              <ExternalLink className="ml-1 w-4 h-4" />
                            </a>
                          ),
                          p: ({ node, children, ...props }) => {
                            if (children && typeof children === 'string' && children.startsWith('🌟 **Fun Fact**:')) {
                              return <FunFact>{children.replace('🌟 **Fun Fact**:', '')}</FunFact>;
                            }
                            return <p className="mb-4" {...props}>{children}</p>;
                          },
                        }}
                      >
                        {article.content}
                      </ReactMarkdown>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setExpandedArticle(null)}
                        className="flex items-center text-blue-600 hover:text-blue-800 mt-4"
                      >
                        Tutup artikel <ChevronUp className="ml-1" />
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-700 mb-4">{article.content.split('\n\n')[0]}</p>
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
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artikel;