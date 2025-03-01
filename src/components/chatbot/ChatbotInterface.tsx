
import React, { useState, useRef, useEffect } from 'react';
import { Send, Minimize2, X, Bot, User, Loader2, Settings, Sparkles, Paperclip, Mic, Clock, File } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from 'sonner';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const faqs = [
  "What are the top engineering colleges in India?",
  "Which universities offer scholarships for international students?",
  "How do I prepare for NEET examination?",
  "What's the admission process for IIT?",
  "Tell me about MBA programs with good placement records"
];

const initialMessages: Message[] = [
  {
    id: '1',
    content: "Hi there! I'm your College Concierge AI assistant. How can I help you find the perfect university or course today?",
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
  const [activeTab, setActiveTab] = useState('chat');
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [conversationHistory, setConversationHistory] = useState<{title: string, preview: string, date: string}[]>([
    { title: "University Selection Help", preview: "Discussing IIT admission criteria", date: "2 days ago" },
    { title: "Scholarship Information", preview: "Exploring merit-based options", date: "1 week ago" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Auto-open the chatbot after 3 seconds for demo purposes
    const timer = setTimeout(() => {
      if (!isOpen) setIsOpen(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim() && uploadedFiles.length === 0) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: uploadedFiles.length > 0 
        ? `${inputValue} ${uploadedFiles.map(file => `[Attached: ${file}]`).join(' ')}`
        : inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setUploadedFiles([]);
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "Based on your interests, I'd recommend checking out IIT Delhi which has strong engineering programs. Their B.Tech in Computer Science is particularly well-regarded with excellent placement records.",
        "The application deadline for most universities is coming up in January. Would you like me to remind you of important dates for specific programs you're interested in?",
        "For computer science, some of the top-ranked universities in India include IIT Bombay, IIT Delhi, and IISc Bangalore. Each has unique strengths - IIT focuses more on engineering aspects while IISc has more research opportunities.",
        "The average tuition fee for private engineering colleges ranges from ₹1.5 to 4 lakhs per year. Would you like to see more affordable options with good rankings?",
        "Looking at your profile and interests, you might be eligible for merit scholarships at several universities. Delhi University and BITS Pilani have excellent scholarship programs for students with your academic background.",
        "For medical studies, AIIMS Delhi is ranked #1, followed by CMC Vellore and JIPMER. The competition is intense, with approximately 800,000 students competing for about 50,000 seats nationwide.",
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

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileNames = Array.from(e.target.files).map(file => file.name);
      setUploadedFiles(fileNames);
      toast.success(`Uploaded ${fileNames.length} file(s)`);
    }
  };

  const useFaq = (question: string) => {
    setInputValue(question);
  };

  const clearChat = () => {
    setMessages(initialMessages);
    toast.success("Chat history cleared");
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
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-7 w-7 text-primary-foreground opacity-70 hover:opacity-100 hover:bg-primary-foreground/20"
                      >
                        <Settings className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={clearChat}>
                        Clear conversation
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Download chat
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Chatbot settings
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-grow flex flex-col">
                    <TabsList className="grid grid-cols-3 bg-muted/50">
                      <TabsTrigger value="chat">Chat</TabsTrigger>
                      <TabsTrigger value="history">History</TabsTrigger>
                      <TabsTrigger value="faq">FAQs</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="chat" className="flex-grow flex flex-col p-0 m-0">
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
                                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
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
                      
                      {uploadedFiles.length > 0 && (
                        <div className="px-4 py-2 bg-muted/30 border-t border-border flex flex-wrap gap-2">
                          {uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center bg-background rounded-full px-3 py-1 text-xs">
                              <File className="h-3 w-3 mr-1" />
                              <span className="max-w-[100px] truncate">{file}</span>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-4 w-4 ml-1 p-0"
                                onClick={() => setUploadedFiles(files => files.filter((_, i) => i !== index))}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <CardFooter className="p-4 border-t">
                        <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
                          <div className="flex space-x-2">
                            <Button type="button" size="icon" variant="outline" onClick={handleFileUpload}>
                              <Paperclip className="h-4 w-4" />
                            </Button>
                            <input 
                              type="file" 
                              ref={fileInputRef} 
                              className="hidden" 
                              onChange={onFileChange} 
                              multiple
                            />
                          </div>
                          <Input
                            placeholder="Type your message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="flex-grow"
                          />
                          <Button type="submit" size="icon" disabled={!inputValue.trim() && uploadedFiles.length === 0}>
                            <Send className="h-4 w-4" />
                          </Button>
                        </form>
                      </CardFooter>
                    </TabsContent>
                    
                    <TabsContent value="history" className="flex-grow p-0 m-0 overflow-y-auto">
                      <div className="p-4 space-y-3">
                        {conversationHistory.length > 0 ? (
                          conversationHistory.map((item, index) => (
                            <div key={index} className="border border-border rounded-lg p-3 hover:bg-muted/50 cursor-pointer">
                              <div className="flex justify-between items-start mb-1">
                                <h4 className="font-medium text-sm">{item.title}</h4>
                                <span className="text-xs text-muted-foreground flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {item.date}
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground truncate">{item.preview}</p>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-8">
                            <p className="text-muted-foreground text-sm">No conversation history yet</p>
                          </div>
                        )}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="faq" className="flex-grow p-0 m-0 overflow-y-auto">
                      <div className="p-4 space-y-3">
                        <p className="text-sm text-muted-foreground mb-4">Popular questions students ask:</p>
                        {faqs.map((faq, index) => (
                          <div 
                            key={index} 
                            className="border border-border rounded-lg p-3 hover:bg-muted/50 cursor-pointer flex items-center"
                            onClick={() => useFaq(faq)}
                          >
                            <Sparkles className="h-4 w-4 mr-2 text-primary" />
                            <p className="text-sm">{faq}</p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
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
