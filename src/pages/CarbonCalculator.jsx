import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, Car, Lightbulb, Trash2 } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import BackgroundArt from '../components/BackgroundArt';

const CarbonCalculator = () => {
  const [electricity, setElectricity] = useState(0);
  const [transportation, setTransportation] = useState(0);
  const [waste, setWaste] = useState(0);
  const [result, setResult] = useState(null);

  const calculateCarbon = () => {
    const totalCarbon = electricity * 0.5 + transportation * 0.2 + waste * 0.3;
    setResult({
      total: totalCarbon.toFixed(2),
      breakdown: [
        { name: 'Listrik', value: electricity * 0.5 },
        { name: 'Transportasi', value: transportation * 0.2 },
        { name: 'Limbah', value: waste * 0.3 },
      ],
    });
  };

  const COLORS = ['#34D399', '#60A5FA', '#F87171'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-blue-900 p-4 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-4xl mx-auto relative z-10">
        <Link to="/" className="text-green-300 hover:text-green-100 transition-colors mb-8 inline-block">
          <ArrowLeft className="mr-2 inline" /> Kembali
        </Link>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            Kalkulator Jejak Karbon
          </h1>
          <p className="text-xl text-gray-300">
            Hitung dampak karbon Anda dan pelajari cara menguranginya
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-4">
              <label className="block text-lg font-medium text-green-300 flex items-center">
                <Lightbulb className="mr-2" /> Penggunaan Listrik (kWh/bulan)
              </label>
              <Slider
                value={[electricity]}
                onValueChange={(value) => setElectricity(value[0])}
                max={1000}
                step={10}
                className="mt-2"
              />
              <Input
                type="number"
                value={electricity}
                onChange={(e) => setElectricity(Number(e.target.value))}
                className="mt-2 bg-white bg-opacity-20 border-green-500 text-white"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-lg font-medium text-blue-300 flex items-center">
                <Car className="mr-2" /> Jarak Transportasi (km/bulan)
              </label>
              <Slider
                value={[transportation]}
                onValueChange={(value) => setTransportation(value[0])}
                max={1000}
                step={10}
                className="mt-2"
              />
              <Input
                type="number"
                value={transportation}
                onChange={(e) => setTransportation(Number(e.target.value))}
                className="mt-2 bg-white bg-opacity-20 border-blue-500 text-white"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-lg font-medium text-red-300 flex items-center">
                <Trash2 className="mr-2" /> Produksi Limbah (kg/bulan)
              </label>
              <Slider
                value={[waste]}
                onValueChange={(value) => setWaste(value[0])}
                max={100}
                step={1}
                className="mt-2"
              />
              <Input
                type="number"
                value={waste}
                onChange={(e) => setWaste(Number(e.target.value))}
                className="mt-2 bg-white bg-opacity-20 border-red-500 text-white"
              />
            </div>
          </div>
          <Button 
            onClick={calculateCarbon} 
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Hitung Jejak Karbon
          </Button>
        </motion.div>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-400">
              Hasil Perhitungan
            </h2>
            <p className="text-2xl text-center text-white mb-6">
              Total Jejak Karbon: <span className="font-bold text-green-300">{result.total}</span> ton CO2e/bulan
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={result.breakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {result.breakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CarbonCalculator;