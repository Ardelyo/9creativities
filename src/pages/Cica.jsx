import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Bot, Loader } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
                  text: `Kamu adalah Cica, asisten AI yang dirancang untuk membantu pengguna dengan pertanyaan terkait teknologi. Kamu ramah, mudah didekati, dan berpengetahuan luas tentang berbagai topik teknologi. Kamu memiliki kualitas seperti manusia, mampu berempati dan memahami emosi. Tanggapi pesan berikut dengan cara yang membantu dan berempati, gunakan format Markdown jika sesuai: ${message}`
                }
              ]
            }
          ]
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message || 'Gagal mendapatkan respons dari API Gemini');
      }

      const data = await response.json();
      const aiResponse = data.candidates[0].content.parts[0].text;

      setChat(prevChat => [...prevChat, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Error memanggil API Gemini:', error);
      setChat(prevChat => [...prevChat, { role: 'assistant', content: `Maaf, saya mengalami kesulitan memproses permintaan Anda saat ini. Ini mungkin karena masalah dengan kunci API atau gangguan layanan sementara. Bisakah Anda mencoba lagi dalam beberapa saat? Jika masalah berlanjut, Anda mungkin ingin memeriksa kembali kunci API Anda. Saya siap membantu begitu masalah ini teratasi!` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DropletAnimation>
      <div className="page-container bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="content-card bg-white rounded-3xl shadow-lg p-8 w-full max-w-4xl">
          <Link to="/" className="back-button text-navy-blue mb-6 inline-block">
            <ArrowLeft className="mr-2 inline" /> Kembali
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-2xl mb-8 flex items-center"
          >
            <Bot className="w-12 h-12 mr-4" />
            <div>
              <h1 className="text-3xl font-bold mb-2">Ngobrol dengan Cica</h1>
              <p className="text-lg">Asisten AI untuk teknologi dan inovasi</p>
            </div>
          </motion.div>
          
          <div className="mb-6">
            <Input
              type="password"
              placeholder="Masukkan kunci API Gemini Anda"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 transition-colors"
            />
          </div>

          <div ref={chatContainerRef} className="chat-container bg-gray-100 rounded-2xl p-4 h-[50vh] overflow-y-auto mb-6 flex flex-col space-y-4">
            <AnimatePresence>
              {chat.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.role === 'user' 
                        ? 'bg-blue-500 text-white rounded-br-none' 
                        : 'bg-white text-gray-800 rounded-bl-none shadow-md'
                    }`}
                  >
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <motion.div
                className="flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="w-4 h-4 bg-blue-500 rounded-full mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                />
                <motion.div
                  className="w-4 h-4 bg-purple-500 rounded-full mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0.2, ease: "easeInOut" }}
                />
                <motion.div
                  className="w-4 h-4 bg-pink-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0.4, ease: "easeInOut" }}
                />
              </motion.div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tanya Cica tentang teknologi..."
              className="flex-grow p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 transition-colors"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !apiKey}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              <Send className="mr-2" /> Kirim
            </Button>
          </div>
        </div>
      </div>
    </DropletAnimation>
  );
};

export default Cica;