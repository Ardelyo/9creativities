import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplet, Utensils, Cpu, Wifi, Bot, Package, Users, BookOpen } from 'lucide-react';

const Index = () => {
  const teams = [
    { title: "Teknologi Lingkungan", icon: Droplet, color: "bg-green-500", to: "/environmental-team" },
    { title: "Teknologi Pangan", icon: Utensils, color: "bg-orange-500", to: "/food-team" },
    { title: "Teknologi Informasi", icon: Cpu, color: "bg-blue-500", to: "/information-technology" },
    { title: "Teknologi Komunikasi", icon: Wifi, color: "bg-purple-500", to: "/communication-technology" },
    { title: "Produk Kami", icon: Package, color: "bg-pink-500", to: "/produk-kami" },
    { title: "Tentang Kelas Kami", icon: Users, color: "bg-yellow-500", to: "/our-class" },
  ];

  const p5Activities = [
    {
      title: "Teknologi Lingkungan: Kunjungan ke PDAM Tirtawening",
      description: "Kami mengunjungi PDAM Tirtawening untuk mempelajari proses pengolahan air bersih, memahami pentingnya air bersih, dan menghargai kerja keras petugas PDAM.",
      date: "14 Agustus 2024",
      icon: Droplet,
    },
    {
      title: "Teknologi Pangan: Membuat Tempe, Tape, dan Yoghurt",
      description: "Kami belajar membuat tempe, tape, dan yoghurt bersama Bu Eka, mempelajari proses fermentasi, mengembangkan kreativitas, dan menghargai kearifan lokal.",
      date: "15 Agustus 2024",
      icon: Utensils,
    },
    {
      title: "Teknologi Komunikasi: Workshop Instagram",
      description: "Bersama Pak Ade, kami belajar menggunakan fitur-fitur Instagram secara maksimal, memahami kekuatan media sosial, dan pentingnya literasi digital.",
      date: "Agustus 2024",
      icon: Wifi,
    },
    {
      title: "Teknologi Informasi: Pembuatan Website dengan Google Sites",
      description: "Pak Ade membimbing kami membuat website menggunakan Google Sites, memahami dasar-dasar pembuatan website, dan membangun kreativitas digital.",
      date: "Agustus 2024",
      icon: Cpu,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Nine <span className="text-blue-600">Creativities</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600">
            Jelajahi inovasi teknologi dari berbagai tim kreatif kami
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {teams.map((team, index) => (
            <motion.div
              key={team.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300"
            >
              <Link to={team.to} className="flex flex-col items-center space-y-4 sm:space-y-6">
                <div className={`${team.color} p-4 sm:p-6 rounded-full`}>
                  <team.icon className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                </div>
                <span className="text-xl sm:text-2xl font-semibold text-center">{team.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16 text-center"
        >
          <Link to="/robot-c" className="inline-flex items-center space-x-3 bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            <Bot className="w-6 h-6 sm:w-8 sm:h-8" />
            <span>Chat with Robot C</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center flex items-center justify-center">
            <BookOpen className="mr-4 text-blue-600" />
            Kegiatan P5
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Kegiatan P5 (Projek Penguatan Profil Pelajar Pancasila) adalah bagian seru dari kurikulum sekolah kami! 
            Kami belajar dan berkreasi melalui berbagai proyek yang mengasah kreativitas, kolaborasi, dan kemampuan memecahkan masalah.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {p5Activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <activity.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{activity.date}</p>
                  </div>
                </div>
                <p className="text-gray-600">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;