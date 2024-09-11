import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Bot, Loader } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ReactMarkdown from 'react-markdown';
import DropletAnimation from '../components/DropletAnimation';

const Cica = () => {
  const [apiKey, setApiKey] = useState('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are Cica, an AI chatbot designed to assist users with technology-related inquiries. You are friendly, approachable, and knowledgeable about a wide range of technology topics. You possess human-like qualities, capable of empathy and emotional understanding. Respond to the following message in a helpful and empathetic manner, using Markdown formatting where appropriate: ${message}`
                }
              ]
            }
          ]
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message || 'Failed to get response from Gemini API');
      }

      const data = await response.json();
      const aiResponse = data.candidates[0].content.parts[0].text;

      setChat(prevChat => [...prevChat, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setChat(prevChat => [...prevChat, { role: 'assistant', content: `I apologize, but I'm having trouble processing your request at the moment. This could be due to an issue with the API key or a temporary service disruption. Could you please try again in a few moments? If the problem persists, you might want to double-check your API key. I'm here to help once we get this sorted out!` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const messageBubbleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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

          <div ref={chatContainerRef} className="chat-container bg-gray-100 rounded-2xl p-4 h-[60vh] overflow-y-auto mb-6">
            <AnimatePresence>
              {chat.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}
                  variants={messageBubbleVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <motion.div
                    className={`inline-block p-3 rounded-2xl ${
                      msg.role === 'user' ? 'bg-navy-blue text-white' : 'bg-white text-navy-blue'
                    } shadow-md max-w-[80%]`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <motion.div
                className="text-center text-gray-500 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Loader className="animate-spin mr-2" />
                Cica is thinking...
              </motion.div>
            )}
          </div>

          <div className="flex">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask Cica about technology..."
              className="flex-grow mr-2 p-2 border rounded"
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !apiKey}
              className="bg-navy-blue text-white px-4 py-2 rounded flex items-center"
            >
              <Send className="mr-2" /> Send
            </Button>
          </div>
        </div>
      </div>
    </DropletAnimation>
  );
};

export default Cica;