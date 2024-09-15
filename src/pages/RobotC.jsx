import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, Loader, ArrowLeft } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import ChatMessage from '../components/ChatMessage';
import SuggestionCard from '../components/SuggestionCard';

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

  const suggestions = [
    { title: "Bantu saya menulis HTML, CSS, dan JS", content: "Contoh kode HTML..." },
    { title: "Role-play sebagai karakter dari novel", content: "Deskripsi karakter..." },
    { title: "Inspirasi dari gambar", content: "Deskripsi gambar..." },
    { title: "Bantu saya memahami Shakespeare", content: "Kutipan Shakespeare..." },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors mb-8 inline-block">
          <ArrowLeft className="mr-2 inline" /> Kembali
        </Link>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-2">
              Hello, <span className="text-blue-400">Pengguna</span>.
            </h1>
            <h2 className="text-2xl text-gray-400 mb-8">Bagaimana saya bisa membantu Anda hari ini?</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {suggestions.map((suggestion, index) => (
                <SuggestionCard key={index} {...suggestion} />
              ))}
            </div>

            <div ref={chatContainerRef} className="h-[50vh] overflow-y-auto space-y-4 mb-6">
              {chat.map((msg, index) => (
                <ChatMessage key={index} message={msg} />
              ))}
              {isLoading && (
                <div className="flex justify-center">
                  <Loader className="animate-spin text-blue-400" />
                </div>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ketik pesan Anda..."
                className="flex-grow bg-gray-700 border-gray-600 text-white"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={isLoading || !apiKey} 
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RobotC;
