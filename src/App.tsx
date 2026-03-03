import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

import Index from "./pages/index";
import About from "./pages/About";
import ATMMachines from "./pages/ATMMachines";
import NotFound from "./pages/NotFound";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="mh-atm-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>

          {/* Header */}
          <Navbar />

          {/* Pages */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/atm-machines" element={<ATMMachines />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Footer */}
          <Footer />

        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;