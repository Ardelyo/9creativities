import { HomeIcon, InfoIcon, FolderIcon, Droplet, Utensils, Bot } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import EnvironmentalTeam from "./pages/EnvironmentalTeam.jsx";
import FoodTeam from "./pages/FoodTeam.jsx";
import Cica from "./pages/Cica.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Environmental Team",
    to: "/environmental-team",
    icon: <Droplet className="h-4 w-4" />,
    page: <EnvironmentalTeam />,
  },
  {
    title: "Food Team",
    to: "/food-team",
    icon: <Utensils className="h-4 w-4" />,
    page: <FoodTeam />,
  },
  {
    title: "Cica",
    to: "/cica",
    icon: <Bot className="h-4 w-4" />,
    page: <Cica />,
  },
];