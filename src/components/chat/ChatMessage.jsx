import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const ChatMessage = ({ message, role }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`max-w-[85%] p-3 rounded-lg ${
          role === 'user'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100'
        }`}
      >
        <div className="flex items-start gap-2">
          {role === 'user' ? (
            <User className="w-4 h-4 mt-1 flex-shrink-0" />
          ) : (
            <Bot className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
          )}
          <div className="flex-1 text-sm">
            <ReactMarkdown 
              className={`prose ${role === 'user' ? 'text-white' : 'text-gray-800'} max-w-none prose-sm`}
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