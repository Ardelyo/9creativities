import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, FileText, Camera } from 'lucide-react';
import Slider from "react-slick";
import SliderDocumentationCard from './SliderDocumentationCard';

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
  // ... Add other projects here
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

const FoodProjects = () => {
  return (
    <>
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
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/placeholder.svg';
                        console.error(`Failed to load image for ${project.title}: ${photo}`);
                      }}
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
    </>
  );
};

export default FoodProjects;