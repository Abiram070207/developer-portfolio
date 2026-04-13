"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("light", savedTheme === "light");
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  const navLinks = [
    { title: "Home", href: "#" },
    { title: "Projects", href: "#projects" },
    { title: "Demo", href: "#demo" },
    { title: "Services", href: "#services" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="max-container flex items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold font-outfit tracking-tighter text-foreground hover:text-primary transition-colors">
          ABIRAM<span className="text-primary"> RAVIKUMAR</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link href={link.href} className="nav-link text-sm font-medium">
                {link.title}
              </Link>
            </li>
          ))}
          <li>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-surface/50 transition-colors text-text-secondary hover:text-primary outline-none"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
          <li>
            <a href="#contact" className="btn-primary text-xs !py-2 !px-5">
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Menu Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-surface transition-colors text-text-secondary hover:text-primary outline-none"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-foreground hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-border py-8 flex flex-col items-center gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-lg font-medium text-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary w-[80%] text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
