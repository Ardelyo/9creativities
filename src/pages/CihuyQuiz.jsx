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
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(4);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const correctAudio = new Audio('/y2mate.com - BACKSOUND CIHUY backsound meme mentahan soundefek.mp3');
  const incorrectAudio = new Audio('/y2mate.com - meme ketawa prindapan.mp3');
  const highScoreAudio = new Audio('/y2mate.com - YAY Kids Celebration Sound Effect Free Download.mp3');
  const lowScoreAudio = new Audio('/y2mate.com - Ini Parah Nih Haha  Sound Effect Indonesia.mp3');

  const startNewQuiz = () => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizStarted(true);
    setQuizCompleted(false);
    setAttemptsLeft(prev => prev - 1);
    setSelectedAnswer(null);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      correctAudio.play();
    } else {
      incorrectAudio.play();
    }
    setSelectedAnswer(isCorrect ? 'correct' : 'incorrect');
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
      if (score > 6) {
        highScoreAudio.play();
      } else {
        lowScoreAudio.play();
      }
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 relative overflow-hidden">
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
        
        {!quizStarted && !quizCompleted && (
          <Button onClick={startNewQuiz} className="w-full mb-4">
            Mulai Quiz
          </Button>
        )}

        {quizStarted && !quizCompleted && questions[currentQuestionIndex] && (
          <>
            <QuizQuestion
              question={questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={questions.length}
              selectedAnswer={selectedAnswer}
            />
            {selectedAnswer && (
              <Button onClick={handleNextQuestion} className="w-full mt-4">
                {currentQuestionIndex === questions.length - 1 ? 'Selesai' : 'Selanjutnya'}
              </Button>
            )}
          </>
        )}

        {quizCompleted && (
          <QuizResult 
            score={score} 
            totalQuestions={questions.length} 
            attemptsLeft={attemptsLeft}
            onRestart={startNewQuiz}
          />
        )}
      </div>
    </div>
  );
};

export default CihuyQuiz;
