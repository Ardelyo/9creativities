import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: "Anandita", role: "Insinyur Lingkungan", interest: "Teknologi Ramah Lingkungan", image: "/8_20241010_163755_0006.png" },
  { name: "Bayu", role: "Analis Lingkungan", interest: "Pemantauan Kualitas Udara", image: "/7_20241010_163755_0005.png" },
  { name: "Asyifa R", role: "Ahli Konservasi", interest: "Konservasi Air", image: "/6_20241010_163755_0004.png" },
  { name: "Asyifa K", role: "Spesialis Keberlanjutan", interest: "Manajemen Limbah", image: "/5_20241010_163755_0003.png" },
  { name: "Aldy", role: "Teknisi Lingkungan", interest: "Pengolahan Air Limbah", image: "/4_20241010_163755_0002.png" },
  { name: "Aira", role: "Peneliti Ekologi", interest: "Restorasi Ekosistem", image: "/3_20241010_163755_0001.png" },
  { name: "Indina", role: "Edukator Lingkungan", interest: "Kesadaran Lingkungan", image: "/2_20241010_163755_0000.png" },
  { name: "Novaldo", role: "Analis Kualitas Air", interest: "Pemantauan Ekosistem Air", image: "/9_20241010_163756_0007.png" },
];

const EnvironmentalTeamMembers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          className="bg-green-50 p-6 rounded-2xl text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/placeholder.svg';
              console.error(`Failed to load image for ${member.name}: ${member.image}`);
            }}
          />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{member.name}</h3>
          <p className="text-green-600 mb-2">{member.role}</p>
          <p className="text-gray-600">
            <span className="font-medium">Minat:</span> {member.interest}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default EnvironmentalTeamMembers;