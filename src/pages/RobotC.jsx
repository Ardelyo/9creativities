import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Send, Bot, Loader, User, ArrowLeft } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ReactMarkdown from 'react-markdown';
import BackgroundArt from '../components/BackgroundArt';

const RobotC = () => {
  const [apiKey, setApiKey] = useState('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([
    { role: 'assistant', content: "👋 Halo! Saya Robot C, asisten AI untuk Nine Creativities. Apa yang ingin Anda ketahui tentang proyek-proyek kami? 🚀" }
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
              text: `Kamu adalah Robot C, asisten AI untuk Nine Creativities. Gunakan Bahasa Indonesia dalam merespons. Berikan jawaban dengan gaya yang terstruktur, sederhana, dan gunakan emoji yang sesuai. Beri jarak antar paragraf untuk kemudahan membaca. Respons untuk: ${message}`
            }]
          }]
        })
      });

      if (!response.ok) throw new Error('Gagal mendapatkan respons dari API Gemini');
      const data = await response.json();
      const aiResponse = data.candidates[0].content.parts[0].text;
      setChat(prevChat => [...prevChat, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Error memanggil API Gemini:', error);
      setChat(prevChat => [...prevChat, { role: 'assistant', content: "Maaf, saya mengalami kesulitan saat ini. Bisakah Anda mencoba lagi nanti? 🙏" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-4 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden relative z-10">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-t-3xl">
          <Link to="/" className="text-white mb-6 inline-flex items-center hover:text-blue-200 transition-colors">
            <ArrowLeft className="mr-2" /> Kembali
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-4 flex items-center justify-center"
          >
            <Bot className="mr-3 text-blue-300" /> Ngobrol dengan Robot C
          </motion.h1>
        </div>
        
        <div className="p-6">
          <Input
            type="password"
            placeholder="Masukkan kunci API Gemini Anda"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full p-3 border border-blue-300 rounded-full mb-4 bg-white bg-opacity-20 text-white placeholder-blue-200"
          />

          <div ref={chatContainerRef} className="bg-white bg-opacity-5 rounded-2xl p-4 h-[50vh] overflow-y-auto mb-6">
            <AnimatePresence>
              {chat.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`inline-block p-4 rounded-2xl ${
                      msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-indigo-600 text-white'
                    } shadow-md max-w-[80%] flex items-start`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {msg.role === 'user' ? (
                      <User className="w-6 h-6 mr-2 mt-1" />
                    ) : (
                      <Bot className="w-6 h-6 mr-2 mt-1" />
                    )}
                    <div>
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <motion.div
                className="text-center text-blue-300 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Loader className="animate-spin mr-2" />
                Robot C sedang berpikir...
              </motion.div>
            )}
          </div>

          <div className="flex">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tanya Robot C tentang teknologi..."
              className="flex-grow mr-2 p-3 border border-blue-300 rounded-2xl bg-white bg-opacity-20 text-white placeholder-blue-200 resize-none"
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !apiKey}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full flex items-center hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105"
            >
              <Send className="mr-2" /> Kirim
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotC;
