import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const ChatMessage = ({ message, role }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`max-w-[80%] p-4 rounded-2xl shadow-lg ${
          role === 'user'
            ? 'bg-blue-600 text-white ml-12'
            : 'bg-white border border-blue-100 mr-12'
        }`}
      >
        <div className="flex items-start gap-3">
          {role === 'user' ? (
            <User className="w-6 h-6 mt-1" />
          ) : (
            <Bot className="w-6 h-6 mt-1 text-blue-600" />
          )}
          <div className="flex-1">
            <ReactMarkdown 
              className={`prose ${role === 'user' ? 'text-white' : 'text-gray-800'} max-w-none`}
            >
              {message}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;