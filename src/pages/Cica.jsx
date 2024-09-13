import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Bot, Loader } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ReactMarkdown from 'react-markdown';

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
        throw new Error('Gagal mendapatkan respons dari API Gemini');
      }

      const data = await response.json();
      const aiResponse = data.candidates[0].content.parts[0].text;

      setChat(prevChat => [...prevChat, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Error memanggil API Gemini:', error);
      setChat(prevChat => [...prevChat, { role: 'assistant', content: `Maaf, saya mengalami kesulitan memproses permintaan Anda saat ini. Bisakah Anda mencoba lagi dalam beberapa saat?` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const messageBubbleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-teal-200 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-6">
          <Link to="/" className="text-white mb-6 inline-flex items-center">
            <ArrowLeft className="mr-2" /> Kembali
          </Link>
          <h1 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
            <Bot className="mr-3" /> Ngobrol dengan Cica
          </h1>
        </div>
        
        <div className="p-6">
          <Input
            type="password"
            placeholder="Masukkan kunci API Gemini Anda"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full p-2 border rounded-full mb-4"
          />

          <div ref={chatContainerRef} className="bg-gray-100 rounded-2xl p-4 h-[50vh] overflow-y-auto mb-6">
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
                      msg.role === 'user' ? 'bg-emerald-500 text-white' : 'bg-white text-emerald-800'
                    } shadow-md max-w-[80%]`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <motion.div
                className="text-center text-emerald-600 flex items-center justify-center"
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
              className="flex-grow mr-2 p-2 border rounded-2xl"
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !apiKey}
              className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-6 py-2 rounded-full flex items-center hover:from-emerald-500 hover:to-teal-600 transition-colors duration-300"
            >
              <Send className="mr-2" /> Kirim
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cica;