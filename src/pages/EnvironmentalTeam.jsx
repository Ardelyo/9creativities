import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Droplet, Users, FileText, Camera } from 'lucide-react';
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const EnvironmentalTeam = () => {
  const teamMembers = [
    { name: "Gita Nirmala", role: "Ahli Lingkungan", interest: "Konservasi Air", image: "/placeholder.svg" },
    { name: "Hadi Santoso", role: "Insinyur Lingkungan", interest: "Pengolahan Air Limbah", image: "/placeholder.svg" },
    { name: "Indah Pertiwi", role: "Analis Kualitas Air", interest: "Pemantauan Ekosistem Air", image: "/placeholder.svg" },
  ];

  const projects = [
    {
      id: 1,
      title: "Filter Air Ramah Lingkungan",
      description: "Sistem pemurnian air menggunakan bahan alami dan berkelanjutan.",
      image: "/placeholder.svg",
      type: "water",
      details: "Proyek Filter Air Ramah Lingkungan kami menggunakan kombinasi bahan alami seperti pasir, kerikil, arang aktif, dan tanaman air untuk menciptakan sistem pemurnian air yang efektif dan ramah lingkungan. Sistem ini dirancang untuk menghilangkan kontaminan dan menyediakan air bersih untuk komunitas lokal.",
      howItWorks: [
        "Pengumpulan dan persiapan bahan filter alami",
        "Penyusunan lapisan filter dalam wadah berkelanjutan",
        "Proses filtrasi air melalui lapisan-lapisan bahan alami",
        "Pengujian kualitas air hasil filtrasi",
        "Perawatan dan regenerasi bahan filter secara berkala"
      ],
      impact: "Proyek ini dapat menyediakan akses air bersih yang terjangkau bagi masyarakat, mengurangi risiko penyakit yang ditularkan melalui air, dan meningkatkan kesadaran tentang pentingnya konservasi air.",
      photos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      documentation: "Dokumentasi lengkap meliputi desain sistem, hasil uji laboratorium, dan panduan pemeliharaan."
    },
  ];

  return (
    <DropletAnimation>
      <div className="page-container relative min-h-screen bg-gradient-to-br from-emerald-100 to-teal-200">
        <BackgroundArt />
        <div className="content-card relative z-10 max-w-4xl mx-auto bg-white bg-opacity-90 rounded-3xl shadow-xl p-8 mt-16">
          <Link to="/" className="back-button text-emerald-600 hover:text-emerald-700 transition-colors">
            <ArrowLeft className="mr-2 inline" /> Kembali
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="title text-4xl font-bold text-emerald-800 mb-8 text-center"
          >
            Tim Teknologi Lingkungan
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 p-6 bg-emerald-50 rounded-3xl shadow-md"
          >
            <h2 className="text-2xl font-bold mb-4 text-emerald-700">Pengenalan Teknologi Lingkungan</h2>
            <p className="text-emerald-800 mb-4">
              Teknologi Lingkungan adalah penerapan prinsip-prinsip ilmiah dan teknik untuk melindungi lingkungan alam dan sumber daya alam, serta mengurangi dampak negatif aktivitas manusia terhadap ekosistem. Fokus utamanya adalah pada pengelolaan air, udara, dan tanah, serta pengembangan solusi berkelanjutan untuk masalah lingkungan.
            </p>
            <p className="text-emerald-800 mb-4">
              Tim kami berkomitmen untuk mengembangkan solusi inovatif yang membantu melestarikan lingkungan dan meningkatkan kualitas hidup masyarakat, dengan fokus khusus pada pengelolaan dan konservasi air.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-emerald-700">Kunjungan ke PDAM Tirtawening</h3>
            <p className="text-emerald-800 mb-4">
              Sebagai bagian dari proyek kami, tim Teknologi Lingkungan berkesempatan mengunjungi PDAM Tirtawening. Kunjungan ini memberikan wawasan berharga tentang proses pengolahan air bersih skala besar dan praktik manajemen air yang efisien. Pengalaman ini memperkaya pemahaman kami tentang teknologi pengolahan air dan menginspirasi pengembangan proyek Filter Air Ramah Lingkungan kami.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12 p-6 bg-emerald-50 rounded-3xl shadow-md"
          >
            <h2 className="text-2xl font-bold mb-6 text-emerald-700 flex items-center">
              <Users className="mr-2" /> Kenalan dengan Tim Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl text-center shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-lg font-semibold text-emerald-700">{member.name}</h3>
                  <p className="text-sm text-emerald-600 mb-2">{member.role}</p>
                  <p className="text-sm text-emerald-800">
                    <span className="font-medium">Minat:</span> {member.interest}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <h2 className="text-3xl font-bold mb-8 text-emerald-800 flex items-center">
            <Droplet className="mr-2" /> Proyek Kami
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden"
              >
                <SliderDocumentationCard project={project} />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-emerald-700 flex items-center">
                    <Camera className="mr-2" /> Foto Proyek
                  </h3>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.photos.map((photo, index) => (
                      <img key={index} src={photo} alt={`${project.title} foto ${index + 1}`} className="rounded-lg shadow-md" />
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-emerald-700 flex items-center">
                    <FileText className="mr-2" /> Dokumentasi
                  </h3>
                  <p className="text-emerald-800">{project.documentation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DropletAnimation>
  );
};

export default EnvironmentalTeam;