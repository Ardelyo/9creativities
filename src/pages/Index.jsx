import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Utensils } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Water Filter",
    description: "An eco-friendly water purification system using natural materials.",
    icon: <Droplet className="h-12 w-12" />,
    category: "Environmental Technology"
  },
  {
    id: 2,
    title: "Yoghurt Production",
    description: "A sustainable process for creating nutritious, probiotic-rich yoghurt.",
    icon: <Utensils className="h-12 w-12" />,
    category: "Food Technology"
  }
];

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nine Creativities
        </motion.h1>
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
        >
          {projects.map(project => (
            <motion.div
              key={project.id}
              className="bubble w-40 h-40 cursor-pointer flex flex-col items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedProject(project)}
            >
              {project.icon}
              <span className="mt-2 text-center">{project.title}</span>
            </motion.div>
          ))}
        </motion.div>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gray-800 text-white">
              <CardHeader>
                <CardTitle>{selectedProject.title}</CardTitle>
                <CardDescription>{selectedProject.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{selectedProject.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Index;