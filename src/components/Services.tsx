"use client";

import { motion } from "framer-motion";
import { Laptop, TabletSmartphone, ShoppingCart, Rocket, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: <Laptop size={32} />,
    title: "Website Development",
    description: "Custom, high-performance websites built with Next.js and Tailwind CSS for speed and scalability."
  },
  {
    icon: <TabletSmartphone size={32} />,
    title: "Mobile App Development",
    description: "I build fast, scalable, and user-centric mobile applications with clean UI/UX and efficient backend integration, focused on delivering smooth performance and real-world impact."
  },
  {
    icon: <ShoppingCart size={32} />,
    title: "E-commerce Setup",
    description: "Complete e-commerce solutions with robust backend integrations like Shopify and Stripe."
  },
  {
    icon: <Rocket size={32} />,
    title: "SEO Optimization",
    description: "Ensuring your website ranks high on search results with automated SEO best practices."
  },
  {
    icon: <Zap size={32} />,
    title: "Fast Delivery",
    description: "Optimized workflows ensuring your project is delivered on time without compromising quality."
  },
  {
    icon: <Shield size={32} />,
    title: "Ongoing Support",
    description: "Maintenance and updates to keep your website secure and up-to-date with latest technologies."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background scroll-mt-32">
      <div className="max-container">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">My <span className="text-primary">Services</span></h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            I offer a range of specialized services to help your business transition into the digital world effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-10 hover:border-primary/40 group relative overflow-hidden"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold font-outfit mb-4 md:mb-6">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Decorative subtle background icon */}
              <div className="absolute -bottom-4 -right-4 text-border/10 -rotate-12 group-hover:rotate-0 transition-all duration-700">
                {service.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
