import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, FileText, Camera } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderDocumentationCard from './SliderDocumentationCard';
import { projects } from '../data/foodTeamData';

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

const FoodTeamProjects = () => {
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

export default FoodTeamProjects;