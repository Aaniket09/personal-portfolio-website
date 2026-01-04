"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, MapPin, Calendar } from "lucide-react";
import { portfolioData } from "@/app/portfolio-data";

export default function Community() {
  return (
    <section id="community" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="p-3 bg-cyber-primary/10 rounded-lg text-cyber-primary">
           <Users size={24} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Community & Engagement
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolioData.community.map((item, i) => {
          const isContributor = item.type === "contributor";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl ${
                isContributor 
                  ? "bg-white dark:bg-[#111620] border-cyber-primary/40 shadow-cyber-primary/5" 
                  : "bg-white dark:bg-[#111620] border-slate-200 dark:border-slate-800"
              }`}
            >
              {/* 1. IMAGE AREA (The Proof) */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                {item.image ? (
                  <Image 
                    src={item.image} 
                    alt={item.event} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  // Fallback Gradient if no image exists yet
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-[#0a0f16]" />
                )}

                {/* Overlay Gradient for text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                {/* BADGE: Floating on top of image */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-bold font-mono rounded-full border backdrop-blur-md ${
                    isContributor 
                      ? "bg-cyber-primary/90 text-cyber-dark border-cyber-primary" 
                      : "bg-black/50 text-white border-white/20"
                  }`}>
                    {item.role.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* 2. TEXT CONTENT AREA */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs font-mono text-cyber-primary mb-2">
                   <Calendar size={12} />
                   <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyber-primary transition-colors">
                  {item.event}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                  {item.desc}
                </p>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500 font-mono">
                  <MapPin size={12} />
                  {item.location}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}