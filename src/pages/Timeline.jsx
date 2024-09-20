import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';

const Timeline = () => {
  const timelineEvents = [
    { date: "1 September 2023", title: "Pembentukan Tim", description: "Pembagian kelompok dan penentuan fokus proyek untuk setiap tim." },
    { date: "15 September 2023", title: "Riset Awal", description: "Tim mulai melakukan riset mendalam tentang topik proyek masing-masing." },
    { date: "1 Oktober 2023", title: "Pengembangan Konsep", description: "Finalisasi konsep proyek dan pembuatan rencana kerja detail." },
    { date: "15 Oktober 2023", title: "Mulai Pengembangan", description: "Tim mulai mengembangkan prototipe dan melakukan eksperimen." },
    { date: "1 November 2023", title: "Evaluasi Tengah", description: "Presentasi progress dan evaluasi oleh mentor." },
    { date: "15 November 2023", title: "Penyempurnaan Proyek", description: "Perbaikan dan optimalisasi berdasarkan feedback evaluasi." },
    { date: "1 Desember 2023", title: "Persiapan Presentasi", description: "Pembuatan materi presentasi dan persiapan demo proyek." },
    { date: "15 Desember 2023", title: "Pameran Proyek", description: "Presentasi final dan pameran proyek Nine Creativities." },
  ];

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-4xl mx-auto relative z-10">
        <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors mb-8 inline-block">
          <ArrowLeft className="mr-2 inline" /> Kembali
        </Link>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4">
            Timeline <span className="text-blue-600">Proyek</span>
          </h1>
          <p className="text-xl text-gray-600">
            Perjalanan inovasi Nine Creativities
          </p>
        </motion.div>

        <div className="relative">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className="mb-8 flex"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-24 text-sm text-gray-500">{event.date}</div>
              <div className="ml-4 flex-grow pb-8 border-l-2 border-blue-600 pl-4">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                <p className="mt-2 text-gray-600">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
