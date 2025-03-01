
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import CustomNavbar from "@/components/CustomNavbar";
import ChatbotInterface from "@/components/chatbot/ChatbotInterface";

const ChatbotDemo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomNavbar />
      <main className="container mx-auto py-12 px-4 flex-grow">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link to="/" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">AI Chatbot Prototype</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience our AI-powered chatbot designed to help students find the perfect college and course.
            Click the chatbot icon in the bottom right to start a conversation.
          </p>
        </div>
        
        <div className="bg-muted/30 rounded-lg p-12 text-center max-w-3xl mx-auto">
          <h3 className="text-lg font-medium mb-2">Interactive Demo</h3>
          <p className="text-muted-foreground mb-8">
            Click the chatbot button in the bottom-right corner to start a conversation.
            You can ask questions about universities, courses, admission criteria, and more.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-md mx-auto">
            <div className="bg-background rounded-lg p-4 border">
              <h4 className="font-medium text-sm mb-2">Try asking about:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Top engineering colleges in India</li>
                <li>• Scholarship opportunities</li>
                <li>• Admission requirements</li>
                <li>• Course recommendations</li>
              </ul>
            </div>
            
            <div className="bg-background rounded-lg p-4 border">
              <h4 className="font-medium text-sm mb-2">Features:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Natural language understanding</li>
                <li>• Personalized recommendations</li>
                <li>• File uploads</li>
                <li>• Conversation history</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <ChatbotInterface />
    </div>
  );
};

export default ChatbotDemo;
