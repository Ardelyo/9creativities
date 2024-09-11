import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-blue via-white to-navy-blue text-navy-blue p-4">
      <Link to="/" className="inline-block mb-4">
        <Button variant="ghost" className="text-navy-blue">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </Link>
      <motion.div 
        className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">About Nine Creativities</h1>
        <div className="space-y-4">
          <p>
            Nine Creativities is a showcase of innovative projects developed by Class 9C students. Our goal is to highlight the creativity and hard work of our classmates in the fields of environmental and food technology.
          </p>
          <p>
            Each project featured on this website represents hours of research, experimentation, and dedication. From eco-friendly water purification systems to sustainable snack innovations, our projects aim to address real-world challenges and contribute to a better future.
          </p>
          <p>
            We invite you to explore our projects, learn about our process, and get inspired by the ingenuity of young minds working towards positive change.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;