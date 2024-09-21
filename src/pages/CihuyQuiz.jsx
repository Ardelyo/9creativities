import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shuffle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BackgroundArt from '../components/BackgroundArt';
import { allQuestions } from '../data/quizQuestions';

const CihuyQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [attemptsLeft, setAttemptsLeft] = useState(4);

  useEffect(() => {
    startNewQuiz();
  }, []);

  const startNewQuiz = () => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setQuizCompleted(false);
    setAttemptsLeft(prev => prev - 1);
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestionIndex].correctAnswer;
    if (correct) {
      setScore(score + 1);
      setPopupMessage("CIHUYYYYY");
    } else {
      setPopupMessage("WKWKWKWK");
    }
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1500);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const shuffleOptions = (options) => {
    return [...options].sort(() => Math.random() - 0.5);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4 sm:p-8 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-4xl mx-auto relative z-10">
        <Link to="/" className="text-white hover:text-blue-200 transition-colors mb-8 inline-block">
          <ArrowLeft className="mr-2 inline" /> Kembali ke Beranda
        </Link>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 text-white">Cihuy Quiz</h1>
          <p className="text-xl text-blue-100">Uji pengetahuanmu tentang lingkungan!</p>
        </motion.div>
        
        {quizCompleted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-2xl shadow-xl text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Quiz Selesai!</h2>
            <p className="text-xl mb-4">Skor Anda: {score} dari {questions.length}</p>
            {attemptsLeft > 0 ? (
              <Button onClick={startNewQuiz} className="bg-blue-500 hover:bg-blue-600 text-white">
                Main Lagi ({attemptsLeft} kesempatan tersisa)
              </Button>
            ) : (
              <p className="text-red-500">Maaf, Anda telah mencapai batas maksimum percobaan.</p>
            )}
          </motion.div>
        ) : currentQuestion ? (
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white p-6 rounded-2xl shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Pertanyaan {currentQuestionIndex + 1} dari {questions.length}</h2>
            <p className="text-lg mb-6 text-gray-800">{currentQuestion.question}</p>
            <div className="space-y-3">
              {shuffleOptions(currentQuestion.options).map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  disabled={selectedAnswer !== null}
                  className={`w-full justify-start text-left py-3 px-4 ${
                    selectedAnswer === option
                      ? option === currentQuestion.correctAnswer
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-blue-100 hover:bg-blue-200 text-blue-800'
                  }`}
                >
                  {option}
                </Button>
              ))}
            </div>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-blue-50 rounded-lg"
              >
                <p className="font-semibold text-blue-800">Penjelasan:</p>
                <p className="text-gray-700">{currentQuestion.explanation}</p>
              </motion.div>
            )}
            {selectedAnswer && (
              <Button onClick={handleNextQuestion} className="mt-6 bg-blue-500 hover:bg-blue-600 text-white">
                {currentQuestionIndex < questions.length - 1 ? 'Pertanyaan Berikutnya' : 'Selesai'}
              </Button>
            )}
          </motion.div>
        ) : null}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg text-white text-2xl font-bold ${
                popupMessage === "CIHUYYYYY" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {popupMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CihuyQuiz;
