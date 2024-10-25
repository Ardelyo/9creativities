import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductGrid = ({ category, products }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-blue-600 mb-6">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{product.icon}</span>
                {product.id === 4 && (
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                    New
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              {product.videos && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Video Dokumentasi:</h4>
                  <div className="space-y-2">
                    {product.videos.map((video, index) => (
                      <VideoLink key={index} url={video.url} title={video.title} />
                    ))}
                  </div>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-600">{product.tag}</span>
                <Link
                  to={product.link}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductGrid;