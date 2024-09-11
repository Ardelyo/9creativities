import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DynamicIsland from "./components/DynamicIsland";
import Index from "./pages/Index";
import About from "./pages/About";
import EnvironmentalProjects from "./pages/EnvironmentalProjects";
import FoodProjects from "./pages/FoodProjects";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-green-200 to-blue-200">
          <DynamicIsland />
          <div className="container mx-auto px-4 py-8 pt-24">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/environmental-projects" element={<EnvironmentalProjects />} />
              <Route path="/food-projects" element={<FoodProjects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;