import React from 'react';
import { motion } from 'framer-motion';

const ProjectBubble = ({ project, onClick }) => {
  return (
    <motion.div
      className="bubble w-24 h-24 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(project)}
    >
      <img src={project.icon} alt={project.title} className="w-12 h-12" />
    </motion.div>
  );
};

export default ProjectBubble;