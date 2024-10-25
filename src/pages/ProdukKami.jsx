import React from 'react';
import BackgroundArt from '../components/BackgroundArt';
import DropletAnimation from '../components/DropletAnimation';
import VideoLink from '../components/VideoLink';
import ProductHeader from '../components/products/ProductHeader';
import PresentationSection from '../components/products/PresentationSection';
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
      <div className="min-h-screen bg-white p-4 sm:p-8 relative overflow-hidden">
        <BackgroundArt />
        <div className="max-w-6xl mx-auto relative z-10">
          <ProductHeader />
          <PresentationSection />
          
          {Object.entries(groupedProducts).map(([category, products]) => (
            <ProductGrid key={category} category={category} products={products} />
          ))}
        </div>
      </div>
    </DropletAnimation>
  );
};

export default ProdukKami;