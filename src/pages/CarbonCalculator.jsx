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
  const [scenario, setScenario] = useState('');

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
    generateScenario(totalCarbon);
  };

  const generateScenario = (totalCarbon) => {
    const scenarios = [
      `Dengan jejak karbon sebesar ${totalCarbon.toFixed(2)} ton CO2e/bulan, emisi Anda setara dengan menebang ${(totalCarbon * 50).toFixed(0)} pohon dewasa. Ini berdampak pada habitat ${Math.floor(totalCarbon * 10)} burung dan ${Math.floor(totalCarbon * 5)} mamalia kecil.`,
      `Jejak karbon Anda berkontribusi pada kenaikan permukaan laut sebesar ${(totalCarbon * 0.0001).toFixed(4)} mm. Ini mengancam ${Math.floor(totalCarbon * 20)} rumah di pesisir pantai Indonesia.`,
      `Emisi karbon Anda setara dengan mencairkan ${(totalCarbon * 3).toFixed(2)} m³ es di kutub. Ini mengurangi habitat ${Math.floor(totalCarbon * 2)} beruang kutub dan ${Math.floor(totalCarbon * 5)} anjing laut.`,
    ];
    setScenario(scenarios[Math.floor(Math.random() * scenarios.length)]);
  };

  const COLORS = ['#8FBC8F', '#87CEFA', '#F08080'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-blue-900 p-4 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-4xl mx-auto relative z-10">
        <Link to="/" className="text-blue-300 hover:text-blue-100 transition-colors mb-8 inline-block">
          <ArrowLeft className="mr-2 inline" /> Kembali
        </Link>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
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
          className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 shadow-xl mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-4">
              <label className="block text-lg font-medium text-blue-200 flex items-center">
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
                className="mt-2 bg-white bg-opacity-20 border-blue-300 text-white"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-lg font-medium text-blue-200 flex items-center">
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
                className="mt-2 bg-white bg-opacity-20 border-blue-300 text-white"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-lg font-medium text-blue-200 flex items-center">
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
                className="mt-2 bg-white bg-opacity-20 border-blue-300 text-white"
              />
            </div>
          </div>
          <Button 
            onClick={calculateCarbon} 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Hitung Jejak Karbon
          </Button>
        </motion.div>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 shadow-xl mb-8"
          >
            <h2 className="text-3xl font-bold text-center mb-6 text-white">
              Hasil Perhitungan
            </h2>
            <p className="text-2xl text-center text-white mb-6">
              Total Jejak Karbon: <span className="font-bold text-blue-300">{result.total}</span> ton CO2e/bulan
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

        {scenario && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Dampak Jejak Karbon Anda</h2>
            <p className="text-lg text-gray-200">{scenario}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CarbonCalculator;
