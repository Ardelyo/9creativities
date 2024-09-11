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
    <div className="min-h-screen text-primary-foreground p-4 wavy-bg">
      <Link to="/" className="inline-block mb-4">
        <Button variant="ghost" className="text-primary-foreground rounded-full">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </Link>
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center bg-primary px-8 py-4 rounded-full wavy-border">About Nine Creativities</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="bg-primary rounded-full shadow-lg p-6 wavy-border"
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
            className="bg-primary rounded-full shadow-lg p-6 wavy-border"
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
        </div>
      </motion.div>
    </div>
  );
};

export default About;