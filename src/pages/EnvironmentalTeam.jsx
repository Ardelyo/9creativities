import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Droplet, Users, FileText, Camera } from 'lucide-react';
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';

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
      details: "Proyek Filter Air Ramah Lingkungan kami menggunakan kombinasi bahan alami seperti pasir, kerikil, arang aktif, dan tanaman air untuk menciptakan sistem pemurnian air yang efektif dan ramah lingkungan.",
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 to-teal-700 p-4 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-6xl mx-auto relative z-10">
        <Link to="/" className="text-emerald-300 hover:text-emerald-100 transition-colors mb-8 inline-flex items-center">
          <ArrowLeft className="mr-2" /> Kembali
        </Link>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-400 to-green-500">
            Tim Teknologi Lingkungan
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-emerald-300 via-teal-400 to-green-500 mx-auto mb-4 rounded-full"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 bg-white bg-opacity-10 backdrop-blur-md rounded-[40px] p-6 md:p-8 shadow-lg overflow-hidden"
        >
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-emerald-500 to-transparent opacity-20 rounded-t-[40px]" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-200 relative z-10">Pengenalan Teknologi Lingkungan</h2>
            <p className="text-emerald-100 mb-4 text-base md:text-lg relative z-10">
              Teknologi Lingkungan adalah penerapan prinsip-prinsip ilmiah dan teknik untuk melindungi lingkungan alam dan sumber daya alam, serta mengurangi dampak negatif aktivitas manusia terhadap ekosistem. Fokus utamanya adalah pada pengelolaan air, udara, dan tanah, serta pengembangan solusi berkelanjutan untuk masalah lingkungan.
            </p>
            <p className="text-emerald-100 mb-4 text-base md:text-lg relative z-10">
              Tim kami berkomitmen untuk mengembangkan solusi inovatif yang membantu melestarikan lingkungan dan meningkatkan kualitas hidup masyarakat, dengan fokus khusus pada pengelolaan dan konservasi air.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12 bg-white bg-opacity-10 backdrop-blur-md rounded-[40px] p-6 md:p-8 shadow-lg overflow-hidden"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-emerald-200 flex items-center">
            <Users className="mr-2" /> Kenalan dengan Tim Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-emerald-800 bg-opacity-50 p-6 rounded-[30px] text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={member.image} alt={member.name} className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-lg md:text-xl font-semibold text-emerald-200">{member.name}</h3>
                <p className="text-emerald-300 mb-2">{member.role}</p>
                <p className="text-emerald-400">
                  <span className="font-medium">Minat:</span> {member.interest}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-emerald-100 flex items-center">
          <Droplet className="mr-2" /> Proyek Kami
        </h2>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-[40px] overflow-hidden shadow-lg"
            >
              <SliderDocumentationCard project={project} />
              <div className="p-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-200 flex items-center">
                  <Camera className="mr-2" /> Foto Proyek
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {project.photos.map((photo, index) => (
                    <motion.img 
                      key={index} 
                      src={photo} 
                      alt={`${project.title} foto ${index + 1}`} 
                      className="rounded-[20px] shadow-md w-full h-48 md:h-64 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-200 flex items-center">
                  <FileText className="mr-2" /> Dokumentasi
                </h3>
                <p className="text-emerald-100 text-base md:text-lg">{project.documentation}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalTeam;