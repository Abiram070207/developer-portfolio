"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center pt-24 overflow-hidden bg-background">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="max-container px-6 relative z-10 flex flex-col items-center text-center">
        {/* Subtle load animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 bg-surface/50 border border-border px-4 py-2 rounded-full text-foreground/80 text-sm font-medium hover:border-primary/50 transition-all cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Open for New Projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-9xl font-bold font-outfit tracking-tighter mb-8 leading-[1]"
        >
          ABIRAM <br />
          <span className="text-primary grayscale-[0.2] hover:grayscale-0 transition-all cursor-default">RAVIKUMAR</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mb-12 leading-relaxed"
        >
          <span className="text-foreground font-semibold">Intelligent Systems Developer</span> <br />
          Transforming ideas into fast, scalable, and visually compelling digital products that deliver results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link href="#projects" className="btn-primary group flex items-center gap-2">
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="#contact" className="btn-secondary flex items-center gap-2">
            Request Free Demo
          </a>
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;
