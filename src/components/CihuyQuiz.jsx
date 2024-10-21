import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Volume2, VolumeX } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import BackgroundArt from './BackgroundArt';
import { getRandomQuestions } from '../data/quizQuestions';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';

const CihuyQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(4);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const correctAudioRef = useRef(new Audio('/y2mate.com - BACKSOUND CIHUY backsound meme mentahan soundefek.mp3'));
  const incorrectAudioRef = useRef(new Audio('/y2mate.com - meme ketawa prindapan.mp3'));
  const highScoreAudioRef = useRef(new Audio('/y2mate.com - YAY Kids Celebration Sound Effect Free Download.mp3'));
  const lowScoreAudioRef = useRef(new Audio('/y2mate.com - Ini Parah Nih Haha  Sound Effect Indonesia.mp3'));

  useEffect(() => {
    startNewQuiz();
  }, []);

  const startNewQuiz = () => {
    const newQuestions = getRandomQuestions(5);
    setQuestions(newQuestions);
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
      if (audioEnabled) correctAudioRef.current.play().catch(error => console.error("Error playing audio:", error));
    } else {
      if (audioEnabled) incorrectAudioRef.current.play().catch(error => console.error("Error playing audio:", error));
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
      if (audioEnabled) {
        if (score > 3) {
          highScoreAudioRef.current.play().catch(error => console.error("Error playing audio:", error));
        } else {
          lowScoreAudioRef.current.play().catch(error => console.error("Error playing audio:", error));
        }
      }
    }
  };

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
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
        </motion.div>
        
        <div className="flex justify-end items-center mb-4">
          <span className="mr-2">{audioEnabled ? <Volume2 /> : <VolumeX />}</span>
          <Switch checked={audioEnabled} onCheckedChange={toggleAudio} />
          <span className="ml-2">{audioEnabled ? "Audio Aktif" : "Audio Non-aktif"}</span>
        </div>

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