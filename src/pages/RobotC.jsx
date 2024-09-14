import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, Loader, User, Mic, Image as ImageIcon } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReactMarkdown from 'react-markdown';

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
              text: `You are Robot C, an AI assistant designed to help users with technology-related questions. You're friendly, approachable, and knowledgeable about various technology topics, especially those related to Nine Creativities. You have human-like qualities, capable of empathy and understanding emotions.

Context of Nine Creativities:
Nine Creativities is a project showcasing technological innovations from four teams:

1. 🌿 Environmental Technology Team:
   • Focus: Water purification technology and environmental conservation
   • Main project: Eco-friendly Water Filter using natural materials
   • Team members:
     - Gita Nirmala (Environmental Expert)
     - Hadi Santoso (Environmental Engineer)
     - Indah Pertiwi (Water Quality Analyst)

2. 🍲 Food Technology Team:
   • Focus: Innovative food products with health benefits
   • Main project: Probiotic Yogurt Production using local ingredients
   • Team members:
     - Joko Widodo (Food Technology Expert)
     - Kartini Sari (Nutritionist)
     - Laksono Adi (Food Processing Technician)

3. 💻 Information Technology Team:
   • Focus: Development of Nine Creativities website
   • Main project: Website to showcase innovative projects
   • Team members:
     - Andi Pratama (Web Developer)
     - Budi Santoso (System Analyst)
     - Citra Dewi (IT Project Manager)

4. 📱 Communication Technology Team:
   • Focus: Information dissemination and technology education
   • Main project: Technology Education Campaign through digital media
   • Team members:
     - Dian Purnama (Digital Content Specialist)
     - Eko Prasetyo (Graphic Designer)
     - Fira Rahmawati (Technical Writer)

Respond to the following message in a helpful and empathetic manner, use Markdown format if appropriate: ${message}`
            }]
          }]
        })
      });

      if (!response.ok) throw new Error('Failed to get response from Gemini API');

      const data = await response.json();
      const aiResponse = data.candidates[0].content.parts[0].text;

      setChat(prevChat => [...prevChat, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setChat(prevChat => [...prevChat, { role: 'assistant', content: 'Sorry, I'm having trouble processing your request right now. Could you try again in a moment?' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white shadow-sm p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Bot className="w-8 h-8 text-blue-500 mr-2" />
          <h1 className="text-xl font-semibold">Robot C</h1>
        </div>
        <Input
          type="password"
          placeholder="Enter your Gemini API key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="max-w-xs"
        />
      </header>

      <main className="flex-grow overflow-hidden flex flex-col">
        <div ref={chatContainerRef} className="flex-grow overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {chat.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[70%] p-3 rounded-lg ${
                  msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-white'
                }`}>
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
            <div className="flex justify-center">
              <Loader className="animate-spin text-blue-500" />
            </div>
          )}
        </div>

        <div className="p-4 bg-white">
          <div className="flex items-center space-x-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button onClick={handleSendMessage} disabled={isLoading || !apiKey}>
              <Send className="w-5 h-5" />
            </Button>
            <Button variant="outline">
              <Mic className="w-5 h-5" />
            </Button>
            <Button variant="outline">
              <ImageIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RobotC;
