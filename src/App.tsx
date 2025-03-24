
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UserPersonas from "./pages/UserPersonas";
import UserJourneys from "./pages/UserJourneys";
import Wireframes from "./pages/Wireframes";
import ProjectDocumentation from "./pages/ProjectDocumentation";
import ChatbotDemo from "./pages/ChatbotDemo";
import ComparisonToolPrototype from "./components/comparison/ComparisonToolPrototype";
import FiltersPrototype from "./components/filters/FiltersPrototype";
import UniversityDetail from "./pages/UniversityDetail";
import RecommendationEngine from "./pages/RecommendationEngine";
import { AuthProvider } from "./context/AuthContext";

// Create a new query client instance
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/university/:id" element={<UniversityDetail />} />
              <Route path="/recommendations" element={<RecommendationEngine />} />
              <Route path="/user-personas" element={<UserPersonas />} />
              <Route path="/user-journeys" element={<UserJourneys />} />
              <Route path="/wireframes" element={<Wireframes />} />
              <Route path="/project-documentation" element={<ProjectDocumentation />} />
              <Route path="/prototype/chatbot" element={<ChatbotDemo />} />
              <Route path="/prototype/comparison" element={<ComparisonToolPrototype />} />
              <Route path="/prototype/filters" element={<FiltersPrototype />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
