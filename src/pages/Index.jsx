import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';

const projects = [
  {
    id: 1,
    title: "Water Purifier",
    description: "An eco-friendly water purification system using natural materials.",
    image: "/placeholder.svg",
    category: "Environmental Technology"
  },
  {
    id: 2,
    title: "Sustainable Snacks",
    description: "Nutritious snacks made from locally-sourced, organic ingredients.",
    image: "/placeholder.svg",
    category: "Food Technology"
  },
  // Add more projects here
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Nine Creativities</h1>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="environmental">Environmental Tech</TabsTrigger>
            <TabsTrigger value="food">Food Tech</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="environmental">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => p.category === "Environmental Technology").map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="food">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => p.category === "Food Technology").map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;