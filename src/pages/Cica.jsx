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

  const messageBubbleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <DropletAnimation>
      <div className="page-container">
        <div className="content-card bg-white rounded-3xl shadow-lg p-8 max-w-4xl mx-auto">
          <Link to="/" className="back-button text-navy-blue mb-6 inline-block">
            <ArrowLeft className="mr-2 inline" /> Kembali
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="title text-4xl font-bold text-navy-blue mb-8 flex items-center justify-center"
          >
            <Bot className="mr-3" /> Ngobrol dengan Cica
          </motion.h1>
          
          <div className="mb-6">
            <Input
              type="password"
              placeholder="Masukkan kunci API Gemini Anda"
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
                Cica sedang berpikir...
              </motion.div>
            )}
          </div>

          <div className="flex">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tanya Cica tentang teknologi..."
              className="flex-grow mr-2 p-2 border rounded"
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !apiKey}
              className="bg-navy-blue text-white px-4 py-2 rounded flex items-center"
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