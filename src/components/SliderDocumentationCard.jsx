import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SliderDocumentationCard = ({ project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: 'Overview', content: project.description },
    { title: 'Details', content: project.details },
    { title: 'How It Works', content: (
      <ol className="list-decimal list-inside">
        {project.howItWorks.map((step, index) => (
          <li key={index} className="mb-1">{step}</li>
        ))}
      </ol>
    )},
    { title: 'Impact', content: project.impact },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="bg-white text-navy-blue p-6 rounded-3xl shadow-lg">
      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="min-h-[200px]"
          >
            <h4 className="text-xl font-semibold mb-2">{slides[currentSlide].title}</h4>
            <div className="text-gray-700">{slides[currentSlide].content}</div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={prevSlide} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SliderDocumentationCard;