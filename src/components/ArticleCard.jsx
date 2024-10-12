import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Tag } from 'lucide-react';
import { Card } from "@/components/ui/card";
import ArticleContent from './ArticleContent';

const ArticleCard = ({ article, isExpanded, onToggleExpand }) => (
  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <motion.img 
      src={article.image} 
      alt={article.title} 
      className="w-full h-64 object-cover"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
    <div className="p-6">
      <motion.h2 
        className="text-3xl font-bold mb-2 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {article.title}
      </motion.h2>
      <motion.div 
        className="flex items-center text-sm text-gray-600 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <BookOpen className="w-4 h-4 mr-1" />
        <span className="mr-4">oleh: {article.author}</span>
        <Clock className="w-4 h-4 mr-1" />
        <span>{article.readTime}</span>
      </motion.div>
      <motion.div 
        className="flex flex-wrap gap-2 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {article.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center">
            <Tag className="w-3 h-3 mr-1" />
            {tag}
          </span>
        ))}
      </motion.div>
      <ArticleContent 
        content={article.content} 
        isExpanded={isExpanded} 
        onToggleExpand={onToggleExpand}
      />
    </div>
  </Card>
);

export default ArticleCard;