import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import BackgroundArt from '../components/BackgroundArt';

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
    setTimeout(() => {
      const compatibility = Math.floor(Math.random() * 101);
      setResult(compatibility);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 p-4 sm:p-8 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-4xl mx-auto relative z-10">
        <Link to="/produk-kami" className="text-purple-600 hover:text-purple-800 transition-colors mb-8 inline-block">
          <ArrowLeft className="mr-2 inline" /> Kembali ke Produk Kami
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4">
            Cocok <span className="text-purple-600">Kaga?</span>
          </h1>
          <p className="text-xl text-gray-600">
            Cek kecocokan nama Anda dan pasangan!
          </p>
        </motion.div>

        <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <Input
              placeholder="Nama Pertama"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              className="text-lg"
            />
            <Input
              placeholder="Nama Kedua"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              className="text-lg"
            />
          </div>
          <Button
            onClick={calculateCompatibility}
            disabled={isLoading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-3 rounded-full transition-all duration-300"
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Heart className="mr-2 h-6 w-6" />
              </motion.div>
            ) : (
              "Cek Kecocokan"
            )}
          </Button>
        </div>

        {result !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Hasil Kecocokan</h2>
            <p className="text-6xl font-bold text-purple-600 mb-4">{result}%</p>
            <p className="text-lg text-gray-600 mb-4">
              {result > 80 ? "Wah, kalian sangat cocok!" :
               result > 60 ? "Hmm, ada potensi nih!" :
               result > 40 ? "Masih perlu pendekatan lebih lanjut." :
               "Mungkin kalian lebih cocok jadi teman?"}
            </p>
            <p className="text-sm text-gray-500 italic">
              Ingat, ini hanya untuk hiburan semata. Kecocokan sejati ditentukan oleh banyak faktor!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CocokKaga;