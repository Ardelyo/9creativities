import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";

const QuizQuestion = ({ question, onAnswer, questionNumber, totalQuestions, selectedAnswer }) => {
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
            disabled={selectedAnswer !== null}
            className={`w-full justify-start text-left py-3 px-4 ${
              selectedAnswer !== null
                ? option === question.correctAnswer
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : option === selectedAnswer
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-800'
                : 'bg-blue-100 hover:bg-blue-200 text-blue-800'
            }`}
          >
            {option}
          </Button>
        ))}
      </div>
      <AnimatePresence>
        {selectedAnswer !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-6 p-4 bg-blue-50 rounded-lg"
          >
            <p className="font-semibold text-blue-800">Penjelasan:</p>
            <p className="text-gray-700">{question.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuizQuestion;
