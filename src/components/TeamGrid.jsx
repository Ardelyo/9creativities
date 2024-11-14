import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplet, Utensils, Cpu, Wifi, Package, Users } from 'lucide-react';

const TeamGrid = () => {
  const teams = [
    { 
      title: "Tentang Kelas Kami", 
      icon: Users, 
      color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      description: "Mengenal lebih dekat dengan kelas 9C",
      to: "/our-class" 
    },
    { 
      title: "Teknologi Lingkungan", 
      icon: Droplet, 
      color: "bg-gradient-to-br from-green-400 to-green-600",
      description: "Solusi inovatif untuk lingkungan berkelanjutan",
      to: "/environmental-team" 
    },
    { 
      title: "Teknologi Pangan", 
      icon: Utensils, 
      color: "bg-gradient-to-br from-orange-400 to-orange-600",
      description: "Inovasi dalam pengolahan makanan sehat",
      to: "/food-team" 
    },
    { 
      title: "Teknologi Informasi", 
      icon: Cpu, 
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      description: "Mengembangkan solusi digital masa depan",
      to: "/information-technology" 
    },
    { 
      title: "Teknologi Komunikasi", 
      icon: Wifi, 
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
      description: "Menghubungkan ide melalui teknologi",
      to: "/communication-technology" 
    },
    { 
      title: "Produk Kami", 
      icon: Package, 
      color: "bg-gradient-to-br from-pink-400 to-pink-600",
      description: "Hasil karya inovatif tim kami",
      to: "/produk-kami" 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {teams.map((team, index) => (
        <motion.div
          key={team.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.03 }}
          className="group relative"
        >
          <Link 
            to={team.to} 
            className="block h-full"
          >
            <div className="h-full rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`${team.color} p-6 sm:p-8`}>
                <team.icon className="w-12 h-12 sm:w-16 sm:h-16 text-white mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {team.title}
                </h3>
                <p className="text-white/80 text-sm sm:text-base">
                  {team.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 rounded-2xl" />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default TeamGrid;