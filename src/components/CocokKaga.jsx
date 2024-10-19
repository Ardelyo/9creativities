import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Loader, Smile, Star, ArrowLeft } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Link } from 'react-router-dom';

// Simple dataset for name compatibility
const nameCompatibility = {
  vowels: { a: 1, e: 2, i: 3, o: 4, u: 5 },
  consonants: { b: 1, c: 2, d: 3, f: 4, g: 5, h: 6, j: 7, k: 8, l: 9, m: 10, n: 11, p: 12, q: 13, r: 14, s: 15, t: 16, v: 17, w: 18, x: 19, y: 20, z: 21 }
};

const CocokKaga = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const calculateCompatibility = () => {
    if (!name1 || !name2) {
      toast({
        title: "Nama belum lengkap",
        description: "Mohon isi kedua nama untuk melihat kecocokan.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    // Simulate API call with setTimeout
    setTimeout(() => {
      const score1 = calculateNameScore(name1.toLowerCase());
      const score2 = calculateNameScore(name2.toLowerCase());
      const compatibility = Math.floor((score1 + score2) / 2);
      setResult(compatibility);
      setIsLoading(false);
    }, 2000);
  };

  const calculateNameScore = (name) => {
    let score = 0;
    for (let char of name) {
      if (char in nameCompatibility.vowels) {
        score += nameCompatibility.vowels[char];
      } else if (char in nameCompatibility.consonants) {
        score += nameCompatibility.consonants[char];
      }
    }
    return (score % 101); // Ensure score is between 0-100
  };

  const getResultColor = (score) => {
    if (score < 30) return 'text-red-500';
    if (score < 70) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getResultMessage = (score) => {
    if (score < 30) return 'Mungkin kalian lebih cocok jadi teman?';
    if (score < 70) return 'Ada potensi! Kenali lebih dalam ya!';
    return 'Wah, kalian sangat cocok!';
  };

  const backgroundVariants = {
    initial: { backgroundPosition: '0% 50%' },
    animate: { 
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: { 
        repeat: Infinity,
        duration: 10,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 p-4"
      variants={backgroundVariants}
      initial="initial"
      animate="animate"
    >
      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-3xl shadow-xl overflow-hidden">
        <div className="p-8">
          <Link to="/" className="text-purple-600 hover:text-purple-800 transition-colors mb-6 inline-flex items-center">
            <ArrowLeft className="mr-2" /> Kembali
          </Link>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-purple-600 mb-2">Cocok Kaga?</h2>
            <p className="text-sm text-gray-600">Cek kecocokan nama pasangan kamu!</p>
          </motion.div>
          <div className="space-y-6">
            <Input
              type="text"
              placeholder="Nama pertama"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
            />
            <Input
              type="text"
              placeholder="Nama kedua"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
            />
            <Button 
              onClick={calculateCompatibility} 
              disabled={isLoading} 
              className="w-full bg-purple-600 hover:bg-purple-700 transition-colors duration-300 py-6"
            >
              {isLoading ? (
                <Loader className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Heart className="mr-2 h-5 w-5" />
              )}
              {isLoading ? 'Menghitung...' : 'Cek Kecocokan'}
            </Button>
          </div>
          <AnimatePresence>
            {result !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-8 text-center"
              >
                <motion.div 
                  className={`text-6xl font-bold mb-4 ${getResultColor(result)}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {result}% <Star className="inline-block ml-1" />
                </motion.div>
                <p className="text-xl font-semibold text-purple-700 mb-4">{getResultMessage(result)}</p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm text-gray-600 flex items-center justify-center"
                >
                  <Smile className="mr-2 h-5 w-5 text-yellow-500" />
                  Ingat, ini hanya untuk hiburan semata!
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default CocokKaga;