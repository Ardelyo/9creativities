import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const About = () => {
  const bubbleVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-blue via-white to-navy-blue text-navy-blue p-4">
      <Link to="/" className="inline-block mb-4">
        <Button variant="ghost" className="text-navy-blue rounded-full">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </Link>
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">About Nine Creativities</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="bg-white rounded-full shadow-lg p-6"
            variants={bubbleVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              Nine Creativities is dedicated to showcasing innovative projects developed by Class 9C students. We aim to highlight the creativity and hard work of our classmates in the fields of environmental and food technology.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-full shadow-lg p-6"
            variants={bubbleVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p>
              We envision a future where young minds contribute significantly to solving real-world challenges. Through our projects, we strive to inspire and drive positive change in our communities and beyond.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-full shadow-lg p-6 md:col-span-2"
            variants={bubbleVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <p>
              Each project featured on this website represents hours of research, experimentation, and dedication. From eco-friendly water purification systems to sustainable snack innovations, our projects aim to address real-world challenges and contribute to a better future.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;