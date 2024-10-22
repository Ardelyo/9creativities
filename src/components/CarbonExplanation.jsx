import React from 'react';
import { getExplanation } from '../utils/carbonCalculations';

const CarbonExplanation = ({ result }) => {
  const explanation = getExplanation(result);

  return (
    <div className="mt-8 bg-green-50 rounded-xl p-6">
      <h3 className="text-2xl font-bold text-green-800 mb-4">Analisis Jejak Karbon</h3>
      <p className="text-gray-700 mb-4">{explanation.generalExplanation}</p>
      <h4 className="text-xl font-semibold text-green-700 mb-2">
        Dampak {explanation.highestCategory}:
      </h4>
      <p className="text-gray-700 mb-4">{explanation.categoryExplanation.impact}</p>
      <h4 className="text-xl font-semibold text-green-700 mb-2">Saran Pengurangan:</h4>
      <ul className="list-disc list-inside text-gray-700">
        {explanation.categoryExplanation.suggestions.map((suggestion, index) => (
          <li key={index} className="mb-2">{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarbonExplanation;