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
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/category/:categorySlug" element={<CategoryPage />} />
            <Route path="/quality-assurance" element={<QualityAssurance />} />
            <Route path="/customer-satisfaction" element={<CustomerSatisfaction />} />
            <Route path="/support" element={<Support />} />
            <Route path="/secure-payment" element={<SecurePayment />} />
            <Route path="/free-shipping" element={<FreeShipping />} />
            <Route path="/money-back-guarantee" element={<MoneyBackGuarantee />} />
            <Route path="*" element={<NotFound />} />
          </Routes>



































