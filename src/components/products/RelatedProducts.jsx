import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const RelatedProducts = ({ products, currentProductId }) => {
  const filteredProducts = products.filter(product => product.id !== currentProductId).slice(0, 3);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-2">{product.icon}</div>
            <h3 className="font-semibold mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
            <Link
              to={product.link}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              Learn More <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;