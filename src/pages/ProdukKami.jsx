import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';
import VideoLink from '../components/VideoLink';

const ProdukKami = () => {
  const products = [
    {
      id: 1,
      name: "Website Nine Creativities",
      description: "Platform untuk memamerkan proyek inovatif dari berbagai tim teknologi.",
      icon: "🌐",
      tag: "Web Development",
      link: "/",
      category: "Teknologi Informasi"
    },
    {
      id: 2,
      name: "Robot C",
      description: "Asisten AI interaktif untuk menjawab pertanyaan tentang Nine Creativities.",
      icon: "🤖",
      tag: "AI",
      link: "/robot-c",
      category: "Teknologi Informasi"
    },
    {
      id: 3,
      name: "Carbon Calculator",
      description: "Alat untuk menghitung dan memvisualisasikan jejak karbon.",
      icon: "🌿",
      tag: "Environment",
      link: "/carbon-calculator",
      category: "Teknologi Informasi"
    },
    {
      id: 4,
      name: "Cihuy Quiz",
      description: "Kuis interaktif tentang lingkungan dengan 10 pertanyaan acak.",
      icon: "🎮",
      tag: "Education",
      link: "/cihuy-quiz",
      category: "Teknologi Informasi"
    },
    {
      id: 5,
      name: "Tempe",
      description: "Produk fermentasi kedelai kaya nutrisi dan probiotik.",
      icon: "🫘",
      tag: "Food Technology",
      link: "/tempe",
      category: "Teknologi Pangan"
    },
    {
      id: 6,
      name: "Yoghurt",
      description: "Yoghurt probiotik dengan bahan baku lokal.",
      icon: "🥛",
      tag: "Food Technology",
      link: "/yoghurt",
      category: "Teknologi Pangan"
    },
    {
      id: 7,
      name: "Tape",
      description: "Makanan fermentasi tradisional dengan inovasi modern.",
      icon: "🍚",
      tag: "Food Technology",
      link: "/tape",
      category: "Teknologi Pangan"
    },
    {
      id: 8,
      name: "Filter Air",
      description: "Sistem pemurnian air ramah lingkungan menggunakan bahan alami.",
      icon: "💧",
      tag: "Environmental Technology",
      link: "/filter-air",
      category: "Teknologi Lingkungan"
    },
    {
      id: 9,
      name: "Dokumentasi Proyek",
      description: "Kumpulan dokumentasi lengkap dari semua proyek Nine Creativities.",
      icon: "📚",
      tag: "Documentation",
      link: "/dokumentasi",
      category: "Teknologi Komunikasi",
      videos: [
        {
          url: "https://youtu.be/k2fI36laE2s?si=_DudyqaPKau3_65t",
          title: "TEMPE, TAPE, YOGHURT HOME MADE. SIMPEL DAN ENAK."
        },
        {
          url: "https://youtu.be/x6grfML5RMA?si=AUcIHaR_9mDmRCPg",
          title: "MEMBUAT FILTER AIR DENGAN CARA DAN BAHAN YANG ADA, MUDAH"
        },
        {
          url: "https://youtu.be/ZxnHeyrPLug?si=zNrPSwQPRSsLpCIu",
          title: "KEGIATAN SOSIALISASI DI SEKOLAH MENGENAI TΕΚΡΑΝ, ΤΕΚNOLOGI KOMUNIKASI"
        },
        {
          url: "https://youtu.be/8c5T2Ktc7lw?si=T6FO9jcmKTDhsKbH",
          title: "KUNJUNGAN KE PDAM TIRTA WENING SERU DAN MENYENANGKAN!!"
        }
      ]
    },
  ];

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <DropletAnimation>
      <div className="min-h-screen bg-white p-4 sm:p-8 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-6xl mx-auto relative z-10">
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

          {/* New Presentation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Presentasi P5</h2>
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.canva.com/design/DAGUS9bGZGg/vTNk3LP4NxDETG25VHqeNQ/view?embed" 
                allowFullScreen
                loading="lazy"
                title="P5 Presentation"
              />
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://www.canva.com/design/DAGUS9bGZGg/vTNk3LP4NxDETG25VHqeNQ/view?utm_content=DAGUS9bGZGg&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                P5 KELOMPOK TEKNOLOGI INFORMASI DAN KOMUNIKASI (Presentation) by ARDELLIO SATRIA ANINDITO
              </a>
            </div>
          </motion.div>
          
          {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-6">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">{product.icon}</span>
                        {product.id === 4 && (
                          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                            New
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      {product.videos && (
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold mb-2">Video Dokumentasi:</h4>
                          <div className="space-y-2">
                            {product.videos.map((video, index) => (
                              <VideoLink key={index} url={video.url} title={video.title} />
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-blue-600">{product.tag}</span>
                        <Link
                          to={product.link}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DropletAnimation>
  );
};

export default ProdukKami;