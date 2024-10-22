import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Droplet, Users, FileText, Camera } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const EnvironmentalTeam = () => {
  const teamMembers = [
    { name: "Aira", role: "Ketua Tim", interest: "Restorasi Ekosistem", image: "/placeholder.svg" },
    { name: "Asyifa R", role: "Anggota Tim", interest: "Anggota Tim", image: "/placeholder.svg" },
    { name: "Anandita", role: "Anggota Tim", interest: "Anggota Tim", image: "/placeholder.svg" },
    { name: "Noval", role: "Anggota Tim", interest: "Anggota Tim", image: "/placeholder.svg" },
    { name: "Indina", role: "Anggota Tim", interest: "Anggota Tim", image: "/placeholder.svg" },
    { name: "Ashyffa K", role: "Anggota Tim", interest: "Anggota Tim", image: "/placeholder.svg" },
    { name: "Aldy", role: "Anggota Tim", interest: "Anggota Tim", image: "/placeholder.svg" },
    { name: "Bayu P", role: "Anggota Tim", interest: "Anggota Tim", image: "/placeholder.svg" },
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
        "Perawatan dan regenerasi bahan filter secara berkala",
        "Edukasi masyarakat tentang penggunaan dan manfaat filter air"
      ],
      impact: "Proyek ini dapat menyediakan akses air bersih yang terjangkau bagi masyarakat, mengurangi risiko penyakit yang ditularkan melalui air, dan meningkatkan kesadaran tentang pentingnya konservasi air.",
      photos: [
        "/IMG-20240920-WA0078.jpg", "/IMG-20240920-WA0076.jpg", "/IMG-20240920-WA0081.jpg",
        "/IMG-20240920-WA0072.jpg", "/IMG-20240920-WA0065.jpg", "/IMG-20240920-WA0066.jpg",
        "/IMG-20240920-WA0062.jpg", "/IMG-20240920-WA0061.jpg", "/IMG-20240920-WA0063.jpg",
        "/IMG-20240920-WA0060.jpg", "/IMG-20240920-WA0059.jpg", "/IMG-20240920-WA0058.jpg",
        "/IMG-20240920-WA0070.jpg", "/IMG-20240920-WA0069.jpg", "/IMG-20240920-WA0031.jpg",
        "/IMG-20240920-WA0030.jpg", "/IMG-20240920-WA0029.jpg", "/IMG-20240920-WA0027.jpg",
        "/IMG-20240920-WA0026.jpg"
      ],
      documentation: "Dokumentasi lengkap meliputi desain sistem, hasil uji laboratorium, panduan pemeliharaan, dan laporan dampak lingkungan."
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <DropletAnimation>
      <div className="min-h-screen bg-white p-4 sm:p-8 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="text-green-600 hover:text-green-800 transition-colors mb-8 inline-block text-xl">
            <ArrowLeft className="mr-2 inline" /> Kembali
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6">
              Tim <span className="text-green-600">Teknologi Lingkungan</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-6"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16 bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800">Pengenalan Teknologi Lingkungan</h2>
            <p className="text-gray-600 mb-6 text-base sm:text-lg">
              Teknologi Lingkungan adalah penerapan prinsip-prinsip ilmiah dan teknik untuk melindungi lingkungan alam dan sumber daya alam, serta mengurangi dampak negatif aktivitas manusia terhadap ekosistem. Fokus utamanya adalah pada pengelolaan air, udara, dan tanah, serta pengembangan solusi berkelanjutan untuk masalah lingkungan.
            </p>
            <p className="text-gray-600 mb-6 text-base sm:text-lg">
              Tim kami berkomitmen untuk mengembangkan solusi inovatif yang membantu melestarikan lingkungan dan meningkatkan kualitas hidup masyarakat, dengan fokus khusus pada pengelolaan dan konservasi air.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16 bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gray-800 flex items-center">
              <Users className="mr-3 text-green-600" /> Kenalan dengan Tim Kami
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-green-50 p-6 rounded-2xl text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={member.image} alt={member.name} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-green-600 mb-2 text-base sm:text-lg">{member.role}</p>
                  {member.role === "Ketua Tim" && (
                    <p className="text-gray-600 text-sm sm:text-base">
                      <span className="font-medium">Minat:</span> {member.interest}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-gray-800 flex items-center">
            <Droplet className="mr-3 text-green-600" /> Proyek Kami
          </h2>
          <div className="grid grid-cols-1 gap-16">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                <SliderDocumentationCard project={project} />
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 flex items-center">
                    <Camera className="mr-3 text-green-600" /> Dokumentasi Proyek
                  </h3>
                  <Slider {...sliderSettings}>
                    {project.photos.map((photo, index) => (
                      <div key={index} className="px-2">
                        <img 
                          src={photo} 
                          alt={`${project.title} foto ${index + 1}`} 
                          className="rounded-lg shadow-md w-full h-64 object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-8 mb-4 text-gray-800 flex items-center">
                    <FileText className="mr-3 text-green-600" /> Dokumentasi
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg">{project.documentation}</p>
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
