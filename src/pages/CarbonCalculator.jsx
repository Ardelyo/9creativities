import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, Car, Lightbulb, Trash2, Settings } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import BackgroundArt from '../components/BackgroundArt';
import { calculateCarbon, getExplanation } from '../utils/carbonCalculations';
import CarbonExplanation from '../components/CarbonExplanation';
import AdvancedSettings from '../components/AdvancedSettings';

const CarbonCalculator = () => {
  const [electricity, setElectricity] = useState(0);
  const [transportation, setTransportation] = useState(0);
  const [waste, setWaste] = useState(0);
  const [result, setResult] = useState(null);
  const [isAdvancedMode, setIsAdvancedMode] = useState(false);
  const [advancedFactors, setAdvancedFactors] = useState({
    electricityFactor: 0.65,
    transportationFactor: 0.22,
    wasteFactor: 0.028
  });

  const handleCalculate = () => {
    const calculatedResult = calculateCarbon(electricity, transportation, waste, advancedFactors);
    setResult(calculatedResult);
  };

  const COLORS = ['#34D399', '#60A5FA', '#F87171'];

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-4xl mx-auto relative z-10">
        <Link to="/" className="text-green-600 hover:text-green-800 transition-colors mb-8 inline-block">
          <ArrowLeft className="mr-2 inline" /> Kembali
        </Link>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4">
            Kalkulator <span className="text-green-600">Jejak Karbon</span>
          </h1>
          <p className="text-xl text-gray-600">
            Hitung dampak karbon Anda dan pelajari cara menguranginya
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl mb-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Input Data</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Mode Lanjutan</span>
              <Switch
                checked={isAdvancedMode}
                onCheckedChange={setIsAdvancedMode}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-4">
              <label className="block text-lg font-medium text-gray-700 flex items-center">
                <Lightbulb className="mr-2 text-yellow-500" /> Penggunaan Listrik (kWh/bulan)
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
                className="mt-2 border-green-500"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-lg font-medium text-gray-700 flex items-center">
                <Car className="mr-2 text-blue-500" /> Jarak Transportasi (km/bulan)
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
                className="mt-2 border-blue-500"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-lg font-medium text-gray-700 flex items-center">
                <Trash2 className="mr-2 text-red-500" /> Produksi Limbah (kg/bulan)
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
                className="mt-2 border-red-500"
              />
            </div>
          </div>

          {isAdvancedMode && (
            <AdvancedSettings
              factors={advancedFactors}
              setFactors={setAdvancedFactors}
            />
          )}

          <Button 
            onClick={handleCalculate} 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Hitung Jejak Karbon
          </Button>
        </motion.div>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
              Hasil Perhitungan
            </h2>
            <p className="text-2xl text-center text-gray-700 mb-6">
              Total Jejak Karbon: <span className="font-bold text-green-600">{result.total.toFixed(2)}</span> ton CO2e/bulan
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

            <CarbonExplanation result={result} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CarbonCalculator;