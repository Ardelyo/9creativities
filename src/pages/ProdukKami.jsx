import React from 'react';
import { motion } from 'framer-motion';
import { Package, Sparkles } from 'lucide-react';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';
import ProductGrid from '../components/products/ProductGrid';
import { productData } from '../data/productData';

const ProdukKami = () => {
  const groupedProducts = productData.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <DropletAnimation>
      <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-4 sm:p-8 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
              <Package className="w-6 h-6 text-blue-600 mr-2" />
              <span className="text-blue-600 font-medium">Our Products</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent">
              Produk Nine Creativities
            </h1>
            
            <div className="flex items-center justify-center gap-2 mb-8">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <p className="text-xl text-gray-600">
                Inovasi Kreatif untuk Masa Depan yang Lebih Baik
              </p>
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 mx-auto mb-6 rounded-full"
            />
          </motion.div>

          <div className="space-y-16">
            {Object.entries(groupedProducts).map(([category, products]) => (
              <ProductGrid key={category} category={category} products={products} />
            ))}
          </div>
        </div>
      </div>
    </DropletAnimation>
  );
};

export default ProdukKami;