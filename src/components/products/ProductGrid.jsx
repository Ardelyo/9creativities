import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Info, ShoppingBag, Image as ImageIcon } from 'lucide-react';
import VideoLink from '../VideoLink';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProductGrid = ({ category, products }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mb-16"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {category}
        </h2>
        <div className="h-1 flex-grow mx-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <Card className="group h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500">
              <CardHeader className="relative pb-0">
                <div className="absolute top-2 right-2 z-10">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {product.tag}
                  </Badge>
                </div>
                <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-t-lg flex items-center justify-center text-6xl">
                  {product.icon}
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <CardTitle className="text-xl mb-2 flex items-center gap-2">
                  {product.name}
                  <Star className="w-5 h-5 text-yellow-500" />
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {product.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="flex justify-between items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                >
                  <Info className="w-4 h-4 mr-2" />
                  Details
                </Button>
                <Link
                  to={product.link}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Explore
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {products[0]?.videos && (
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <ImageIcon className="w-6 h-6 text-blue-600" />
            Related Videos
          </h3>
          <div className="grid gap-4">
            {products[0].videos.map((video, index) => (
              <VideoLink key={index} url={video.url} title={video.title} />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProductGrid;