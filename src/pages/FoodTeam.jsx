import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Utensils, Users, FileText, Camera } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderDocumentationCard from '../components/SliderDocumentationCard';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';
import FoodTeamMembers from '../components/FoodTeamMembers';

const FoodTeam = () => {
  const projects = [
    {
      id: 1,
      title: "Produksi Tempe",
      description: "Pengembangan tempe dengan bahan lokal dan proses fermentasi optimal.",
      image: "/placeholder.svg",
      type: "food",
      details: "Proyek Produksi Tempe kami fokus pada penggunaan kedelai lokal berkualitas tinggi dan optimalisasi proses fermentasi untuk menghasilkan tempe yang lezat dan bergizi. Kami menggabungkan metode tradisional dengan inovasi teknologi untuk meningkatkan konsistensi dan kualitas produk.",
      howItWorks: [
        "Seleksi dan persiapan kedelai lokal berkualitas",
        "Proses perendaman dan pengupasan kulit kedelai",
        "Perebusan kedelai untuk mensterilkan dan melunakkan",
        "Inokulasi dengan ragi tempe (Rhizopus oligosporus)",
        "Fermentasi dalam kondisi suhu dan kelembaban terkontrol",
        "Pengemasan dan penyimpanan produk jadi"
      ],
      impact: "Proyek ini mendukung petani kedelai lokal, mempromosikan makanan tradisional yang sehat, dan membuka peluang wirausaha dalam industri makanan fermentasi.",
      photos: [
        "/IMG-20240920-WA0049.jpg", "/IMG-20240920-WA0051.jpg", "/IMG-20240920-WA0048.jpg",
        "/IMG-20240920-WA0046.jpg", "/IMG-20240920-WA0045.jpg", "/IMG-20240920-WA0044.jpg",
        "/IMG-20240920-WA0043.jpg", "/IMG-20240920-WA0042.jpg", "/IMG-20240920-WA0041.jpg",
        "/IMG-20240920-WA0040.jpg", "/IMG-20240920-WA0039.jpg", "/IMG-20240920-WA0038.jpg"
      ],
      documentation: "Dokumentasi proyek mencakup standar operasional prosedur pembuatan tempe, hasil uji laboratorium untuk kandungan nutrisi, dan panduan kontrol kualitas."
    },
    {
      id: 2,
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
      photos: [
        "/IMG-20240920-WA0037.jpg", "/IMG-20240920-WA0036.jpg", "/IMG-20240920-WA0035.jpg",
        "/IMG-20240920-WA0028.jpg", "/IMG-20240920-WA0025.jpg", "/IMG-20240920-WA0024.jpg",
        "/IMG-20240920-WA0023.jpg", "/IMG-20240920-WA0022.jpg", "/IMG-20240920-WA0021.jpg",
        "/IMG-20240920-WA0020.jpg", "/IMG-20240920-WA0019.jpg", "/IMG-20240920-WA0018.jpg"
      ],
      documentation: "Dokumentasi proyek mencakup formula yoghurt, prosedur produksi terstandar, dan hasil uji laboratorium untuk kandungan nutrisi dan jumlah probiotik."
    },
    {
      id: 3,
      title: "Produksi Tape",
      description: "Inovasi dalam pembuatan tape dengan variasi bahan baku lokal.",
      image: "/placeholder.svg",
      type: "food",
      details: "Proyek Produksi Tape kami mengeksplorasi variasi bahan baku lokal seperti singkong, beras ketan, dan ubi untuk menciptakan tape dengan cita rasa unik. Kami menerapkan kontrol fermentasi yang presisi untuk menghasilkan tape dengan kualitas konsisten dan rasa yang optimal.",
      howItWorks: [
        "Pemilihan dan persiapan bahan baku (singkong, beras ketan, atau ubi)",
        "Pengukusan bahan baku hingga matang sempurna",
        "Pendinginan dan inokulasi dengan ragi tape",
        "Fermentasi dalam wadah tertutup selama 2-3 hari",
        "Pemantauan dan kontrol suhu fermentasi",
        "Pengemasan dan penyimpanan produk jadi"
      ],
      impact: "Proyek ini melestarikan makanan tradisional, mendukung petani lokal, dan mengembangkan variasi produk fermentasi yang dapat dinikmati oleh berbagai kalangan.",
      photos: [
        "/IMG-20240920-WA0017.jpg", "/IMG-20240920-WA0016.jpg", "/IMG-20240920-WA0015.jpg",
        "/IMG-20240920-WA0014.jpg", "/IMG-20240920-WA0013.jpg", "/IMG-20240920-WA0012.jpg",
        "/IMG-20240920-WA0011.jpg", "/IMG-20240920-WA0010.jpg", "/IMG-20240920-WA0009.jpg"
      ],
      documentation: "Dokumentasi meliputi resep dan prosedur pembuatan tape, analisis perbandingan nutrisi antar variasi tape, dan panduan penyimpanan untuk menjaga kualitas produk."
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
        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/" className="text-orange-600 hover:text-orange-800 transition-colors mb-8 inline-block">
            <ArrowLeft className="mr-2 inline" /> Kembali
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4">
              Tim <span className="text-orange-600">Teknologi Pangan</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-4"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">Pengenalan Teknologi Pangan</h2>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              Teknologi Pangan adalah bidang ilmu yang menerapkan prinsip-prinsip sains dan teknik dalam pengolahan, pengawetan, dan distribusi makanan. Tujuannya adalah untuk menghasilkan makanan yang aman, bergizi, dan memiliki umur simpan yang panjang, sambil mempertahankan atau meningkatkan kualitas sensoriknya.
            </p>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              Tim kami fokus pada pengembangan produk pangan inovatif yang tidak hanya lezat tetapi juga memberikan manfaat kesehatan tambahan. Kami menggabungkan pengetahuan tradisional dengan teknologi modern untuk menciptakan makanan yang mendukung gaya hidup sehat dan berkelanjutan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12 bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 flex items-center">
              <Users className="mr-2" /> Kenalan dengan Tim Kami
            </h2>
            <FoodTeamMembers />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-800 flex items-center">
            <Utensils className="mr-2" /> Proyek Kami
          </h2>
          <div className="grid grid-cols-1 gap-12">
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
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800 flex items-center">
                    <Camera className="mr-2" /> Foto Proyek
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
                    <FileText className="mr-2" /> Dokumentasi
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

export default FoodTeam;
