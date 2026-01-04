"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight, Code } from "lucide-react"; 
import { portfolioData } from "@/app/portfolio-data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <div className="p-3 bg-cyber-primary/10 rounded-lg text-cyber-primary">
           <Code size={24} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
          Featured Projects
        </h2>
      </div>
      
      {/* Grid Container */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {portfolioData.projects.map((project, i) => {
          // Check if we have any links at all
          const hasLinks = project.github || project.link;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm w-full md:w-[350px] h-[250px] ${project.size?.includes('col-span-2') ? 'md:w-[724px]' : ''}`}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br opacity-10 dark:opacity-80 ${project.gradient}`} />
              
              {/* Hover Content */}
              <div className="absolute inset-0 bg-white/95 dark:bg-cyber-dark/95 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 text-center z-10">
                 <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                 <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{project.desc}</p>
                 
                 <div className="flex gap-2 mb-6 justify-center flex-wrap">
                   {project.tags.map(tag => (
                     <span key={tag} className="text-xs font-mono text-cyber-primary font-bold">{tag}</span>
                   ))}
                 </div>

                 {/* ACTION BUTTONS LOGIC */}
                 {hasLinks ? (
                   <div className="flex gap-4">
                     {/* Only show GitHub button if URL exists */}
                     {project.github && (
                       <a 
                         href={project.github} 
                         target="_blank" 
                         className="p-2 bg-slate-50 border border-slate-200 dark:border-none dark:bg-white/10 rounded-full hover:bg-cyber-primary text-slate-700 dark:text-white hover:text-white transition-colors"
                         title="View Source Code"
                       >
                         <Github size={20} />
                       </a>
                     )}
                     
                     {/* Only show Live Link button if URL exists */}
                     {project.link && (
                       <a 
                         href={project.link} 
                         target="_blank" 
                         className="p-2 bg-cyber-primary/10 text-cyber-primary rounded-full hover:bg-cyber-primary/30 transition-colors"
                         title="View Live Demo"
                       >
                         <ExternalLink size={20} />
                       </a>
                     )}
                   </div>
                 ) : (
                   /* If NO links exist, show Coming Soon badge */
                   <div className="px-4 py-2 border border-slate-200 dark:border-white/10 rounded-full bg-slate-50 dark:bg-white/5">
                     <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                       🚧 Coming Soon
                     </span>
                   </div>
                 )}
              </div>

              {/* Default View (Title Card) */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-400 drop-shadow-md group-hover:hidden transition-all uppercase tracking-widest p-4 text-center">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <a 
          href="https://github.com/Aaniket09" 
          target="_blank"
          className="group flex items-center gap-2 px-8 py-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full font-mono text-sm font-bold text-slate-600 dark:text-slate-300 hover:border-cyber-primary hover:text-cyber-primary transition-all shadow-sm hover:shadow-md"
        >
          View Full Project Archive
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}