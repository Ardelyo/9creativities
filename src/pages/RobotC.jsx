import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Bot, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from 'ai/react';

const RobotC = () => {
  const { messages, input, handleInputChange, handleSubmit, setMessages } = useChat();
  const messagesEndRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setIsTyping(true);
    await handleSubmit(e);
    setIsTyping(false);
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors mb-8 inline-block">
          <ArrowLeft className="mr-2 inline" /> Kembali
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Robot <span className="text-blue-600">C</span>
          </h1>
          <p className="text-xl text-gray-600">
            Tanya Apa Saja
          </p>
          <p className="text-sm text-gray-500 mt-2">
            *Robot C tidak berdasarkan website Nine Creativities
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Topik yang Bisa Ditanyakan:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Teknologi Pangan dan Inovasi Makanan</li>
            <li>Teknologi Informasi dan Perkembangannya</li>
            <li>Teknologi Komunikasi Modern</li>
            <li>Teknologi Lingkungan dan Keberlanjutan</li>
            <li>Fermentasi dan Pengolahan Makanan</li>
            <li>Sistem Informasi dan Database</li>
            <li>Media Komunikasi Digital</li>
            <li>Konservasi Lingkungan</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Chat dengan Robot C</h2>
            <Button
              variant="outline"
              size="icon"
              onClick={clearChat}
              className="hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </div>

          <ScrollArea className="h-[500px] pr-4">
            <div className="space-y-4">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.role === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <Bot className="h-4 w-4 mb-2" />
                    )}
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <p>Robot C sedang mengetik...</p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <form onSubmit={handleFormSubmit} className="mt-4 flex gap-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Tanyakan sesuatu..."
              className="flex-1"
            />
            <Button type="submit" className="shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RobotC;
