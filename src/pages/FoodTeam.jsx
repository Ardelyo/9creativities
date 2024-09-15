import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Utensils, Users, FileText, Camera } from 'lucide-react';
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const FoodTeam = () => {
  const teamMembers = [
    { name: "Joko Widodo", role: "Ahli Teknologi Pangan", interest: "Fermentasi Makanan", image: "/placeholder.svg" },
    { name: "Kartini Sari", role: "Ahli Gizi", interest: "Makanan Fungsional", image: "/placeholder.svg" },
    { name: "Laksono Adi", role: "Teknisi Pengolahan Pangan", interest: "Pengawetan Alami", image: "/placeholder.svg" },
  ];

  const projects = [
    {
      id: 1,
      title: "Produksi Yoghurt Probiotik",
      description: "Pengembangan yoghurt kaya probiotik dengan bahan lokal.",
      image: "/placeholder.svg",
      type: "food",
      details: "Proyek Produksi Yoghurt Probiotik kami berfokus pada pengembangan yoghurt yang kaya akan bakteri baik (probiotik) menggunakan susu dan kultur bakteri lokal. Kami menggabungkan teknik fermentasi tradisional dengan teknologi modern untuk menghasilkan produk yang tidak hanya lezat tetapi juga menyehatkan pencernaan.",
      howItWorks: [
        "Seleksi susu berkualitas tinggi dari peternak lokal",
        "Pasteurisasi susu untuk menghilangkan bakteri yang tidak diinginkan",
        "Inokulasi dengan kultur probiotik pilihan",
        "Fermentasi pada suhu dan waktu yang terkontrol",
        "Pendinginan dan pengemasan produk jadi"
      ],
      impact: "Proyek ini mendukung peternak susu lokal, mempromosikan gaya hidup sehat melalui konsumsi probiotik, dan membuka peluang wirausaha dalam industri makanan sehat.",
      photos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      documentation: "Dokumentasi proyek mencakup formula yoghurt, prosedur produksi terstandar, dan hasil uji laboratorium untuk kandungan nutrisi dan jumlah probiotik."
    },
  ];

  return (
    <DropletAnimation>
      <div className="min-h-screen bg-gradient-to-br from-orange-900 to-red-700 p-4 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/" className="text-orange-300 hover:text-orange-100 transition-colors mb-8 inline-block">
            <ArrowLeft className="mr-2 inline" /> Kembali
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-red-400 to-yellow-500">
              Tim Teknologi Pangan
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-orange-300 via-red-400 to-yellow-500 mx-auto mb-4"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 md:p-8 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-200">Pengenalan Teknologi Pangan</h2>
            <p className="text-orange-100 mb-4 text-base md:text-lg">
              Teknologi Pangan adalah bidang ilmu yang menerapkan prinsip-prinsip sains dan teknik dalam pengolahan, pengawetan, dan distribusi makanan. Tujuannya adalah untuk menghasilkan makanan yang aman, bergizi, dan memiliki umur simpan yang panjang, sambil mempertahankan atau meningkatkan kualitas sensoriknya.
            </p>
            <p className="text-orange-100 mb-4 text-base md:text-lg">
              Tim kami fokus pada pengembangan produk pangan inovatif yang tidak hanya lezat tetapi juga memberikan manfaat kesehatan tambahan. Kami menggabungkan pengetahuan tradisional dengan teknologi modern untuk menciptakan makanan yang mendukung gaya hidup sehat dan berkelanjutan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12 bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 md:p-8 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-200 flex items-center">
              <Users className="mr-2" /> Kenalan dengan Tim Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-orange-800 bg-opacity-50 p-6 rounded-lg text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={member.image} alt={member.name} className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-lg md:text-xl font-semibold text-orange-200">{member.name}</h3>
                  <p className="text-orange-300 mb-2">{member.role}</p>
                  <p className="text-orange-400">
                    <span className="font-medium">Minat:</span> {member.interest}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-100 flex items-center">
            <Utensils className="mr-2" /> Proyek Kami
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg overflow-hidden shadow-lg"
              >
                <SliderDocumentationCard project={project} />
                <div className="p-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-orange-200 flex items-center">
                    <Camera className="mr-2" /> Foto Proyek
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {project.photos.map((photo, index) => (
                      <motion.img 
                        key={index} 
                        src={photo} 
                        alt={`${project.title} foto ${index + 1}`} 
                        className="rounded-lg shadow-md w-full h-48 md:h-64 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-orange-200 flex items-center">
                    <FileText className="mr-2" /> Dokumentasi
                  </h3>
                  <p className="text-orange-100 text-base md:text-lg">{project.documentation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DropletAnimation>
  );
};

export default FoodTeam;