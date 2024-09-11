import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Nine Creativities
        </motion.h1>
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="mb-4">
            Nine Creativities is a showcase of innovative projects developed by Class 9C students. Our goal is to highlight the creativity and hard work of our classmates in the fields of environmental and food technology.
          </p>
          <p className="mb-4">
            Each project featured on this website represents hours of research, experimentation, and dedication. From eco-friendly water purification systems to sustainable snack innovations, our projects aim to address real-world challenges and contribute to a better future.
          </p>
          <p>
            We invite you to explore our projects, learn about our process, and get inspired by the ingenuity of young minds working towards positive change.
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default About;