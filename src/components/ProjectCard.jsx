import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectCard = ({ project }) => {
  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-md" />
        <p>{project.description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Learn More</Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;