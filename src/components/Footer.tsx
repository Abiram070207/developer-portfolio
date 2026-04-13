"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="max-container px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-bold font-outfit tracking-tighter text-white hover:text-primary transition-colors inline-block mb-8 uppercase">
              ABIRAM<span className="text-primary"> RAVIKUMAR</span>
            </Link>
            <p className="text-text-secondary text-lg max-w-sm mb-12 leading-relaxed">
              I build fast, modern, and visually appealing websites for businesses and creators. Focus on high performance and measurable business results.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://github.com/Abiram070207" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-surface border border-border hover:border-primary/50 hover:text-primary transition-all flex items-center justify-center"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/abiram070207" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-surface border border-border hover:border-primary/50 hover:text-primary transition-all flex items-center justify-center"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold font-outfit mb-8 uppercase tracking-widest text-white/50">Quick Links</h4>
            <ul className="space-y-4 font-medium text-text-secondary">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-outfit mb-8 uppercase tracking-widest text-white/50">Services</h4>
            <ul className="space-y-4 font-medium text-text-secondary">
              <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">SEO Optimization</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-border/50 pt-10 gap-8">
          <div className="text-text-secondary font-medium">
            &copy; {new Date().getFullYear()} Abiram Ravikumar. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest group"
          >
            Back to top <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
