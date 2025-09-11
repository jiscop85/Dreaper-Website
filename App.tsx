import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Orders from "./pages/Orders";
import CategoryPage from "./pages/CategoryPage";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import QualityAssurance from "./pages/QualityAssurance";
import CustomerSatisfaction from "./pages/CustomerSatisfaction";
import Support from "./pages/Support";
import SecurePayment from "./pages/SecurePayment";
import FreeShipping from "./pages/FreeShipping";
import MoneyBackGuarantee from "./pages/MoneyBackGuarantee";
import Favorites from "./pages/Favorites";
import AllProducts from "./pages/AllProducts";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>


















