import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Nine Creativities</Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/"><Button variant="ghost">Home</Button></Link>
          <Link to="/about"><Button variant="ghost">About</Button></Link>
          <Link to="/projects"><Button variant="ghost">Projects</Button></Link>
          <Link to="/contact"><Button variant="ghost">Contact</Button></Link>
        </nav>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;