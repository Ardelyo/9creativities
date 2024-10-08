import React from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '../contexts/ProgressContext';
import { Progress } from "@/components/ui/progress";

const ProgressTracker = () => {
  const { calculateOverallProgress } = useProgress();
  const progress = calculateOverallProgress();

  return (
    <motion.div
      className="fixed bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-sm font-semibold mb-2">Site Exploration Progress</h3>
      <Progress value={progress} className="w-48" />
      <p className="text-xs mt-1 text-gray-600">{Math.round(progress)}% explored</p>
    </motion.div>
  );
};

export default ProgressTracker;