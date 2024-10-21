import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const QuizResult = ({ score, totalQuestions, onRestart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white p-8 rounded-2xl shadow-xl text-center"
    >
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Quiz Selesai!</h2>
      <p className="text-xl mb-4">Skor Anda: {score} dari {totalQuestions}</p>
      <Button onClick={onRestart} className="bg-blue-500 hover:bg-blue-600 text-white">
        Main Lagi
      </Button>
    </motion.div>
  );
};

export default QuizResult;