import React from 'react';
import { motion } from 'framer-motion';

const PresentationSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16 bg-white rounded-xl shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Presentasi P5</h2>
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe 
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          src="https://www.canva.com/design/DAGUS9bGZGg/vTNk3LP4NxDETG25VHqeNQ/view?embed" 
          allowFullScreen
          loading="lazy"
          title="P5 Presentation"
        />
      </div>
      <div className="mt-4 text-center">
        <a 
          href="https://www.canva.com/design/DAGUS9bGZGg/vTNk3LP4NxDETG25VHqeNQ/view?utm_content=DAGUS9bGZGg&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          P5 KELOMPOK TEKNOLOGI INFORMASI DAN KOMUNIKASI (Presentation) by ARDELLIO SATRIA ANINDITO
        </a>
      </div>
    </motion.div>
  );
};

export default PresentationSection;