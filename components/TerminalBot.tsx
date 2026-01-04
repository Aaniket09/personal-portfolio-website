"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Minus, ChevronRight } from "lucide-react";

interface Message {
  type: "user" | "bot";
  text: string;
}

export default function TerminalBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { type: "bot", text: "System Online: Welcome to Aniket_SecOps_Bot. Type 'help' to initialize." }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userCmd = input.trim().toLowerCase();
    
    // Add User Message
    const newMessages: Message[] = [...messages, { type: "user", text: input }];

    // Bot Logic
    let botResponse = "";
    switch (userCmd) {
      case "help":
        botResponse = "Available commands: whoami, skills, contact, projects, clear, exit";
        break;
      case "whoami":
        botResponse = "User: Aniket Agarwal. Role: SOC Analyst. Status: Ready to hire.";
        break;
      case "skills":
        botResponse = "Arsenal: Splunk, Azure Sentinel, Python, Wireshark, CrowdStrike.";
        break;
      case "contact":
        botResponse = "Email: aniketagarwal57@gmail.com | LinkedIn: /in/aniket-agarwal";
        break;
      case "projects":
        botResponse = "Loading top project... 'AI SOC Agent' (Automated Threat Hunting). Check the Projects section for more.";
        break;
      case "clear":
        setMessages([{ type: "bot", text: "Console cleared." }]);
        setInput("");
        return;
      case "exit":
        setIsOpen(false);
        botResponse = "Session terminated.";
        break;
      case "sudo":
        botResponse = "Nice try. You do not have root access to this portfolio.";
        break;
      default:
        botResponse = `Command not found: ${userCmd}. Type 'help' for list.`;
    }

    setMessages([...newMessages, { type: "bot", text: botResponse }]);
    setInput("");
  };

  return (
    <>
      {/* 1. FLOATING TOGGLE BUTTON */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => {
            setIsOpen(true);
            setMessages([{ type: "bot", text: "System Online: Welcome to Aniket_SecOps_Bot. Type 'help' to initialize." }]);
          }}
          className="group fixed bottom-24 right-4 md:right-8 z-50 p-4 rounded-full bg-white dark:bg-[#0f141e] border border-slate-200 dark:border-cyber-primary/50 text-slate-700 dark:text-cyber-primary shadow-lg dark:shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:scale-110 transition-transform"
        >
          <Terminal size={24} />
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-slate-800 text-white text-xs font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-700">
            Initialize Terminal
          </span>
        </motion.button>
      )}

      {/* 2. TERMINAL WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-4 md:right-8 z-50 w-[calc(100vw-2rem)] md:w-96 h-[350px] md:h-[400px] bg-white/95 dark:bg-[#0d1117]/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-lg shadow-2xl flex flex-col font-mono text-sm overflow-hidden"
          >
            {/* Window Header */}
            <div className="bg-slate-100 dark:bg-slate-800/50 p-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs">
                <Terminal size={12} />
                <span>guest@aniket-terminal:~</span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-red-500"><Minus size={14}/></button>
                <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-red-500"><X size={14}/></button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
              {messages.map((msg, i) => (
                <div key={i} className={`${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block px-3 py-2 rounded-lg text-sm ${
                    msg.type === 'user' 
                      ? 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200' 
                      : 'bg-slate-100 dark:bg-cyber-primary/10 text-slate-700 dark:text-cyber-primary border border-slate-200 dark:border-cyber-primary/20'
                  }`}>
                    {msg.type === 'bot' && <span className="font-bold mr-2 text-xs opacity-50">{`>_`}</span>}
                    {msg.text}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleCommand} className="p-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <ChevronRight size={16} className="text-slate-400 dark:text-green-500 animate-pulse" />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type 'help'..."
                className="flex-1 bg-transparent focus:outline-none text-slate-800 dark:text-green-400 placeholder-slate-400 dark:placeholder-slate-600"
                autoFocus
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}