import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shuffle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BackgroundArt from '../components/BackgroundArt';
import { allQuestions } from '../data/quizQuestions';
import QuizQuestion from '../components/QuizQuestion';
import QuizResult from '../components/QuizResult';

const CihuyQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(4);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const correctAudio = new Audio('/public/y2mate.com - BACKSOUND CIHUY backsound meme mentahan soundefek.mp3');
  const incorrectAudio = new Audio('/public/y2mate.com - meme ketawa prindapan.mp3');
  const highScoreAudio = new Audio('/public/y2mate.com - YAY Kids Celebration Sound Effect Free Download.mp3');
  const lowScoreAudio = new Audio('/public/y2mate.com - Ini Parah Nih Haha  Sound Effect Indonesia.mp3');

  useEffect(() => {
    startNewQuiz();
  }, []);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startNewQuiz = () => {
    const shuffledQuestions = shuffleArray(allQuestions).slice(0, 10);
    const questionsWithRandomizedOptions = shuffledQuestions.map(question => ({
      ...question,
      options: shuffleArray(question.options)
    }));
    setQuestions(questionsWithRandomizedOptions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setAttemptsLeft(prev => prev - 1);
    setSelectedAnswer(null);
  };

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;
    setSelectedAnswer(answer);

    if (isCorrect) {
      setScore(score + 1);
      correctAudio.play().catch(error => console.error("Error playing audio:", error));
    } else {
      incorrectAudio.play().catch(error => console.error("Error playing audio:", error));
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
      if (score > 6) {
        highScoreAudio.play().catch(error => console.error("Error playing audio:", error));
      } else {
        lowScoreAudio.play().catch(error => console.error("Error playing audio:", error));
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-4 sm:p-8 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-4xl mx-auto relative z-10">
        <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors mb-8 inline-block">
          <ArrowLeft className="mr-2 inline" /> Kembali ke Beranda
        </Link>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 text-blue-600">Cihuy Quiz</h1>
          <p className="text-xl text-gray-600">Uji pengetahuanmu tentang lingkungan!</p>
        </motion.div>
        
        {quizCompleted ? (
          <QuizResult 
            score={score} 
            totalQuestions={questions.length} 
            attemptsLeft={attemptsLeft}
            onRestart={startNewQuiz}
          />
        ) : questions[currentQuestionIndex] ? (
          <>
            <QuizQuestion
              question={questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={questions.length}
              selectedAnswer={selectedAnswer}
            />
            <div className="mt-6 flex justify-end">
              <Button 
                onClick={handleNextQuestion} 
                disabled={selectedAnswer === null}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                {currentQuestionIndex === questions.length - 1 ? "Selesai" : "Selanjutnya"}
              </Button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default CihuyQuiz;