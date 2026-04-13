"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const About = () => {
  const principles = [
    "Performance First",
    "Tailored UI Design",
    "Modern Tech Stack",
    "Conversion Focused",
    "Fast Delivery",
    "Client Focused"
  ];

  return (
    <section id="about" className="section-padding bg-surface/30 scroll-mt-32">
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
              About Me
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-outfit mb-8 leading-tight">
              Building <span className="text-primary italic">Better Web</span><br />Experiences
            </h2>
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed mb-10 max-w-xl">
              <p>
                I am a freelance web & mobile app developer focused on building modern, high-performance websites and mobile applications. My passion lies in creating visual identities and digital tools that help businesses and creators grow their presence and results.
              </p>
              <p>
                As a developer, I prioritize performance and clean UX/UI above all else. I believe that a website should not only look good but load fast and provide measurable value to its owners.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-10">
              {principles.map(principle => (
                <div key={principle} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">{principle}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[500px] flex items-end"
          >
            <div className="relative w-full h-[600px]">
              <Image
                src="/my-portrait.webp"
                alt="Developer Portrait"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-bottom grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                priority
              />
              {/* Blending Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent lg:block hidden" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
