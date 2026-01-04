"use client";
import { motion } from "framer-motion";
import { Cpu, Terminal, Cloud, Shield } from "lucide-react";
import { portfolioData } from "@/app/portfolio-data";

const icons = [Shield, Terminal, Cloud, Cpu]; // Icons matching the 4 categories

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-center gap-4 mb-16">
    <div className="p-3 bg-cyber-primary/10 rounded-lg text-cyber-primary">
       <Cpu size={24} />
    </div>
    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
      Technical Arsenal
    </h2>
  </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioData.skills.map((skillGroup, i) => {
          const Icon = icons[i] || Shield;
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-xl hover:border-cyber-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-cyber-primary group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-cyber-primary/50 hover:text-cyber-primary transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}