import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Loader } from 'lucide-react';
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
    setTimeout(() => {
      const compatibility = Math.floor(Math.random() * 101);
      setResult(compatibility);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-4">Cocok Kaga?</div>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Nama pertama"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Nama kedua"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
          />
          <Button onClick={calculateCompatibility} disabled={isLoading} className="w-full">
            {isLoading ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : <Heart className="mr-2 h-4 w-4" />}
            {isLoading ? 'Menghitung...' : 'Cek Kecocokan'}
          </Button>
        </div>
        {result !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-center"
          >
            <div className="text-2xl font-bold text-indigo-600 mb-2">{result}% Cocok!</div>
            <p className="text-sm text-gray-500">Ingat, ini hanya untuk hiburan semata!</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CocokKaga;