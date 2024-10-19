import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Loader, Smile, Star } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

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
    setTimeout(() => {
      const compatibility = Math.floor(Math.random() * 101);
      setResult(compatibility);
      setIsLoading(false);
    }, 2000);
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

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl shadow-lg overflow-hidden md:max-w-2xl m-4">
      <div className="p-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold text-purple-600">Cocok Kaga?</h2>
          <p className="text-sm text-gray-600">Cek kecocokan nama pasangan kamu!</p>
        </motion.div>
        <div className="space-y-4">
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
            className="w-full bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
          >
            {isLoading ? (
              <Loader className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Heart className="mr-2 h-4 w-4" />
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
              className="mt-6 text-center"
            >
              <motion.div 
                className={`text-4xl font-bold mb-2 ${getResultColor(result)}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {result}% <Star className="inline-block ml-1" />
              </motion.div>
              <p className="text-lg font-semibold text-purple-700 mb-2">{getResultMessage(result)}</p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-sm text-gray-600 flex items-center justify-center"
              >
                <Smile className="mr-1 h-4 w-4 text-yellow-500" />
                Ingat, ini hanya untuk hiburan semata!
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CocokKaga;