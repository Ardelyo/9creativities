import React from 'react';
import { Input } from "@/components/ui/input";

const AdvancedSettings = ({ factors, setFactors }) => {
  const handleFactorChange = (factor, value) => {
    setFactors(prev => ({ ...prev, [factor]: parseFloat(value) }));
  };

  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-xl">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Pengaturan Lanjutan</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Faktor Emisi Listrik (ton CO2e/kWh)
          </label>
          <Input
            type="number"
            value={factors.electricityFactor}
            onChange={(e) => handleFactorChange('electricityFactor', e.target.value)}
            step="0.01"
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Faktor Emisi Transportasi (ton CO2e/km)
          </label>
          <Input
            type="number"
            value={factors.transportationFactor}
            onChange={(e) => handleFactorChange('transportationFactor', e.target.value)}
            step="0.01"
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Faktor Emisi Limbah (ton CO2e/kg)
          </label>
          <Input
            type="number"
            value={factors.wasteFactor}
            onChange={(e) => handleFactorChange('wasteFactor', e.target.value)}
            step="0.001"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AdvancedSettings;