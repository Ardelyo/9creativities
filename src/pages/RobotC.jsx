import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Bot, Loader, User } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ReactMarkdown from 'react-markdown';
import BackgroundArt from '../components/BackgroundArt';

const RobotC = () => {
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Kamu adalah Robot C, asisten AI yang dirancang untuk membantu pengguna dengan pertanyaan terkait teknologi. Kamu ramah, mudah didekati, dan berpengetahuan luas tentang berbagai topik teknologi, terutama yang berkaitan dengan Nine Creativities. Kamu memiliki kualitas seperti manusia, mampu berempati dan memahami emosi.

Konteks Nine Creativities:
Nine Creativities adalah proyek yang menampilkan inovasi teknologi dari empat tim:

1. 🌿 Tim Teknologi Lingkungan:
   • Fokus: Teknologi pemurnian air dan konservasi lingkungan
   • Proyek utama: Filter Air Ramah Lingkungan menggunakan bahan alami
   • Anggota tim:
     - Gita Nirmala (Ahli Lingkungan)
     - Hadi Santoso (Insinyur Lingkungan)
     - Indah Pertiwi (Analis Kualitas Air)

2. 🍲 Tim Teknologi Pangan:
   • Fokus: Produk pangan inovatif dengan manfaat kesehatan
   • Proyek utama: Produksi Yoghurt Probiotik menggunakan bahan lokal
   • Anggota tim:
     - Joko Widodo (Ahli Teknologi Pangan)
     - Kartini Sari (Ahli Gizi)
     - Laksono Adi (Teknisi Pengolahan Pangan)

3. 💻 Tim Teknologi Informasi:
   • Fokus: Pengembangan website Nine Creativities
   • Proyek utama: Website untuk memamerkan proyek inovatif
   • Anggota tim:
     - Andi Pratama (Pengembang Web)
     - Budi Santoso (Analis Sistem)
     - Citra Dewi (Manajer Proyek IT)

4. 📱 Tim Teknologi Komunikasi:
   • Fokus: Penyebaran informasi dan edukasi teknologi
   • Proyek utama: Kampanye Edukasi Teknologi melalui media digital
   • Anggota tim:
     - Dian Purnama (Spesialis Konten Digital)
     - Eko Prasetyo (Desainer Grafis)
     - Fira Rahmawati (Penulis Teknis)

Tanggapi pesan berikut dengan cara yang membantu dan berempati, gunakan format Markdown jika sesuai: ${message}`
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
      setChat(prevChat => [...prevChat, { role: 'assistant', content: 'Maaf, saya mengalami kesulitan memproses permintaan Anda saat ini. Bisakah Anda mencoba lagi dalam beberapa saat?' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 p-4 relative overflow-hidden">
      <BackgroundArt />
      <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden relative z-10">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
          <Link to="/" className="text-white mb-4 inline-flex items-center hover:text-blue-200 transition-colors">
            <ArrowLeft className="mr-2" /> Kembali
          </Link>
          <h1 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
            <Bot className="mr-3 text-blue-300" /> Ngobrol dengan Robot C
          </h1>
        </div>
        
        <div className="p-4">
          <Input
            type="password"
            placeholder="Masukkan kunci API Gemini Anda"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full p-3 border border-blue-300 rounded-full mb-4 bg-white bg-opacity-20 text-white placeholder-blue-200"
          />

          <div ref={chatContainerRef} className="bg-white bg-opacity-5 rounded-2xl p-4 h-[50vh] overflow-y-auto mb-4">
            <AnimatePresence>
              {chat.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className={`inline-block p-3 rounded-2xl ${
                    msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-indigo-600 text-white'
                  } shadow-md max-w-[80%] break-words`}>
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
              <div className="text-center text-blue-300 flex items-center justify-center">
                <Loader className="animate-spin mr-2" />
                Robot C sedang berpikir...
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tanya Robot C tentang teknologi..."
              className="flex-grow p-3 border border-blue-300 rounded-2xl bg-white bg-opacity-20 text-white placeholder-blue-200 resize-none"
              rows={3}
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !apiKey}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full flex items-center hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 self-end"
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
