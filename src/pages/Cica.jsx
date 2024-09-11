import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Bot } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import DropletAnimation from '../components/DropletAnimation';

const Cica = () => {
  const [apiKey, setApiKey] = useState('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!apiKey || !message) return;

    setIsLoading(true);
    setChat(prevChat => [...prevChat, { role: 'user', content: message }]);
    setMessage('');

    try {
      // This is a placeholder for the actual API call
      // You would need to implement the actual Gemini API call here
      const response = await new Promise(resolve => 
        setTimeout(() => resolve({ 
          role: 'assistant', 
          content: "Hello! I'm Cica, your AI assistant. How can I help you with technology today?" 
        }), 1000)
      );

      setChat(prevChat => [...prevChat, response]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setChat(prevChat => [...prevChat, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DropletAnimation>
      <div className="page-container">
        <div className="content-card bg-white rounded-3xl shadow-lg p-8 max-w-4xl mx-auto">
          <Link to="/" className="back-button text-navy-blue mb-6 inline-block">
            <ArrowLeft className="mr-2 inline" /> Back
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="title text-4xl font-bold text-navy-blue mb-8 flex items-center justify-center"
          >
            <Bot className="mr-3" /> Chat with Cica
          </motion.h1>
          
          <div className="mb-6">
            <Input
              type="password"
              placeholder="Enter your Gemini API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="chat-container bg-gray-100 rounded-2xl p-4 h-96 overflow-y-auto mb-6">
            {chat.map((msg, index) => (
              <div key={index} className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-3 rounded-lg ${msg.role === 'user' ? 'bg-navy-blue text-white' : 'bg-white text-navy-blue'}`}>
                  {msg.content}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="text-center text-gray-500">
                Cica is thinking...
              </div>
            )}
          </div>

          <div className="flex">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask Cica about technology..."
              className="flex-grow mr-2 p-2 border rounded"
            />
            <Button onClick={handleSendMessage} disabled={isLoading || !apiKey} className="bg-navy-blue text-white px-4 py-2 rounded">
              <Send className="mr-2" /> Send
            </Button>
          </div>
        </div>
      </div>
    </DropletAnimation>
  );
};

export default Cica;