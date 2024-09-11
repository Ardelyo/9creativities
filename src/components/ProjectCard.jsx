import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Droplet, Cpu, Wifi, Zap } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIcon = (type) => {
    switch (type) {
      case 'water': return <Droplet className="w-6 h-6" />;
      case 'tech': return <Cpu className="w-6 h-6" />;
      case 'network': return <Wifi className="w-6 h-6" />;
      case 'energy': return <Zap className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <motion.div layout className="mb-8">
      <Card className="bg-navy-blue text-white shadow-lg rounded-3xl overflow-hidden">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold flex items-center justify-center">
            {getIcon(project.type)}
            <span className="ml-2">{project.title}</span>
          </CardTitle>
          <CardDescription className="text-gray-300">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="px-6">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-2xl" />
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="bg-white text-navy-blue p-4 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-2">Project Details</h3>
                  <p>{project.details}</p>
                </div>
                <div className="bg-white text-navy-blue p-4 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-2">How It Works</h3>
                  <ol className="list-decimal list-inside">
                    {project.howItWorks.map((step, index) => (
                      <li key={index} className="mb-1">{step}</li>
                    ))}
                  </ol>
                </div>
                <div className="bg-white text-navy-blue p-4 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-2">Impact</h3>
                  <p>{project.impact}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full rounded-full flex items-center justify-center bg-white text-navy-blue hover:bg-gray-200"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                <span className="mr-2">Less Info</span>
                <ChevronUp size={20} />
              </>
            ) : (
              <>
                <span className="mr-2">More Info</span>
                <ChevronDown size={20} />
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;