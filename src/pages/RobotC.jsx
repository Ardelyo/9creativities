import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, Loader, User, ArrowLeft } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import BackgroundArt from '../components/BackgroundArt';

const RobotC = () => {
  const [apiKey, setApiKey] = useState('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([
    { role: 'assistant', content: "👋 Hello! I'm Robot C, the AI assistant for Nine Creativities. What would you like to know about our projects? 🚀" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chat]);

  const handleSendMessage = async () => {
    if (!apiKey || !message) return;
    setIsLoading(true);
    setChat(prevChat => [...prevChat, { role: 'user', content: message }]);
    setMessage('');

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are Robot C, the AI assistant for Nine Creativities. Respond in English. Provide answers in a structured, simple style, and use appropriate emojis. Add spacing between paragraphs for readability. Response for: ${message}`
            }]
          }]
        })
      });

      if (!response.ok) throw new Error('Failed to get response from Gemini API');
      const data = await response.json();
      const aiResponse = data.candidates[0].content.parts[0].text;
      setChat(prevChat => [...prevChat, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setChat(prevChat => [...prevChat, { role: 'assistant', content: "I'm sorry, I'm having trouble at the moment. Could you try again later? 🙏" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div 
      className="flex flex-col min-h-screen bg-gray-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <BackgroundArt />
      <header className="bg-gray-800 shadow-md p-4 relative z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="flex items-center">
            <Bot className="w-8 h-8 text-blue-400 mr-2" />
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Robot C</h1>
          </div>
          <Input
            type="password"
            placeholder="Enter Gemini API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="max-w-xs rounded-full text-sm bg-gray-700 border-gray-600 text-white"
          />
        </div>
      </header>

      <main className="flex-grow overflow-hidden flex flex-col p-4 max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          ref={chatContainerRef} 
          className="flex-grow overflow-y-auto space-y-4 mb-4 p-4 bg-gray-800 bg-opacity-50 rounded-3xl shadow-inner"
          variants={containerVariants}
        >
          <AnimatePresence>
            {chat.map((msg, index) => (
              <motion.div
                key={index}
                variants={messageVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[70%] p-4 ${
                  msg.role === 'user' 
                    ? 'bg-blue-500 text-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl' 
                    : 'bg-gray-700 text-white rounded-tl-2xl rounded-tr-2xl rounded-br-2xl'
                } shadow-md transition-all duration-300 hover:shadow-lg`}>
                  {msg.role === 'user' ? (
                    <User className="w-5 h-5 inline mr-2" />
                  ) : (
                    <Bot className="w-5 h-5 inline mr-2" />
                  )}
                  <ReactMarkdown className="inline">{msg.content}</ReactMarkdown>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isLoading && (
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Loader className="animate-spin text-blue-400" />
            </motion.div>
          )}
        </motion.div>

        <motion.div 
          className="mt-auto bg-gray-800 p-4 rounded-3xl shadow-md"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center space-x-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow rounded-full text-sm bg-gray-700 border-gray-600 text-white"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button 
              onClick={handleSendMessage} 
              disabled={isLoading || !apiKey} 
              className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
};

export default RobotC;
