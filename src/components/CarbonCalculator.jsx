import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

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

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <label className="block text-sm font-medium text-blue-200">
          Penggunaan Listrik (kWh/bulan)
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
            className="mt-2"
          />
        </label>
        <label className="block text-sm font-medium text-blue-200">
          Jarak Transportasi (km/bulan)
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
            className="mt-2"
          />
        </label>
        <label className="block text-sm font-medium text-blue-200">
          Produksi Limbah (kg/bulan)
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
            className="mt-2"
          />
        </label>
      </div>
      <Button onClick={calculateCarbon} className="w-full">Hitung Jejak Karbon</Button>
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 p-4 bg-white bg-opacity-20 rounded-xl"
        >
          <h3 className="text-xl font-bold text-blue-200 mb-4">Hasil Perhitungan</h3>
          <p className="text-blue-100 mb-4">Total Jejak Karbon: {result.total} ton CO2e/bulan</p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={result.breakdown}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
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
    </motion.div>
  );
};

export default CarbonCalculator;