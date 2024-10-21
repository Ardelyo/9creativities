import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const QuizQuestion = ({ question, onAnswer, questionNumber, totalQuestions }) => {
  return (
    <motion.div
      key={questionNumber}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="bg-white p-6 rounded-2xl shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Pertanyaan {questionNumber} dari {totalQuestions}</h2>
      <p className="text-lg mb-6 text-gray-800">{question.question}</p>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full justify-start text-left py-3 px-4 bg-blue-100 hover:bg-blue-200 text-blue-800"
          >
            {option}
          </Button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuizQuestion;