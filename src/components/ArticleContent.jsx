import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ExternalLink, Lightbulb } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const FunFact = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="bg-yellow-100 p-4 rounded-lg my-4 shadow-md"
  >
    <h4 className="flex items-center text-lg font-bold text-yellow-800 mb-2">
      <Lightbulb className="mr-2" />
      Fun Fact
    </h4>
    <p className="text-yellow-700">{children}</p>
  </motion.div>
);

const ArticleContent = ({ content, isExpanded, onToggleExpand }) => (
  <AnimatePresence>
    {isExpanded ? (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="prose max-w-none"
      >
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mt-5 mb-3" {...props} />,
            h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />,
            p: ({ node, ...props }) => <p className="mb-4" {...props} />,
            ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-4" {...props} />,
            ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-4" {...props} />,
            li: ({ node, ...props }) => <li className="mb-1" {...props} />,
            blockquote: ({ node, ...props }) => (
              <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a className="text-blue-600 hover:underline flex items-center" {...props}>
                {props.children}
                <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            ),
            p: ({ node, children, ...props }) => {
              if (children && typeof children === 'string' && children.startsWith('🌟 **Fun Fact**:')) {
                return <FunFact>{children.replace('🌟 **Fun Fact**:', '')}</FunFact>;
              }
              return <p className="mb-4" {...props}>{children}</p>;
            },
          }}
        >
          {content}
        </ReactMarkdown>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggleExpand}
          className="flex items-center text-blue-600 hover:text-blue-800 mt-4"
        >
          Tutup artikel <ChevronUp className="ml-1" />
        </motion.button>
      </motion.div>
    ) : (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-gray-700 mb-4">{content.split('\n\n')[0]}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggleExpand}
          className="flex items-center text-blue-600 hover:text-blue-800 mt-4"
        >
          Baca selengkapnya <ChevronDown className="ml-1" />
        </motion.button>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ArticleContent;