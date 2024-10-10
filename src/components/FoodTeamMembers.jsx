import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const teamMembers = [
  { name: "Rizka", role: "Anggota Tim", interest: "Fermentasi Makanan", image: "https://iili.io/29FuvLB.png" },
  { name: "Nabillah", role: "Anggota Tim", interest: "Nutrisi Makanan", image: "https://iili.io/29FAHkG.png" },
  { name: "Fadillah", role: "Anggota Tim", interest: "Pengembangan Produk", image: "https://iili.io/29FuQXp.png" },
  { name: "Nurul", role: "Anggota Tim", interest: "Keamanan Pangan", image: "https://iili.io/29FuDBI.png" },
  { name: "Fikri", role: "Anggota Tim", interest: "Teknologi Pengawetan", image: "https://iili.io/29FAxkb.png" },
  { name: "Revan", role: "Anggota Tim", interest: "Inovasi Makanan", image: "https://iili.io/29FAB49.png" },
  { name: "Keanu", role: "Anggota Tim", interest: "Analisis Sensori", image: "https://iili.io/29FAoYu.png" },
  { name: "Abyan", role: "Anggota Tim", interest: "Pengolahan Makanan", image: "https://iili.io/29FAuhQ.png" },
  { name: "Ridho", role: "Anggota Tim", interest: "Pengemasan Makanan", image: "https://iili.io/29FATTx.png" },
];

const FoodTeamMembers = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mb-12 bg-white rounded-3xl p-6 sm:p-8 shadow-xl"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 flex items-center">
        <Users className="mr-2" /> Kenalan dengan Tim Kami
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-orange-50 p-6 rounded-2xl text-center"
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
            <p className="text-orange-600 mb-2">{member.role}</p>
            <p className="text-gray-600">
              <span className="font-medium">Minat:</span> {member.interest}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FoodTeamMembers;