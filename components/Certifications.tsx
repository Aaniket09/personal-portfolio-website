"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { portfolioData } from "@/app/portfolio-data";

export default function Certifications() {
  return (
    <section className="py-16 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#0f141e] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
      <div className="p-3 bg-cyber-primary/10 rounded-lg text-cyber-primary">
         <ShieldCheck size={24} />
      </div>
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
        Active Credentials
      </h2>
    </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.certifications.map((cert, i) => {
            const isISC2 = cert.issuer === "ISC2" || cert.code === "ISC2-CC";

            return (
              <motion.a
                key={i}
                href={cert.link}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`group relative flex flex-col items-center p-8 rounded-2xl border bg-white dark:bg-[#111620] hover:bg-slate-50 dark:hover:bg-[#161b26] transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${cert.color} dark:border-slate-800`}
              >
                
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100/50 dark:to-cyber-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <div className={`relative w-40 h-40 mb-6 transition-all duration-500 overflow-hidden ${isISC2 ? 'bg-white rounded-full shadow-inner border border-slate-100' : 'drop-shadow-xl'}`}>
                   <Image 
                     src={cert.logo} 
                     alt={cert.name} 
                     fill 
                     className={`object-contain group-hover:scale-110 transition-transform duration-500 ${isISC2 ? 'p-5' : ''}`}
                   />
                </div>

                <div className="text-center relative z-10 w-full">
                  <div className="flex items-center justify-center gap-2 mb-2">
                     <span className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider">{cert.issuer}</span>
                     <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-cyber-primary -mt-0.5"/>
                  </div>
                  
                  <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 leading-tight mb-4 group-hover:text-cyber-primary transition-colors">
                    {cert.name}
                  </h3>
                  
                  {/* UPDATED: Two Separate Pills */}
                  <div className="flex justify-center gap-2">
                    {/* Pill 1: Code */}
                    <span className="px-3 py-1 text-xs font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700">
                      {cert.code}
                    </span>
                    
                    {/* Pill 2: Year (Subtle Green to show 'Active') */}
                    <span className="px-3 py-1 text-xs font-mono font-medium text-cyber-primary/80 bg-cyber-primary/5 rounded-md border border-cyber-primary/20">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}