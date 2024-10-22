import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';

const YouTubeEmbed = ({ embedId, title }) => (
  <div className="video-responsive mb-8">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <iframe
      width="100%"
      height="315"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  </div>
);

const Dokumentasi = () => {
  const videos = [
    {
      embedId: "k2fI36laE2s",
      title: "TUGAS P5 KELOMPOK TEKNOLOGI PANGAN: TEMPE, TAPE, YOGHURT HOME MADE. SIMPEL DAN ENAK."
    },
    {
      embedId: "x6grfML5RMA",
      title: "TUGAS P5 KELOMPOK TEKNOLOGI LINGKUNGAN: MEMBUAT FILTER AIR DENGAN CARA DAN BAHAN YANG ADA, MUDAH"
    },
    {
      embedId: "ZxnHeyrPLug",
      title: "TUGAS P5 KELOMPOK TEKNOLOGI KOMUNIKASI: KEGIATAN SOSIALISASI DI SEKOLAH MENGENAI TΕΚΡΑΝ, ΤΕΚNOLOGI KOMUNIKASI"
    },
    {
      embedId: "8c5T2Ktc7lw",
      title: "TUGAS P5 KELOMPOK TEKNOLOGI KOMUNIKASI: KUNJUNGAN KE PDAM TIRTA WENING SERU DAN MENYENANGKAN!!"
    }
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
            Dokumentasi <span className="text-blue-600">Proyek</span>
          </h1>
          <p className="text-xl text-gray-600">
            Kumpulan dokumentasi lengkap dari semua proyek Nine Creativities
          </p>
        </motion.div>
        
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FileText className="mr-2" /> Video Dokumentasi Proyek
          </h2>
          {videos.map((video, index) => (
            <YouTubeEmbed key={index} embedId={video.embedId} title={video.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dokumentasi;