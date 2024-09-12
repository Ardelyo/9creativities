import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Lightbulb, Award } from 'lucide-react';
import DropletAnimation from '../components/DropletAnimation';

const About = () => {
  const teamMembers = [
    { name: "Alice", role: "Manajer Proyek" },
    { name: "Bob", role: "Desainer" },
    { name: "Charlie", role: "Pengembang" },
    { name: "Diana", role: "Pembuat Konten" },
  ];

  return (
    <DropletAnimation>
      <div className="page-container">
        <div className="content-card bg-white rounded-3xl shadow-lg p-8">
          <Link to="/" className="back-button text-navy-blue">
            <ArrowLeft className="mr-2" /> Kembali
          </Link>
          <h1 className="title text-4xl font-bold text-navy-blue mb-8">Tentang Nine Creativities</h1>
          
          <motion.div 
            className="mb-8 p-6 bg-gray-100 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-navy-blue flex items-center">
              <Users className="mr-2" /> Tim Kami
            </h2>
            <p className="text-gray-700 mb-4">
              Nine Creativities dibuat oleh Kelompok 1, tim siswa yang bersemangat untuk menampilkan proyek inovatif dalam teknologi lingkungan dan pangan.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-navy-blue rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{member.name[0]}</span>
                  </div>
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="mb-8 p-6 bg-gray-100 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-navy-blue flex items-center">
              <Lightbulb className="mr-2" /> Misi Kami
            </h2>
            <p className="text-gray-700">
              Nine Creativities bertujuan untuk menampilkan proyek inovatif yang dikembangkan oleh siswa Kelas 9C. 
              Kami ingin menunjukkan kreativitas dan kerja keras teman-teman kami di bidang teknologi lingkungan dan pangan.
            </p>
          </motion.div>

          <motion.div 
            className="mb-8 p-6 bg-gray-100 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-navy-blue flex items-center">
              <Award className="mr-2" /> Visi Kami
            </h2>
            <p className="text-gray-700">
              Kami membayangkan masa depan di mana anak muda berkontribusi besar dalam menyelesaikan masalah dunia nyata. 
              Melalui proyek kami, kami berusaha menginspirasi dan mendorong perubahan positif di komunitas kami dan sekitarnya.
            </p>
          </motion.div>
        </div>
      </div>
    </DropletAnimation>
  );
};

export default About;