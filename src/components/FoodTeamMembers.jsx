import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: "Rizka", role: "Anggota Tim", interest: "Fermentasi Makanan", image: "/2_20241010_160341_0000.png" },
  { name: "Nabillah", role: "Anggota Tim", interest: "Nutrisi Makanan", image: "/3_20241010_160342_0001.png" },
  { name: "Fadillah", role: "Anggota Tim", interest: "Pengembangan Produk", image: "/4_20241010_160342_0002.png" },
  { name: "Nurul", role: "Anggota Tim", interest: "Keamanan Pangan", image: "/5_20241010_160342_0003.png" },
  { name: "Fikri", role: "Anggota Tim", interest: "Teknologi Pengawetan", image: "/6_20241010_160342_0004.png" },
  { name: "Revan", role: "Anggota Tim", interest: "Inovasi Makanan", image: "/7_20241010_160342_0005.png" },
  { name: "Keanu", role: "Anggota Tim", interest: "Analisis Sensori", image: "/8_20241010_160342_0006.png" },
  { name: "Abyan", role: "Anggota Tim", interest: "Pengolahan Makanan", image: "/9_20241010_160342_0007.png" },
  { name: "Ridho", role: "Anggota Tim", interest: "Pengemasan Makanan", image: "/10_20241010_160342_0008.png" },
];

const FoodTeamMembers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {teamMembers.map((member, index) => {
        const imagePath = `${window.location.origin}${member.image}`;
        console.log(`Attempting to load image for ${member.name}: ${imagePath}`);
        return (
          <motion.div
            key={index}
            className="bg-orange-50 p-6 rounded-2xl text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src={imagePath} 
              alt={member.name} 
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover"
              onError={(e) => {
                console.error(`Failed to load image for ${member.name}: ${imagePath}`);
                e.target.onerror = null;
                e.target.src = `${window.location.origin}/placeholder.svg`;
              }}
            />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-orange-600 mb-2">{member.role}</p>
            <p className="text-gray-600">
              <span className="font-medium">Minat:</span> {member.interest}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FoodTeamMembers;