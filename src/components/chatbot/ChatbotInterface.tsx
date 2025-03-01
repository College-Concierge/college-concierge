
import React, { useState, useRef, useEffect } from 'react';
import { Send, Minimize2, X, Bot, User, Loader2, Settings, Sparkles, Paperclip, Mic, Clock, File, Plus, HelpCircle } from 'lucide-react';
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  attachments?: string[];
};

const faqs = [
  "What are the top engineering colleges in India?",
  "Which universities offer scholarships for international students?",
  "How do I prepare for NEET examination?",
  "What's the admission process for IIT?",
  "Tell me about MBA programs with good placement records",
  "Compare IIT Delhi and IIT Bombay",
  "What are the best colleges for medical studies?",
  "How to get admission in Delhi University?"
];

const initialMessages: Message[] = [
  {
    id: '1',
    content: "Hi there! I'm your College Concierge AI assistant. How can I help you find the perfect university or course today?",
    sender: 'bot',
    timestamp: new Date(),
  },
];

const suggestedPrompts = [
  "Find universities with strong computer science programs",
  "Compare top engineering colleges",
  "Show me universities with low tuition fees",
  "What entrance exams do I need for medical colleges?"
];

interface ChatbotInterfaceProps {
  initialOpen?: boolean;
}

const ChatbotInterface: React.FC<ChatbotInterfaceProps> = ({ initialOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
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
  const [isFirstMessageSent, setIsFirstMessageSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Auto-focus on input when chat is opened
    if (isOpen && !isMinimized && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen, isMinimized]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim() && uploadedFiles.length === 0) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
      attachments: uploadedFiles.length > 0 ? [...uploadedFiles] : undefined
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setUploadedFiles([]);
    setIsTyping(true);
    
    // Update first message flag
    if (!isFirstMessageSent) {
      setIsFirstMessageSent(true);
      
      // Show a toast only on first message
      toast.success("AI assistant is responding", {
        description: "Connecting to our knowledge base of universities",
        duration: 2000
      });
    }
    
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
    
    // Auto switch to chat tab and focus input
    setActiveTab('chat');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const clearChat = () => {
    setMessages(initialMessages);
    setIsFirstMessageSent(false);
    toast.success("Chat history cleared");
  };

  const startNewChat = () => {
    // Archive current chat if it has messages beyond the initial one
    if (messages.length > 1) {
      const newHistory = [
        {
          title: `Chat ${new Date().toLocaleDateString()}`,
          preview: messages[messages.length - 2].content.substring(0, 30) + "...",
          date: "Just now"
        },
        ...conversationHistory
      ];
      setConversationHistory(newHistory);
    }
    
    clearChat();
  };

  const usePrompt = (prompt: string) => {
    setInputValue(prompt);
    
    // Auto submit if in chat tab
    if (activeTab === 'chat') {
      setTimeout(() => {
        const form = document.querySelector('form');
        if (form) {
          const submitEvent = new Event('submit', { cancelable: true });
          form.dispatchEvent(submitEvent);
        }
      }, 100);
    }
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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={toggleChatbot}
                className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
                aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
              >
                <Bot className="h-6 w-6" />
                {!isOpen && !isFirstMessageSent && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>{isOpen ? "Close chat" : "Ask College Concierge AI"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
                      <DropdownMenuItem onClick={startNewChat}>
                        Start new chat
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
                        {messages.length === 1 && !isTyping && (
                          <div className="mb-6 bg-muted/30 rounded-lg p-4">
                            <h4 className="text-sm font-medium mb-2 flex items-center">
                              <HelpCircle className="h-4 w-4 mr-1 text-primary" />
                              Quick Start
                            </h4>
                            <div className="grid grid-cols-1 gap-2">
                              {suggestedPrompts.map((prompt, index) => (
                                <Button 
                                  key={index} 
                                  variant="outline" 
                                  size="sm" 
                                  className="justify-start h-auto py-2 px-3 text-left text-xs"
                                  onClick={() => usePrompt(prompt)}
                                >
                                  {prompt}
                                </Button>
                              ))}
                            </div>
                          </div>
                        )}
                        
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
                                    <Bot className="h-4 w-4 mr-1 mt-0.5 shrink-0" />
                                  )}
                                  {message.sender === 'user' && (
                                    <User className="h-4 w-4 mr-1 mt-0.5 shrink-0" />
                                  )}
                                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                </div>
                                
                                {message.attachments && message.attachments.length > 0 && (
                                  <div className="mt-2 mb-2 flex flex-wrap gap-2">
                                    {message.attachments.map((file, index) => (
                                      <div key={index} className="flex items-center bg-background/80 rounded-full px-3 py-1 text-xs">
                                        <File className="h-3 w-3 mr-1" />
                                        <span className="max-w-[120px] truncate">{file}</span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                                
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
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button type="button" size="icon" variant="outline" onClick={handleFileUpload}>
                                    <Paperclip className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                  <p>Attach files</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
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
                            ref={inputRef}
                          />
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button type="submit" size="icon" disabled={!inputValue.trim() && uploadedFiles.length === 0}>
                                  <Send className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent side="top">
                                <p>Send message</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </form>
                      </CardFooter>
                    </TabsContent>
                    
                    <TabsContent value="history" className="flex-grow p-0 m-0 overflow-y-auto">
                      <div className="p-4 space-y-3">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-sm font-medium">Previous Conversations</h4>
                          <Button variant="ghost" size="sm" onClick={startNewChat} className="h-8 text-xs">
                            <Plus className="h-3 w-3 mr-1" /> New Chat
                          </Button>
                        </div>
                        
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
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="mt-4" 
                              onClick={() => setActiveTab('chat')}
                            >
                              Start a new conversation
                            </Button>
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
                            <Sparkles className="h-4 w-4 mr-2 text-primary shrink-0" />
                            <p className="text-sm">{faq}</p>
                          </div>
                        ))}
                        
                        <div className="my-6 pt-4 border-t">
                          <h4 className="text-sm font-medium mb-3 flex items-center">
                            <HelpCircle className="h-4 w-4 mr-1 text-primary" />
                            Need More Help?
                          </h4>
                          <p className="text-xs text-muted-foreground mb-4">
                            Can't find what you're looking for? Ask our AI assistant any question about 
                            universities, courses, admissions, or career guidance.
                          </p>
                          <Button 
                            variant="default" 
                            size="sm" 
                            className="w-full" 
                            onClick={() => setActiveTab('chat')}
                          >
                            Ask a Custom Question
                          </Button>
                        </div>
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
