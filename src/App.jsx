import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import DynamicIsland from "./components/DynamicIsland";
import Index from "./pages/Index";
import OurClass from "./pages/OurClass";
import EnvironmentalTeam from "./pages/EnvironmentalTeam";
import FoodTeam from "./pages/FoodTeam";
import InformationTechnology from "./pages/InformationTechnology";
import CommunicationTechnology from "./pages/CommunicationTechnology";
import RobotC from "./pages/RobotC";
import ProdukKami from "./pages/ProdukKami";
import CarbonCalculator from "./pages/CarbonCalculator";
import CihuyQuiz from "./pages/CihuyQuiz";
import Tempe from "./pages/Tempe";
import Yoghurt from "./pages/Yoghurt";
import Tape from "./pages/Tape";
import FilterAir from "./pages/FilterAir";
import Artikel from "./pages/Artikel";
import Dokumentasi from "./pages/Dokumentasi";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <DynamicIsland />
          <div className="container mx-auto px-4 py-8 pt-24">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/our-class" element={<OurClass />} />
                <Route path="/environmental-team" element={<EnvironmentalTeam />} />
                <Route path="/food-team" element={<FoodTeam />} />
                <Route path="/information-technology" element={<InformationTechnology />} />
                <Route path="/communication-technology" element={<CommunicationTechnology />} />
                <Route path="/robot-c" element={<RobotC />} />
                <Route path="/produk-kami" element={<ProdukKami />} />
                <Route path="/carbon-calculator" element={<CarbonCalculator />} />
                <Route path="/cihuy-quiz" element={<CihuyQuiz />} />
                <Route path="/tempe" element={<Tempe />} />
                <Route path="/yoghurt" element={<Yoghurt />} />
                <Route path="/tape" element={<Tape />} />
                <Route path="/filter-air" element={<FilterAir />} />
                <Route path="/artikel" element={<Artikel />} />
                <Route path="/dokumentasi" element={<Dokumentasi />} />
              </Routes>
            </AnimatePresence>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;