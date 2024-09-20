import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shuffle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BackgroundArt from '../components/BackgroundArt';

const questions = [
  {
    question: "Apa gas rumah kaca utama yang berkontribusi pada perubahan iklim?",
    options: ["Karbon Dioksida", "Oksigen", "Nitrogen", "Helium"],
    correctAnswer: "Karbon Dioksida",
    explanation: "Karbon dioksida adalah gas rumah kaca utama yang menyebabkan pemanasan global."
  },
  {
    question: "Apa yang dimaksud dengan 3R dalam pengelolaan sampah?",
    options: ["Reduce, Reuse, Recycle", "Read, Write, Run", "Rest, Relax, Rejuvenate", "Repair, Rebuild, Restore"],
    correctAnswer: "Reduce, Reuse, Recycle",
    explanation: "3R adalah prinsip pengelolaan sampah: Reduce (kurangi), Reuse (gunakan kembali), dan Recycle (daur ulang)."
  },
  // Add more questions here...
];

const CihuyQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setQuizQuestions(shuffled.slice(0, 10));
  }, []);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    const correct = answer === quizQuestions[currentQuestionIndex].correctAnswer;
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
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setQuizQuestions(shuffled.slice(0, 10));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setQuizCompleted(false);
  };

  if (quizQuestions.length === 0) {
    return <div>Loading quiz...</div>;
  }

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-white p-4 sm:p-8 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/" className="text-green-600 hover:text-green-800 transition-colors mb-8 inline-block">
            <ArrowLeft className="mr-2 inline" /> Kembali ke Beranda
          </Link>
          <div className="bg-green-100 p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Quiz Selesai!</h2>
            <p className="text-xl mb-4">Skor Anda: {score} dari {quizQuestions.length}</p>
            <Button onClick={restartQuiz} className="bg-green-500 hover:bg-green-600 text-white">
              Main Lagi
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-4xl mx-auto relative z-10">
        <Link to="/" className="text-green-600 hover:text-green-800 transition-colors mb-8 inline-block">
          <ArrowLeft className="mr-2 inline" /> Kembali ke Beranda
        </Link>
        <div className="bg-green-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Pertanyaan {currentQuestionIndex + 1} dari {quizQuestions.length}</h2>
          <p className="text-lg mb-4">{currentQuestion.question}</p>
          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswerClick(option)}
                disabled={selectedAnswer !== null}
                className={`w-full text-left justify-start ${
                  selectedAnswer === option
                    ? option === currentQuestion.correctAnswer
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : 'bg-white hover:bg-gray-100'
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
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 p-4 bg-blue-100 rounded-lg"
            >
              <p className="font-semibold">Penjelasan:</p>
              <p>{currentQuestion.explanation}</p>
            </motion.div>
          )}
          {selectedAnswer && (
            <Button onClick={handleNextQuestion} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
              {currentQuestionIndex < quizQuestions.length - 1 ? 'Pertanyaan Berikutnya' : 'Selesai'}
            </Button>
          )}
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
        </div>
      </div>
    </div>
  );
};

export default CihuyQuiz;