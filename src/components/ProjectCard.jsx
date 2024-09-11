import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div layout className="mb-8">
      <Card className="bg-white shadow-lg rounded-full overflow-hidden">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="px-6">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-full" />
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="bg-gray-100 p-4 rounded-full">
                  <h3 className="text-lg font-semibold mb-2">Project Details</h3>
                  <p className="text-gray-700">{project.details}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-full">
                  <h3 className="text-lg font-semibold mb-2">How It Works</h3>
                  <ol className="list-decimal list-inside">
                    {project.howItWorks.map((step, index) => (
                      <li key={index} className="mb-1">{step}</li>
                    ))}
                  </ol>
                </div>
                <div className="bg-gray-100 p-4 rounded-full">
                  <h3 className="text-lg font-semibold mb-2">Impact</h3>
                  <p className="text-gray-700">{project.impact}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full rounded-full flex items-center justify-center"
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