import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, UserCircle2, Trophy, Target, Heart } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import BackgroundArt from '../components/BackgroundArt';

const OurClass = () => {
  const classInfo = {
    name: "Kelas 9C",
    slogan: "Cerdas, Cermat, Ceria",
    motto: "Bersatu dalam Kreativitas, Berinovasi untuk Masa Depan",
    description: "Kelas 9C adalah kumpulan siswa-siswi berbakat yang bersemangat dalam mengeksplorasi teknologi dan inovasi. Kami percaya bahwa melalui kolaborasi dan kreativitas, kami dapat menciptakan solusi-solusi yang berdampak positif bagi masyarakat dan lingkungan.",
    values: [
      { icon: Trophy, title: "Prestasi", desc: "Selalu berusaha mencapai yang terbaik" },
      { icon: Target, title: "Fokus", desc: "Berkomitmen pada tujuan pembelajaran" },
      { icon: Heart, title: "Kebersamaan", desc: "Mendukung satu sama lain" }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const TreeNode = ({ node }) => (
    <motion.div 
      variants={itemVariants}
      className="flex flex-col items-center"
    >
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-white dark:bg-gray-900 px-6 py-4 rounded-lg shadow-xl">
          <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
            {node.role}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">{node.name}</div>
        </div>
      </div>
      {node.children.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-8 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-7xl mx-auto relative z-10">
        <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors mb-8 inline-block">
          <ArrowLeft className="mr-2 inline" /> Kembali
        </Link>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl sm:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                {classInfo.name}
              </span>
            </h1>
            <p className="text-2xl text-blue-600 font-semibold mb-4">
              {classInfo.slogan}
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 italic max-w-2xl mx-auto">
              "{classInfo.motto}"
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {classInfo.values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <value.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
              <Users className="mr-3 text-blue-600" /> Tentang Kami
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {classInfo.description}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl overflow-x-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
              <UserCircle2 className="mr-3 text-blue-600" /> Struktur Organisasi Kelas
            </h2>
            <div className="min-w-max p-4">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col items-center space-y-8"
              >
                {classInfo.organization.map((root, index) => (
                  <TreeNode key={index} node={root} />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurClass;
