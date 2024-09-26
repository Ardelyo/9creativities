import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smile, Settings, X, Home, Moon, Music, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [mood, setMood] = useState('');

  const recentlyPlayed = [
    { title: "Teknologi Lingkungan", duration: "10 min", image: "/placeholder.svg" },
    { title: "Teknologi Pangan", duration: "15 min", image: "/placeholder.svg" },
  ];

  const favorites = [
    { title: "Teknologi Informasi", duration: "12 min", image: "/placeholder.svg" },
    { title: "Teknologi Komunikasi", duration: "8 min", image: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-4 sm:p-8">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="p-6 bg-blue-600 text-white">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Smile className="w-6 h-6 text-blue-600" />
              </div>
              <Settings className="w-6 h-6" />
            </div>
            <X className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Selamat datang</h1>
          <div className="bg-blue-500 rounded-full p-3 flex items-center mt-4">
            <Smile className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Bagaimana perasaan Anda?"
              className="bg-transparent text-white placeholder-blue-200 outline-none flex-grow"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
            />
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Baru-baru ini dilihat</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {recentlyPlayed.map((item, index) => (
              <div key={index} className="bg-blue-100 rounded-xl p-3">
                <img src={item.image} alt={item.title} className="w-full h-24 object-cover rounded-lg mb-2" />
                <h3 className="font-medium text-blue-800">{item.title}</h3>
                <p className="text-sm text-blue-600">{item.duration}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-4">Favorit Anda</h2>
          <div className="space-y-4">
            {favorites.map((item, index) => (
              <div key={index} className="flex items-center bg-blue-50 rounded-xl p-3">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg mr-4" />
                <div>
                  <h3 className="font-medium text-blue-800">{item.title}</h3>
                  <p className="text-sm text-blue-600">{item.duration}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center bg-blue-600 rounded-full p-2">
            <Button variant="ghost" className="text-white">
              <Home className="w-6 h-6" />
            </Button>
            <Button variant="ghost" className="text-white">
              <Moon className="w-6 h-6" />
            </Button>
            <Button variant="ghost" className="text-white">
              <Music className="w-6 h-6" />
            </Button>
            <Button variant="ghost" className="text-white">
              <Search className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;