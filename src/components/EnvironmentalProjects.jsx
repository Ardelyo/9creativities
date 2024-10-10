import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, FileText, Camera } from 'lucide-react';
import Slider from "react-slick";
import SliderDocumentationCard from './SliderDocumentationCard';

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

const EnvironmentalProjects = () => {
  return (
    <>
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
    </>
  );
};

export default EnvironmentalProjects;