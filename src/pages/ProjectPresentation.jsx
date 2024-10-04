import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Pendahuluan Nine Creativities",
    content: "Tim kami menciptakan Nine Creativities melalui kolaborasi kreatif yang didorong oleh ide-ide orisinal dan dukungan teknologi. AI berperan sebagai alat bantu, bukan pencipta utama.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    title: "Tim Pengembang",
    content: "Kami adalah tim yang terdiri dari desainer, pengembang, dan kreator konten yang bersemangat untuk menciptakan pengalaman digital yang inovatif.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    title: "Perencanaan Desain dengan Canva",
    content: "Kami menggunakan Canva untuk merencanakan desain secara visual, merancang konsep dan ide utama dalam bentuk wireframe, moodboard, dan visual dasar untuk menentukan nuansa desain.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    title: "Implementasi UI/UX dengan Figma",
    content: "Dengan Figma, kami mengimplementasikan elemen-elemen UI/UX secara detail dan interaktif, membangun layout dan memastikan navigasi antarhalaman berjalan lancar.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    title: "Pengembangan Fungsionalitas dengan GPTengineer",
    content: "GPTengineer membantu dalam proses pengkodean dan pemrograman, memberikan solusi efisien dan saran dalam menulis skrip. Keputusan final dan logika pemrograman tetap ditentukan oleh tim.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    title: "Publikasi dengan Google Site",
    content: "Kami memanfaatkan Google Site sebagai media publikasi, mengembed link dari GPTengineer ke dalamnya untuk memudahkan akses pengunjung ke seluruh fitur yang telah kami buat.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    title: "Fitur Utama",
    content: "Nine Creativities menawarkan berbagai fitur inovatif yang menggabungkan kreativitas dan teknologi untuk memberikan pengalaman unik kepada pengguna.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    title: "Proses Pengujian",
    content: "Kami melakukan pengujian menyeluruh untuk memastikan kualitas dan performa optimal dari setiap aspek Nine Creativities.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    title: "Peluncuran",
    content: "Setelah melalui berbagai tahapan pengembangan dan pengujian, Nine Creativities siap diluncurkan kepada publik.",
    image: "/placeholder.svg" // Replace with actual image path
  },
  {
    title: "Kesimpulan dan Pembelajaran",
    content: "Proses pembuatan Nine Creativities memberikan banyak pembelajaran berharga bagi tim kami, menggabungkan kreativitas manusia dengan bantuan teknologi AI.",
    image: "/placeholder.svg" // Replace with actual image path
  }
];

const ProjectPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-gradient-to-br from-purple-600 to-pink-500">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex items-center justify-center p-8"
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 max-w-4xl w-full h-full flex flex-col justify-between">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {slides[currentSlide].title}
            </h2>
            <div className="flex-grow flex items-center justify-center">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              />
            </div>
            <p className="text-xl md:text-2xl text-white mt-4">
              {slides[currentSlide].content}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 focus:outline-none"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 focus:outline-none"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>
    </div>
  );
};

export default ProjectPresentation;