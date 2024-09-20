import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  {
    question: "Apa nama lapisan atmosfer yang melindungi Bumi dari radiasi UV berbahaya?",
    options: ["Ozon", "Troposfer", "Stratosfer", "Mesosfer"],
    correctAnswer: "Ozon",
    explanation: "Lapisan ozon di stratosfer melindungi Bumi dari radiasi ultraviolet berbahaya dari Matahari."
  },
  {
    question: "Apa istilah untuk hilangnya hutan secara permanen?",
    options: ["Deforestasi", "Reboisasi", "Urbanisasi", "Erosi"],
    correctAnswer: "Deforestasi",
    explanation: "Deforestasi adalah penghancuran hutan secara permanen, yang berdampak besar pada ekosistem dan iklim."
  },
  {
    question: "Apa sumber energi terbarukan yang menggunakan panas bumi?",
    options: ["Geotermal", "Solar", "Angin", "Hidro"],
    correctAnswer: "Geotermal",
    explanation: "Energi geotermal memanfaatkan panas dari dalam Bumi sebagai sumber energi terbarukan."
  },
  {
    question: "Apa nama fenomena pemanasan air laut yang merusak terumbu karang?",
    options: ["Pemutihan karang", "Eutrofikasi", "Sedimentasi", "Asidifikasi"],
    correctAnswer: "Pemutihan karang",
    explanation: "Pemutihan karang terjadi ketika suhu air laut meningkat, menyebabkan karang kehilangan alga simbiotiknya."
  },
  {
    question: "Apa jenis polusi yang disebabkan oleh suara berlebihan?",
    options: ["Polusi suara", "Polusi udara", "Polusi air", "Polusi tanah"],
    correctAnswer: "Polusi suara",
    explanation: "Polusi suara adalah gangguan lingkungan yang disebabkan oleh suara berlebihan atau tidak diinginkan."
  },
  {
    question: "Apa istilah untuk spesies yang berisiko punah dalam waktu dekat?",
    options: ["Terancam", "Langka", "Endemik", "Invasif"],
    correctAnswer: "Terancam",
    explanation: "Spesies terancam adalah yang berisiko punah dalam waktu dekat jika tidak ada tindakan konservasi."
  },
  {
    question: "Apa nama proses alami daur ulang air di Bumi?",
    options: ["Siklus air", "Evaporasi", "Presipitasi", "Kondensasi"],
    correctAnswer: "Siklus air",
    explanation: "Siklus air atau siklus hidrologi adalah proses alami perputaran air di Bumi melalui berbagai tahap."
  },
  {
    question: "Apa istilah untuk penggunaan pestisida dan pupuk kimia berlebihan?",
    options: ["Pertanian intensif", "Pertanian organik", "Agroforestri", "Permakultur"],
    correctAnswer: "Pertanian intensif",
    explanation: "Pertanian intensif sering menggunakan bahan kimia berlebihan, yang dapat merusak tanah dan ekosistem."
  }
];

const CihuyQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

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

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setQuizCompleted(false);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-4xl mx-auto relative z-10">
        <Link to="/" className="text-green-600 hover:text-green-800 transition-colors mb-8 inline-block">
          <ArrowLeft className="mr-2 inline" /> Kembali ke Beranda
        </Link>
        <h1 className="text-4xl font-bold text-center mb-6 text-black">Nine Creativities: Cerdas, Cermat, Ceria</h1>
        {quizCompleted ? (
          <div className="bg-green-100 p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4 text-black">Quiz Selesai!</h2>
            <p className="text-xl mb-4 text-black">Skor Anda: {score} dari {questions.length}</p>
            <Button onClick={restartQuiz} className="bg-green-500 hover:bg-green-600 text-white">
              Main Lagi
            </Button>
          </div>
        ) : (
          <div className="bg-green-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-black">Pertanyaan {currentQuestionIndex + 1} dari {questions.length}</h2>
            <p className="text-lg mb-4 text-black">{currentQuestion.question}</p>
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
                      : 'bg-white hover:bg-gray-100 text-black'
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
                <p className="font-semibold text-black">Penjelasan:</p>
                <p className="text-black">{currentQuestion.explanation}</p>
              </motion.div>
            )}
            {selectedAnswer && (
              <Button onClick={handleNextQuestion} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
                {currentQuestionIndex < questions.length - 1 ? 'Pertanyaan Berikutnya' : 'Selesai'}
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
        )}
      </div>
    </div>
  );
};

export default CihuyQuiz;
