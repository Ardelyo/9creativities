import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, ArrowLeft } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import ChatMessage from '../components/chat/ChatMessage';
import ChatSkeleton from '../components/chat/ChatSkeleton';
import { getSystemPrompt, getSuggestions } from '../utils/robotCPrompt';

const RobotC = () => {
  const [apiKey, setApiKey] = useState('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([
    { 
      role: 'assistant', 
      content: "👋 Halo! Saya Robot C, asisten AI untuk Nine Creativities. Ada yang bisa saya bantu tentang proyek-proyek inovatif kami?" 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);
  const { toast } = useToast();

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chat]);

  const handleSendMessage = async () => {
    if (!apiKey || !message.trim()) return;

    setIsLoading(true);
    setChat(prev => [...prev, { role: 'user', content: message }]);
    setMessage('');

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `${getSystemPrompt()}\n\nUser message: ${message}`
                  }
                ]
              }
            ]
          })
        }
      );

      if (!response.ok) throw new Error('Failed to get response from Gemini API');

      const data = await response.json();
      const aiResponse = data.candidates[0].content.parts[0].text;

      setChat(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      toast({
        title: "Error",
        description: "Failed to get response from Robot C. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 sm:p-6">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors mb-8 inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Kembali
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden"
        >
          <div className="p-4 bg-blue-600">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Bot className="w-6 h-6 text-white" />
                <h1 className="text-xl font-semibold text-white">Robot C</h1>
              </div>
              <Input
                type="password"
                placeholder="Enter Gemini API Key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="max-w-[200px] bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
            </div>
          </div>

          <div 
            ref={chatContainerRef}
            className="h-[60vh] overflow-y-auto p-4 space-y-4"
          >
            {chat.map((msg, index) => (
              <ChatMessage key={index} {...msg} />
            ))}
            {isLoading && <ChatSkeleton />}
          </div>

          {chat.length === 1 && (
            <div className="p-4 bg-blue-50/50">
              <p className="text-sm text-blue-600 mb-2">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {getSuggestions().map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-200 hover:bg-blue-50"
                    onClick={() => setMessage(suggestion)}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 bg-gray-50 border-t border-blue-100">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-grow"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !apiKey}
                size="icon"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RobotC;