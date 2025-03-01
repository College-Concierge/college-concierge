
import React, { useState, useRef, useEffect } from 'react';
import { Send, Minimize2, X, Bot, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: '1',
    content: 'Hi there! I\'m your College Concierge AI assistant. How can I help you find the perfect university or course today?',
    sender: 'bot',
    timestamp: new Date(),
  },
];

const ChatbotInterface = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "Based on your interests, I'd recommend checking out IIT Delhi which has strong engineering programs.",
        "The application deadline for most universities is coming up in January. Would you like me to remind you of important dates?",
        "For computer science, some of the top-ranked universities in India include IIT Bombay, IIT Delhi, and IISc Bangalore.",
        "The average tuition fee for private engineering colleges ranges from ₹1.5 to 4 lakhs per year. Would you like to see more affordable options?",
        "Looking at your profile, you might be eligible for merit scholarships at several universities. Would you like me to check which ones?",
      ];
      
      const botMessage: Message = {
        id: Date.now().toString(),
        content: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
    setIsMinimized(false);
  };

  const minimizeChatbot = () => {
    setIsMinimized((prev) => !prev);
  };

  return (
    <>
      {/* Chatbot Button */}
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={toggleChatbot}
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
          aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
        >
          <Bot className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chatbot Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 z-40 w-full sm:w-96 shadow-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              height: isMinimized ? 'auto' : 'calc(100vh - 8rem)',
              maxHeight: isMinimized ? 'auto' : '600px',
            }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full flex flex-col overflow-hidden border-primary/20">
              <CardHeader className="p-4 flex flex-row items-center justify-between bg-primary text-primary-foreground">
                <div className="flex items-center">
                  <Bot className="h-5 w-5 mr-2" />
                  <h3 className="font-medium">College Concierge AI</h3>
                </div>
                <div className="flex space-x-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-7 w-7 text-primary-foreground opacity-70 hover:opacity-100 hover:bg-primary-foreground/20"
                    onClick={minimizeChatbot}
                  >
                    <Minimize2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-7 w-7 text-primary-foreground opacity-70 hover:opacity-100 hover:bg-primary-foreground/20"
                    onClick={toggleChatbot}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              
              {!isMinimized && (
                <>
                  <CardContent className="flex-grow p-4 overflow-y-auto">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.sender === 'user' ? 'justify-end' : 'justify-start'
                          }`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg p-3 ${
                              message.sender === 'user'
                                ? 'bg-accent text-accent-foreground'
                                : 'bg-muted'
                            }`}
                          >
                            <div className="flex items-start mb-1">
                              {message.sender === 'bot' && (
                                <Bot className="h-4 w-4 mr-1 mt-0.5" />
                              )}
                              {message.sender === 'user' && (
                                <User className="h-4 w-4 mr-1 mt-0.5" />
                              )}
                              <p className="text-sm">{message.content}</p>
                            </div>
                            <p className="text-xs opacity-70 text-right">
                              {message.timestamp.toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </p>
                          </div>
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="max-w-[80%] rounded-lg p-3 bg-muted">
                            <div className="flex items-center space-x-2">
                              <Loader2 className="h-4 w-4 animate-spin" />
                              <p className="text-sm">College Concierge is typing...</p>
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-4 border-t">
                    <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
                      <Input
                        placeholder="Type your message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="flex-grow"
                      />
                      <Button type="submit" size="icon" disabled={!inputValue.trim()}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </CardFooter>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotInterface;
