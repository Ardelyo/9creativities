import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Book, Star, UserCircle2 } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';

const OurClass = () => {
  const classInfo = {
    name: "Kelas 9C",
    slogan: "Cerdas, Cermat, Ceria",
    motto: "Bersatu dalam Kreativitas, Berinovasi untuk Masa Depan",
    description: "Kelas 9C adalah kumpulan siswa-siswi berbakat yang bersemangat dalam mengeksplorasi teknologi dan inovasi. Kami percaya bahwa melalui kolaborasi dan kreativitas, kami dapat menciptakan solusi-solusi yang berdampak positif bagi masyarakat dan lingkungan.",
    achievements: [
      "Juara 1 Lomba Karya Ilmiah Remaja Tingkat Kota",
      "Finalis Olimpiade Sains Nasional Bidang Teknologi",
      "Penghargaan Inovasi Terbaik dalam Pameran Sains Sekolah",
    ],
    activities: [
      "Klub Robotika",
      "Kelompok Studi Lingkungan",
      "Tim Pengembang Aplikasi Sekolah",
      "Komunitas Penulis Teknologi",
    ],
    organization: [
      { role: "Wali Kelas", name: "Bu Eka Supriati" },
      { role: "Ketua Murid", name: "Julia Putri A.N.A" },
      { role: "Wakil Ketua Murid", name: "Andika Aswaddika" },
      { role: "Bendahara", name: "Rizka dan Cinta" },
      { role: "Seksi Absensi", name: "Asyifa R" },
      { role: "Seksi Keamanan", name: "Ritme D" },
      { role: "Seksi Kerohanian", name: "Satria Gian A" },
      { role: "Seksi Upacara", name: "Keanu" },
      { role: "Seksi Kebersihan", name: "Ardellio S.A" },
      { role: "Seksi Olahraga", name: "Novaldo D.M" },
    ],
  };

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
            Tentang <span className="text-blue-600">{classInfo.name}</span>
          </h1>
          <p className="text-2xl text-blue-600 font-semibold mb-2">
            {classInfo.slogan}
          </p>
          <p className="text-xl text-gray-600 italic">
            "{classInfo.motto}"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 flex items-center">
            <Users className="mr-2 text-blue-600" /> Tentang Kami
          </h2>
          <p className="text-gray-600 mb-4 text-base sm:text-lg">
            {classInfo.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12 bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 flex items-center">
            <UserCircle2 className="mr-2 text-blue-600" /> Struktur Organisasi Kelas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {classInfo.organization.map((member, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-4">
                <h3 className="font-semibold text-blue-600">{member.role}</h3>
                <p>{member.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-12 bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 flex items-center">
            <Star className="mr-2 text-yellow-500" /> Prestasi Kami
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            {classInfo.achievements.map((achievement, index) => (
              <li key={index} className="mb-2">{achievement}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-12 bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 flex items-center">
            <Book className="mr-2 text-green-500" /> Kegiatan Ekstrakurikuler
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            {classInfo.activities.map((activity, index) => (
              <li key={index} className="mb-2">{activity}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default OurClass;
