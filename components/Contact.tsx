"use client";
import { useState } from "react";
import { Send, Terminal, CheckCircle, AlertCircle, Copy, Mail } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  // Uses the environment variable
  const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ""; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aniketagarwal57@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) setStatus("success");
      else setStatus("error");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
      {/* 1. Heading */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="p-3 bg-cyber-primary/10 rounded-lg text-cyber-primary">
             <Send size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            Contact
          </h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400">
          Have a question or a job opportunity? Send me a message below.
        </p>
      </div>

      {/* 2. TERMINAL CARD (Adaptive Colors) */}
      <div className="bg-white dark:bg-[#0f141e] rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden font-mono text-sm md:text-base relative group transition-colors duration-300">
        
        {/* TERMINAL HEADER */}
        <div className="bg-slate-100 dark:bg-[#1a202c] px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between transition-colors duration-300">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 border border-red-600/20" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 border border-yellow-600/20" />
            <div className="w-3 h-3 rounded-full bg-green-500 border border-green-600/20" />
          </div>
          <div className="text-slate-500 dark:text-slate-400 text-xs flex items-center gap-2">
            <Terminal size={12} />
            bash — contact-form
          </div>
          <div className="w-12" />
        </div>

        {/* TERMINAL BODY */}
        <div className="p-6 md:p-8 text-slate-800 dark:text-slate-300">
          
          {/* Email Display Line */}
          <div className="mb-8 flex items-center gap-2 flex-wrap border-b border-slate-200 dark:border-white/10 pb-6">
            <Mail size={16} className="text-cyber-primary"/>
            <span className="text-slate-500 dark:text-slate-400">Or email me directly:</span>
            <span className="font-bold text-slate-900 dark:text-white">aniketagarwal57@gmail.com</span>
            <button 
              onClick={handleCopyEmail}
              className="ml-2 text-slate-400 hover:text-cyber-primary transition-colors"
              title="Copy to Clipboard"
            >
              {copied ? <CheckCircle size={16} className="text-green-500"/> : <Copy size={16}/>}
            </button>
          </div>

          {/* SUCCESS MESSAGE */}
          {status === "success" ? (
            <div className="border border-green-500/30 bg-green-50 dark:bg-green-500/5 p-8 rounded text-center">
              <div className="inline-block p-3 rounded-full bg-green-100 dark:bg-green-500/10 mb-4">
                <CheckCircle className="text-green-600 dark:text-green-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent Successfully</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">I will get back to you as soon as possible.</p>
              <button onClick={() => setStatus("idle")} className="text-cyber-primary hover:underline font-bold">
                Send another message
              </button>
            </div>
          ) : (
            /* FORM INPUTS */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-1">
                <label htmlFor="name" className="block text-cyber-primary font-bold text-xs uppercase tracking-wider mb-1">Name</label>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 dark:text-slate-600">{">"}</span>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 focus:border-cyber-primary focus:outline-none py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block text-cyber-primary font-bold text-xs uppercase tracking-wider mb-1">Email</label>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 dark:text-slate-600">{">"}</span>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="Enter your email address"
                    className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 focus:border-cyber-primary focus:outline-none py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-cyber-primary font-bold text-xs uppercase tracking-wider mb-1">Message</label>
                <div className="flex items-start gap-2">
                  <span className="text-slate-400 dark:text-slate-600 mt-2">{">"}</span>
                  <textarea 
                    name="message" 
                    rows={4}
                    required 
                    placeholder="Type your message..."
                    className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 focus:border-cyber-primary focus:outline-none py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 resize-none transition-colors"
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="mt-4 group relative inline-flex items-center justify-center gap-3 px-8 py-3 bg-cyber-primary text-cyber-dark font-bold hover:opacity-90 transition-all duration-300 w-full md:w-auto rounded-sm shadow-lg hover:shadow-cyber-primary/20"
              >
                {status === "submitting" ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              
              {status === "error" && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                  <AlertCircle size={14} /> Failed to send. Please try again or email me directly.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}