
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Premium from "./pages/Premium";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import Telegram from "./pages/Telegram";
import PremiumService from "./pages/PremiumService";
import Predictions from "./pages/Predictions";
import Install from "./pages/Install";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminLogin from "./pages/admin/Login";
import AdminSettings from "./pages/admin/Settings";
import AdminContent from "./pages/admin/Content";
import AdminSEO from "./pages/admin/SEO";
import AdminPredictions from "./pages/admin/Predictions";
import { useEffect, useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => {
  const [isInstalled, setIsInstalled] = useState(true);

  useEffect(() => {
    // Check if database is configured
    const dbConfigured = localStorage.getItem('dbConfigured');
    setIsInstalled(dbConfigured === 'true');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* If not installed, redirect to install page except for the install route */}
            {!isInstalled ? (
              <>
                <Route path="/install" element={<Install />} />
                <Route path="*" element={<Navigate to="/install" />} />
              </>
            ) : (
              <>
                {/* Public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/premium" element={<Premium />} />
                <Route path="/info" element={<Info />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/telegram" element={<Telegram />} />
                <Route path="/premium-service" element={<PremiumService />} />
                <Route path="/predictions" element={<Predictions />} />
                <Route path="/install" element={<Install />} />

                {/* Admin routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/settings" element={<AdminSettings />} />
                <Route path="/admin/content" element={<AdminContent />} />
                <Route path="/admin/seo" element={<AdminSEO />} />
                <Route path="/admin/predictions" element={<AdminPredictions />} />

                {/* Keep the catch-all route at the end */}
                <Route path="*" element={<NotFound />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
