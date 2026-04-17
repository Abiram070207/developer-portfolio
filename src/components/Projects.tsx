"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ZoomIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Complix-R (Grievance portal)",
    description: "Rajalakshmi Institutions, Chennai, TN, IN",
    longDescription: "A fully custom grievance portal built with Flutter, React.js and Firebase. Designed for addressing the grievances inside the campus and supporting lightning-fast page loads. Designed exclusively for Rajalakshmi Institutions.",
    image: "/complix-r-cover.png",
    tags: ["Flutter", "React.js", "Firebase", "Mobile App"],
    link: "https://play.google.com/store/apps/details?id=com.ritchennai.complixr&pcampaignid=web_share",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Ajantha Traders, TN, IN",
    longDescription: "A comprehensive SaaS dashboard featuring real-time data visualization using Recharts, role-based access control, and seamless user onboarding experience.",
    image: "/tatabat.png",
    tags: ["React", "Typescript", "Framer"],
    link: "",
  },
  {
    id: 3,
    title: "Marketing Website",
    description: "Yes Solar Solutions, TN, IN",
    longDescription: "A visually striking marketing website focusing on performance and SEO. Optimized for Core Web Vitals to ensure maximum search engine visibility and user engagement.",
    image: "/yessolar.png",
    tags: ["Next.js", "SEO", "Vercel"],
    link: "",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding bg-background scroll-mt-32">
      <div className="max-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Selected <span className="text-primary">Works</span></h2>
            <p className="text-text-secondary max-w-lg text-lg">
              A curated collection of digital experiences I've built for clients across various industries.
            </p>
          </div>
          <a href="#contact" className="nav-link text-lg font-medium group">
            Start a project with me <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border group-hover:border-primary/30 transition-all mb-6">
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="text-white" size={24} />
                  </div>
                </div>
                <div className="w-full h-full relative grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-primary px-2 py-0.5 rounded border border-primary/20 bg-primary/5">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-text-secondary line-clamp-2">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 overflow-y-auto"
          >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-surface border border-border rounded-3xl overflow-hidden z-20 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-background border border-border hover:border-primary transition-colors z-30"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="aspect-square md:aspect-auto h-full relative">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6 text-primary">
                      {selectedProject.tags.map((tag: string) => (
                        <span key={tag} className="text-[10px] uppercase tracking-widest font-bold border border-primary/20 bg-primary/5 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold font-outfit mb-6">{selectedProject.title}</h3>
                    <div className="space-y-4 text-text-secondary leading-relaxed text-lg mb-10">
                      <p>{selectedProject.longDescription}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {selectedProject.link && selectedProject.link !== "#" && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center gap-2 !px-6 text-sm"
                      >
                        <ExternalLink size={16} /> Play store
                      </a>
                    )}
                    {selectedProject.github && selectedProject.github !== "#" && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex items-center gap-2 !px-6 text-sm"
                      >
                        <Github size={16} /> Github
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
