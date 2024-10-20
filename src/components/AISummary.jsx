import React from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

const AISummary = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-50 rounded-xl p-6 shadow-lg mb-8"
    >
      <div className="flex items-center mb-4">
        <Bot className="w-6 h-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-semibold text-blue-800">AI-Generated Summary</h3>
      </div>
      <div className="text-gray-700">{children}</div>
    </motion.div>
  );
};

export default AISummary;