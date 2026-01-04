import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Community from "@/components/Community";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import TerminalBot from "@/components/TerminalBot";
import ScrollToTop from "@/components/ScrollToTop";
import { Github, Linkedin, Notebook } from "lucide-react";
import { portfolioData } from "@/app/portfolio-data"; 

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Certifications />
      <Skills />
      <Projects />
      <Timeline />
      <Community />
      <Blog />
      <Contact />
      
      <footer className="py-8 text-center border-t border-white/5 text-slate-500 text-sm">
        <div className="flex justify-center gap-6 mb-4">
          <a href={portfolioData.socials.github} target="_blank" className="hover:text-cyber-primary transition-colors"><Github size={20} /></a>
          <a href={portfolioData.socials.linkedin} target="_blank" className="hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
          <a href={portfolioData.socials.medium} target="_blank" className="hover:text-white transition-colors"><Notebook size={20} /></a>
        </div>
        <p className="font-mono">© {new Date().getFullYear()} {portfolioData.firstName} {portfolioData.lastName}. All rights reserved.</p>
      </footer>

      <TerminalBot />
      <ScrollToTop />
    </main>
  );
}