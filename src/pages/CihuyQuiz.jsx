import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Volume2, VolumeX } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import BackgroundArt from '../components/BackgroundArt';
import { getRandomQuestions } from '../data/quizQuestions';
import QuizQuestion from '../components/QuizQuestion';
import QuizResult from '../components/QuizResult';

const CihuyQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const correctAudioRef = useRef(new Audio('/y2mate.com - BACKSOUND CIHUY backsound meme mentahan soundefek.mp3'));
  const incorrectAudioRef = useRef(new Audio('/y2mate.com - meme ketawa prindapan.mp3'));
  const highScoreAudioRef = useRef(new Audio('/y2mate.com - YAY Kids Celebration Sound Effect Free Download.mp3'));
  const lowScoreAudioRef = useRef(new Audio('/y2mate.com - Ini Parah Nih Haha  Sound Effect Indonesia.mp3'));

  useEffect(() => {
    startNewRound();
  }, [currentRound]);

  const startNewRound = () => {
    const newQuestions = getRandomQuestions(5);
    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const handleAnswer = (answer) => {
    if (selectedAnswer !== null) return; // Prevent multiple answers

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;
    setSelectedAnswer(answer);

    if (isCorrect) {
      setScore(score + 1);
      if (audioEnabled) correctAudioRef.current.play().catch(error => console.error("Error playing audio:", error));
    } else {
      if (audioEnabled) incorrectAudioRef.current.play().catch(error => console.error("Error playing audio:", error));
    }

    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      if (currentRound < 4) {
        setCurrentRound(currentRound + 1);
      } else {
        setQuizCompleted(true);
        if (audioEnabled) {
          if (score > 15) {
            highScoreAudioRef.current.play().catch(error => console.error("Error playing audio:", error));
          } else {
            lowScoreAudioRef.current.play().catch(error => console.error("Error playing audio:", error));
          }
        }
      }
    }
  };

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
    setShowAudioPlayer(!audioEnabled);
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
          <p className="text-xl text-gray-600">Uji pengetahuanmu tentang proyek Nine Creativities!</p>
          <p className="text-lg text-gray-600 mt-2">Round {currentRound} of 4</p>
        </motion.div>
        
        <div className="flex justify-end items-center mb-4">
          <span className="mr-2">{audioEnabled ? <Volume2 /> : <VolumeX />}</span>
          <Switch checked={audioEnabled} onCheckedChange={toggleAudio} />
          <span className="ml-2">{audioEnabled ? "Audio Aktif" : "Audio Non-aktif"}</span>
        </div>

        {showAudioPlayer && (
          <div className="mb-4 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Audio Player</h3>
            <audio controls className="w-full">
              <source src="/y2mate.com - BACKSOUND CIHUY backsound meme mentahan soundefek.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}

        {quizCompleted ? (
          <QuizResult 
            score={score} 
            totalQuestions={questions.length * 4}
            onRestart={() => {
              setCurrentRound(1);
              startNewRound();
            }}
          />
        ) : questions[currentQuestionIndex] ? (
          <>
            <QuizQuestion
              question={questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={questions.length}
              selectedAnswer={selectedAnswer}
              showExplanation={showExplanation}
            />
            {selectedAnswer !== null && (
              <div className="mt-6 flex justify-end">
                <Button 
                  onClick={handleNextQuestion} 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  {currentQuestionIndex === questions.length - 1 ? "Selesai" : "Selanjutnya"}
                </Button>
              </div>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default CihuyQuiz;