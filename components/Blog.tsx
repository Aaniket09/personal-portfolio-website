"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Rss, ArrowRight } from "lucide-react"; // Added ArrowRight
import { portfolioData } from "@/app/portfolio-data";

export default function Blog() {
  // Logic: Show button only if there are more than 3 posts
  const showViewAll = portfolioData.blog.length > 2;

  return (
    <section id="blog" className="py-20 px-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <div className="p-3 bg-cyber-primary/10 rounded-lg text-cyber-primary">
           <Rss size={24} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
          Intelligence Feed
        </h2>
      </div>

      {/* GRID (Limited to 3 Items) */}
      <div className="flex flex-wrap justify-center gap-8">
        {portfolioData.blog.slice(0, 3).map((post, i) => (
          <motion.a
            href={post.link}
            target="_blank"
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="w-full md:w-[350px] group block bg-white dark:bg-[#111620] border border-slate-200 dark:border-slate-800 p-6 rounded-lg hover:border-cyber-primary/50 dark:hover:border-cyber-primary/50 transition-all hover:-translate-y-1 relative overflow-hidden shadow-sm hover:shadow-md"
          >
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyber-primary/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150" />

            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-mono text-cyber-primary px-2 py-1 bg-cyber-primary/10 rounded">
                {post.category}
              </span>
              <span className="text-xs font-mono text-slate-500">{post.readTime}</span>
            </div>

            <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-cyber-primary transition-colors line-clamp-2">
              {post.title}
            </h3>

            <div className="flex justify-between items-end mt-6">
              <span className="text-sm text-slate-500 font-mono">{post.date}</span>
              <ArrowUpRight className="text-slate-400 group-hover:text-cyber-primary transition-colors" size={20} />
            </div>
          </motion.a>
        ))}
      </div>

      {/* VIEW ALL BUTTON (Conditional) */}
      {showViewAll && (
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center mt-16"
        >
          <a 
            href="https://medium.com/@aniketagarwal57" 
            target="_blank"
            className="group flex items-center gap-2 px-8 py-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full font-mono text-sm font-bold text-slate-600 dark:text-slate-300 hover:border-cyber-primary hover:text-cyber-primary transition-all shadow-sm hover:shadow-md"
          >
            View All Intelligence
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      )}
    </section>
  );
}