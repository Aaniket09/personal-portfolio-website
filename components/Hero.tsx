"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, ChevronDown } from "lucide-react";
import { portfolioData } from "@/app/portfolio-data";

export default function Hero() {
  const [text, setText] = useState("");
  
  const fullText = portfolioData.title;

  useEffect(() => {
    let i = 0;
    setText(""); // Reset text when page loads

    const typingInterval = setInterval(() => {
      i++;
      setText(fullText.slice(0, i));

      if (i >= fullText.length) {
        clearInterval(typingInterval);
      }
    }, 50); // Speed: 50ms

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-cyber-dark transition-colors duration-300"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#f8fafc_100%)] dark:bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0f16_100%)] pointer-events-none transition-colors duration-300" />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Availability Badge */}
          <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-cyber-primary border border-cyber-primary/30 rounded-full bg-cyber-primary/10">
            {portfolioData.hero.availability}
          </span>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight uppercase text-slate-900 dark:text-slate-100">
             {portfolioData.firstName} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary">{portfolioData.lastName}</span>
          </h1>

          {/* TYPEWRITER TITLE */}
          <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-mono mb-8 h-8 flex justify-center items-center gap-1">
            {text}
            <motion.span 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="text-cyber-primary"
            >
              _
            </motion.span>
          </h2>

          {/* Summary */}
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            {portfolioData.hero.summary}
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href={portfolioData.resumeUrl} className="group relative px-6 py-3 font-mono font-bold text-cyber-dark bg-cyber-primary hover:bg-cyan-400 transition-all rounded-sm flex items-center gap-2 shadow-lg shadow-cyber-primary/20">
              <FileText size={18} />
              Download Resume
            </a>
            <a href="#projects" className="px-6 py-3 font-mono text-cyber-primary border border-cyber-primary hover:bg-cyber-primary/10 transition-all rounded-sm">
              View Projects
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600"
      >
        <ChevronDown />
      </motion.div>
    </section>
  );
}