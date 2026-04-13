"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Smartphone, 
  Layout, 
  Figma, 
  Terminal, 
  Cpu 
} from "lucide-react";

const skillCategories = [
  {
    title: "Web Development",
    icon: <Layout className="text-primary" size={28} />,
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="text-primary" size={28} />,
    skills: ["Flutter", "React Native (Concept)", "Material Design", "Dart", "Firebase Auth"]
  },
  {
    title: "Backend & Systems",
    icon: <Database className="text-primary" size={28} />,
    skills: ["Firebase", "NoSQL Database", "REST APIs", "Authentication", "Cloud Functions"]
  },
  {
    title: "Design & UX",
    icon: <Figma className="text-primary" size={28} />,
    skills: ["UI/UX Design", "Responsive Web Design", "Typography", "Figma", "Branding"]
  },
  {
    title: "Tools & Workflow",
    icon: <Terminal className="text-primary" size={28} />,
    skills: ["Git & GitHub", "Vercel", "Production Support", "SEO Optimization", "Clean Code"]
  },
  {
    title: "Core Expertise",
    icon: <Cpu className="text-primary" size={28} />,
    skills: ["Problem Solving", "Scale Management", "Performance Optimization", "Full Stack Development", "Client Comm."]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-surface/30 scroll-mt-32">
      <div className="max-container">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-foreground">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive list of technologies and tools I master to build high-performance, visually stunning digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-10 hover:border-primary/40 group relative overflow-hidden"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500 inline-block text-primary">
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold font-outfit mb-6 text-foreground">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-xs font-bold uppercase tracking-widest text-foreground/70 px-4 py-2 rounded-lg bg-background/50 border border-border group-hover:border-primary/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative subtle gradient */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
