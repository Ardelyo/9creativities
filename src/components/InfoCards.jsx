import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Building, Award, Rocket, Heart, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const cards = [
  {
    icon: <Building className="w-8 h-8 text-blue-600" />,
    title: "Nine Creativities",
    description: "Platform inovatif yang menampilkan proyek-proyek kreatif dan teknologi dari siswa-siswi kelas 9C."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Tim Kami",
    description: "Empat tim spesialis: Teknologi Lingkungan, Pangan, Informasi, dan Komunikasi."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    title: "Proyek Unggulan",
    description: "Filter Air Ramah Lingkungan, Yoghurt Probiotik, Website Interaktif, dan Dokumentasi Multimedia."
  },
  {
    icon: <Code className="w-8 h-8 text-blue-600" />,
    title: "Teknologi",
    description: "Menggunakan React, Tailwind CSS, dan berbagai teknologi modern untuk pengembangan."
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    title: "Inovasi",
    description: "Mengembangkan solusi kreatif untuk tantangan teknologi dan lingkungan masa kini."
  },
  {
    icon: <Heart className="w-8 h-8 text-blue-600" />,
    title: "Nilai Inti",
    description: "Kreativitas, Kolaborasi, dan Komitmen untuk memberikan dampak positif."
  }
];

const InfoCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-white border-blue-100">
            <CardHeader className="space-y-1">
              <div className="flex items-center space-x-4">
                {card.icon}
                <CardTitle className="text-xl font-bold text-blue-900">
                  {card.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-base">
                {card.description}
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default InfoCards;