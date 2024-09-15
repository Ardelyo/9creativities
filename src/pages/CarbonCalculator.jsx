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
        { name: 'Electricity', value: electricity * 0.5 },
        { name: 'Transportation', value: transportation * 0.2 },
        { name: 'Waste', value: waste * 0.3 },
      ],
    });
  };

  const COLORS = ['#34D399', '#60A5FA', '#F87171'];

  return (
    <div className="min-h-screen bg-gray-900 p-8 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-7xl mx-auto relative z-10">
        <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors mb-8 inline-block">
          <ArrowLeft className="mr-2 inline" /> Back
        </Link>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Carbon Footprint Calculator
          </h1>
          <p className="text-2xl text-gray-300">
            Calculate your carbon impact and learn how to reduce it
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 rounded-3xl p-8 shadow-xl mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <label className="block text-xl font-medium text-blue-400 flex items-center">
                <Lightbulb className="mr-2" /> Electricity Usage (kWh/month)
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
                className="mt-2 bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-xl font-medium text-blue-400 flex items-center">
                <Car className="mr-2" /> Transportation Distance (km/month)
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
                className="mt-2 bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-xl font-medium text-blue-400 flex items-center">
                <Trash2 className="mr-2" /> Waste Production (kg/month)
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
                className="mt-2 bg-gray-700 border-gray-600 text-white"
              />
            </div>
          </div>
          <Button 
            onClick={calculateCarbon} 
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-xl"
          >
            Calculate Carbon Footprint
          </Button>
        </motion.div>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 rounded-3xl p-8 shadow-xl"
          >
            <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Calculation Results
            </h2>
            <p className="text-3xl text-center text-white mb-8">
              Total Carbon Footprint: <span className="font-bold text-blue-400">{result.total}</span> tons CO2e/month
            </p>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={result.breakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={150}
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
