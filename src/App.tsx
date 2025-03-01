
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UserPersonas from "./pages/UserPersonas";
import UserJourneys from "./pages/UserJourneys";
import Wireframes from "./pages/Wireframes";
import ProjectDocumentation from "./pages/ProjectDocumentation";
import ChatbotInterface from "./components/chatbot/ChatbotInterface";
import ComparisonToolPrototype from "./components/comparison/ComparisonToolPrototype";
import FiltersPrototype from "./components/filters/FiltersPrototype";

// Create a new query client instance
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/user-personas" element={<UserPersonas />} />
          <Route path="/user-journeys" element={<UserJourneys />} />
          <Route path="/wireframes" element={<Wireframes />} />
          <Route path="/project-documentation" element={<ProjectDocumentation />} />
          <Route path="/prototype/chatbot" element={<ChatbotInterface />} />
          <Route path="/prototype/comparison" element={<ComparisonToolPrototype />} />
          <Route path="/prototype/filters" element={<FiltersPrototype />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
