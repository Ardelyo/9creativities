import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: "Anandita", role: "Insinyur Lingkungan", interest: "Teknologi Ramah Lingkungan", image: "https://iili.io/29Fuaef.png" },
  { name: "Bayu", role: "Analis Lingkungan", interest: "Pemantauan Kualitas Udara", image: "https://iili.io/29Fucb4.png" },
  { name: "Asyifa R", role: "Ahli Konservasi", interest: "Konservasi Air", image: "https://iili.io/29Fu7Js.png" },
  { name: "Asyifa K", role: "Spesialis Keberlanjutan", interest: "Manajemen Limbah", image: "https://iili.io/29FuF0F.png" },
  { name: "Aldy", role: "Teknisi Lingkungan", interest: "Pengolahan Air Limbah", image: "https://iili.io/29FTZle.png" },
  { name: "Aira", role: "Peneliti Ekologi", interest: "Restorasi Ekosistem", image: "https://iili.io/29FTsi7.png" },
  { name: "Indina", role: "Edukator Lingkungan", interest: "Kesadaran Lingkungan", image: "https://iili.io/29FTiVS.png" },
  { name: "Novaldo", role: "Analis Kualitas Air", interest: "Pemantauan Ekosistem Air", image: "https://iili.io/29FuIsI.png" },
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
              console.error(`Failed to load image for ${member.name}: ${member.image}`);
              e.target.onerror = null;
              e.target.src = `${window.location.origin}/placeholder.svg`;
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