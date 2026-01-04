"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, History } from "lucide-react";
import { portfolioData } from "@/app/portfolio-data";

export default function Timeline() {
  const [selected, setSelected] = useState<typeof portfolioData.experience[0] | null>(null);

  return (
    <section id="timeline" className="py-20 px-6 relative max-w-6xl mx-auto">
      <div className="flex items-center justify-center gap-4 mb-16">
    <div className="p-3 bg-cyber-primary/10 rounded-lg text-cyber-primary">
       <History size={24} />
    </div>
    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
      Education & Experience
    </h2>
  </div>
      
      <div className="relative">
        {/* THE CENTRAL SPINE (Fixed Visibility) */}
        {/* We use 'absolute left-4 md:left-1/2' to pin it center on desktop, left on mobile */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-white/10 -translate-x-1/2 md:translate-x-0" />

        <div className="space-y-12">
          {portfolioData.experience.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                // FLEX CONTAINER: Handles the Zig-Zag layout
                className={`relative flex items-center md:justify-between ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* TIMELINE DOT (Always on the spine) */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-100 dark:bg-cyber-dark border-2 border-cyber-primary z-10 shadow-[0_0_10px_rgba(0,242,234,0.3)]" />

                {/* EMPTY SPACER (For Desktop Balance) */}
                <div className="hidden md:block w-5/12" />

                {/* CONTENT CARD */}
                <div 
                  onClick={() => setSelected(exp)}
                  className={`pl-12 md:pl-0 w-full md:w-5/12 cursor-pointer group ${
                    isEven ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <span className="font-mono text-cyber-primary text-sm inline-block mb-1">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-cyber-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">
                    {exp.company}
                  </p>
                  {/* Optional: Show small preview of skills on card */}
                  <div className={`mt-3 flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                     {exp.skills.slice(0, 3).map(s => (
                       <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                         {s}
                       </span>
                     ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MODAL POPUP (Unchanged logic, kept for functionality) */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#111620] border border-slate-200 dark:border-slate-700 p-8 max-w-lg w-full rounded-lg shadow-2xl relative"
            >
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500"><X /></button>
              
              <div className="flex items-center gap-3 mb-4">
                 <CheckCircle2 className="text-cyber-success" />
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{selected.title}</h3>
              </div>
              <p className="text-cyber-primary font-mono mb-6">{selected.company} // {selected.year}</p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{selected.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {selected.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-cyber-primary rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}