import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import DynamicIsland from "./components/DynamicIsland";
import Index from "./pages/Index";
import About from "./pages/About";
import EnvironmentalTeam from "./pages/EnvironmentalTeam";
import FoodTeam from "./pages/FoodTeam";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-400">
          <DynamicIsland />
          <div className="container mx-auto px-4 py-8 pt-24">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/environmental-team" element={<EnvironmentalTeam />} />
                <Route path="/food-team" element={<FoodTeam />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;