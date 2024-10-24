import React from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FileText, Camera } from 'lucide-react';

const ProjectShowcase = ({ project, accentColor }) => {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl mb-12"
    >
      <div className={`bg-gradient-to-r from-${accentColor}-500 to-${accentColor}-600 p-8 text-white`}>
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="text-lg opacity-90">{project.description}</p>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Cara Kerja</h3>
          <ul className="space-y-3">
            {project.howItWorks.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-${accentColor}-100 text-${accentColor}-600 flex items-center justify-center mr-3 mt-1`}>
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <Camera className="mr-2" /> Dokumentasi Proyek
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
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <FileText className="mr-2" /> Dampak
          </h3>
          <p className="text-gray-600">{project.impact}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectShowcase;