import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Class 9C</div>
        <nav>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Projects</Button>
          <Button variant="ghost">Contact</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;