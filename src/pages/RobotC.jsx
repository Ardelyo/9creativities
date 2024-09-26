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
      className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-4 sm:p-8 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <BackgroundArt />
      <div className="max-w-4xl mx-auto relative z-10">
        <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors mb-8 inline-block">
          <ArrowLeft className="mr-2 inline" /> Kembali
        </Link>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Chat dengan Robot C
          </h1>
          <p className="text-xl text-blue-700">
            Tanyakan apa saja tentang Nine Creativities!
          </p>
        </motion.div>

        <div className="bg-blue-50 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden">
          <div className="p-4 sm:p-6 bg-blue-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bot className="w-8 h-8 text-white mr-2" />
                <h2 className="text-2xl font-bold text-white">Robot C</h2>
              </div>
              <Input
                type="password"
                placeholder="Masukkan kunci API Gemini"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="max-w-xs rounded-full text-sm bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70"
              />
            </div>
          </div>

          <motion.div 
            ref={chatContainerRef} 
            className="h-[60vh] overflow-y-auto space-y-4 p-4 sm:p-6"
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
                  <div className={`max-w-[70%] p-3 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-blue-100 text-blue-800'
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
                <Loader className="animate-spin text-blue-500" />
              </motion.div>
            )}
          </motion.div>

          <div className="p-4 sm:p-6 bg-blue-50 border-t border-blue-200">
            <div className="flex items-center space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ketik pesan Anda..."
                className="flex-grow rounded-full text-sm"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={isLoading || !apiKey} 
                className="rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RobotC;
