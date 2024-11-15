import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import InfoCards from '../components/InfoCards';
import BinaryLoadingAnimation from '../components/BinaryLoadingAnimation';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const tutorialSlides = [
  {
    title: "Selamat Datang di Nine Creativities",
    description: "Platform inovatif yang menampilkan kreativitas dan teknologi dari kelas 9C"
  },
  {
    title: "Eksplorasi Proyek Kami",
    description: "Temukan berbagai proyek inovatif dari empat tim spesialis kami"
  },
  {
    title: "Mari Mulai Petualangan",
    description: "Siap untuk menjelajahi dunia Nine Creativities?"
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < tutorialSlides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      setShowLoading(true);
    }
  };

  const handleLoadingComplete = () => {
    navigate('/index');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <AnimatePresence mode="wait">
        {showLoading ? (
          <BinaryLoadingAnimation onComplete={handleLoadingComplete} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 py-16"
          >
            <motion.div
              key={currentSlide}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
                {tutorialSlides[currentSlide].title}
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                {tutorialSlides[currentSlide].description}
              </p>
              <Button
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                {currentSlide < tutorialSlides.length - 1 ? (
                  "Lanjutkan"
                ) : (
                  <>
                    Mulai Eksplorasi
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </motion.div>

            <InfoCards />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;