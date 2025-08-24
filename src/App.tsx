import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import FeaturesPage from "./pages/Features";
import PricingPage from "./pages/Pricing";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SigninPage from "./pages/SingIn";
import  StartFreeTrialPage from "./pages/StartFreeTrial";
import SignUpPage from "./pages/SingUp";
import TermsPage from "./pages/Terms";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/start-free-trial" element={<StartFreeTrialPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
