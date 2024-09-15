import React from 'react';
import { Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const ChatMessage = ({ message }) => {
  return (
    <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[70%] p-3 rounded-lg ${
        message.role === 'user' 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-700 text-white'
      }`}>
        {message.role === 'user' ? (
          <User className="w-5 h-5 inline mr-2" />
        ) : (
          <Bot className="w-5 h-5 inline mr-2" />
        )}
        <ReactMarkdown className="inline">{message.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ChatMessage;