"use client";

import { motion } from "framer-motion";
import { Laptop, ArrowRight } from "lucide-react";
import Link from "next/link";

const DemoWork = () => {
  return (
    <section id="demo" className="section-padding bg-surface/30 scroll-mt-32">
      <div className="max-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-6">
              <span className="w-10 h-[2px] bg-primary"></span>
              Demo Concept
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-8 leading-tight">
              Get a <span className="text-primary">Free Demo</span> for Your Business
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Wondering how your business would look with a modern, high-performance website? I offer a free UI concept/demo for qualified businesses. See the potential before you commit.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Laptop size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Tailored for You</h4>
                  <p className="text-text-secondary">I could provide you with  custom layouts based on your brand identity and goals.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn-primary inline-flex items-center gap-2 group">
              Request Your Demo
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Filled Browser Mockup */}
            <div className="glass-card overflow-hidden shadow-2xl relative z-10 border border-white/10 bg-[#0a0a0a]">
              {/* Browser Header */}
              <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="bg-black/40 rounded-md py-1.5 px-6 text-[10px] text-text-secondary flex-1 text-center font-mono border border-white/5 max-w-sm mx-auto">
                  your-project-demo.com
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex h-[320px]">
                {/* Sidebar Mockup */}
                <div className="w-16 border-r border-white/10 p-3 flex flex-col gap-4 bg-white/[0.02]">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-10 h-10 rounded-lg ${i === 1 ? 'bg-primary/20 text-primary' : 'bg-white/5 text-text-secondary'} flex items-center justify-center`}>
                      <div className="w-5 h-5 border-2 border-current rounded-md opacity-40"></div>
                    </div>
                  ))}
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 space-y-6 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="w-32 h-4 bg-white/10 rounded-full"></div>
                    <div className="w-8 h-8 rounded-full bg-white/10"></div>
                  </div>
                  
                  {/* Grid of Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="w-12 h-2 bg-text-secondary/30 rounded-full mb-3"></div>
                      <div className="w-16 h-5 bg-primary/20 rounded-lg"></div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="w-12 h-2 bg-text-secondary/30 rounded-full mb-3"></div>
                      <div className="w-16 h-5 bg-white/10 rounded-lg"></div>
                    </div>
                  </div>

                  {/* Main Chart Area */}
                  <div className="p-5 rounded-xl bg-primary/5 border border-primary/20 h-32 relative overflow-hidden group">
                     <svg className="absolute bottom-0 left-0 w-full h-16 text-primary/30" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,50 C20,20 40,80 60,40 C80,20 100,60 100,60 L100,100 L0,100 Z" fill="currentColor" />
                     </svg>
                     <div className="w-24 h-3 bg-primary/20 rounded-full relative z-10"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoWork;
