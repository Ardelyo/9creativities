import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';

const ProdukKami = () => {
  const products = [
    {
      id: 1,
      name: "Nine Creativities Website",
      description: "Platform to showcase innovative projects from various technology teams.",
      icon: "🌐",
      tag: "Web Development",
      link: "/"
    },
    {
      id: 2,
      name: "Robot C",
      description: "Interactive AI assistant to answer questions about Nine Creativities.",
      icon: "🤖",
      tag: "AI",
      link: "/robot-c"
    },
    {
      id: 3,
      name: "Carbon Calculator",
      description: "Tool to calculate and visualize carbon footprint.",
      icon: "🌿",
      tag: "Environment",
      link: "/carbon-calculator"
    },
  ];

  return (
    <DropletAnimation>
      <div className="min-h-screen bg-gray-900 p-8 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors mb-8 inline-block">
            <ArrowLeft className="mr-2 inline" /> Back
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Nine Creativities Products
            </h1>
            <p className="text-2xl text-gray-300">
              Explore our latest innovations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-6xl">{product.icon}</span>
                    {product.id === 2 && (
                      <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                        New
                      </span>
                    )}
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{product.name}</h2>
                  <p className="text-gray-300 mb-6 text-lg">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-400 font-semibold">{product.tag}</span>
                    <Link
                      to={product.link}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors duration-300 text-lg font-semibold"
                    >
                      Try it →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DropletAnimation>
  );
};

export default ProdukKami;
