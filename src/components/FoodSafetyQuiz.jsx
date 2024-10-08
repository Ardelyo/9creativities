import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const questions = [
  {
    question: "At what temperature should you keep hot foods?",
    options: ["Above 63°C", "Below 5°C", "Between 5°C and 63°C"],
    correctAnswer: 0
  },
  {
    question: "Which of these should be stored on the bottom shelf of a fridge?",
    options: ["Cooked meats", "Raw meat", "Vegetables"],
    correctAnswer: 1
  },
  {
    question: "How long can cooked food be safely left at room temperature?",
    options: ["Up to 1 hour", "Up to 2 hours", "Up to 4 hours"],
    correctAnswer: 1
  }
];

const FoodSafetyQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 mt-8"
    >
      <h3 className="text-2xl font-bold mb-4 text-orange-600">Food Safety Quiz</h3>
      {!showResult ? (
        <>
          <p className="mb-4 text-gray-700">{questions[currentQuestion].question}</p>
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full text-left justify-start"
                variant="outline"
              >
                {option}
              </Button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <p className="text-xl mb-4">Your score: {score} out of {questions.length}</p>
          <Button onClick={resetQuiz}>Try Again</Button>
        </div>
      )}
    </motion.div>
  );
};

export default FoodSafetyQuiz;