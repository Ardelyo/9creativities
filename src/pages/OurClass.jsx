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
      { role: "Wali Kelas", name: "Bu Eka Supriati", children: [] },
      { role: "Ketua Murid", name: "Julia Putri A.N.A", children: [
        { role: "Wakil Ketua Murid", name: "Andika Aswaddika", children: [] },
        { role: "Bendahara", name: "Rizka dan Cinta", children: [] },
        { role: "Seksi Absensi", name: "Asyifa R", children: [] },
        { role: "Seksi Keamanan", name: "Ritme D", children: [] },
        { role: "Seksi Kerohanian", name: "Satria Gian A", children: [] },
        { role: "Seksi Upacara", name: "Keanu", children: [] },
        { role: "Seksi Kebersihan", name: "Ardellio S.A", children: [] },
        { role: "Seksi Olahraga", name: "Novaldo D.M", children: [] },
      ]},
    ],
  };

  const TreeNode = ({ node }) => (
    <div className="flex flex-col items-center">
      <div className="bg-blue-100 p-2 rounded-lg text-center mb-2">
        <div className="font-semibold">{node.role}</div>
        <div className="text-sm">{node.name}</div>
      </div>
      {node.children.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );

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
          className="mb-12 bg-white rounded-3xl p-6 sm:p-8 shadow-xl overflow-x-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 flex items-center">
            <UserCircle2 className="mr-2 text-blue-600" /> Struktur Organisasi Kelas
          </h2>
          <div className="min-w-max">
            {classInfo.organization.map((root, index) => (
              <TreeNode key={index} node={root} />
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
