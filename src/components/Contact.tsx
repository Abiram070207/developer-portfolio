"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, Send, ArrowUpRight, ChevronDown, ExternalLink, Loader2 } from "lucide-react";

const Contact = () => {

  const [selectedSubject, setSelectedSubject] = useState("New Website Project");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showGmailModal, setShowGmailModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subjects = [
    "New Website Project",
    "Request Free Demo",
    "Mobile App Development",
    "E-commerce Setup"
  ];

  const handleGmailRedirect = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=abiram.r1010@gmail.com&su=${encodeURIComponent(selectedSubject)}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    setShowGmailModal(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "886d9d00-3272-46e5-b309-3dbec20cbe21");
    formData.append("subject", `Portfolio Contact: ${selectedSubject}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden text-foreground scroll-mt-32">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-primary/5 rounded-full blur-[120px] -z-0"></div>

      {/* Custom Gmail Modal */}
      <AnimatePresence>
        {showGmailModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowGmailModal(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-surface border border-border p-8 rounded-3xl shadow-2xl"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Mail size={32} />
              </div>
              <h3 className="text-2xl font-bold font-outfit mb-4">Open Gmail?</h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                This will open a new tab with a pre-filled Gmail compose window for <strong>abiram.r1010@gmail.com</strong>.
              </p>
              <div className="flex flex-col gap-4">
                <button 
                  onClick={handleGmailRedirect}
                  className="btn-primary w-full flex items-center justify-center gap-3 py-4"
                >
                  Yes, Open Gmail <ExternalLink size={18} />
                </button>
                <button 
                  onClick={() => setShowGmailModal(false)}
                  className="text-text-secondary hover:text-foreground font-bold uppercase tracking-widest text-sm transition-colors py-2"
                >
                  Not now
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="max-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-6">
              <span className="w-10 h-[2px] bg-primary"></span>
              Get in Touch
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-outfit mb-8 leading-[1.1]">
              Let's build <span className="text-primary italic">something amazing</span>
            </h2>
            <p className="text-text-secondary text-xl mb-12 leading-relaxed">
              Have a project in mind? Or need to see a demo? Get in touch with me and let's discuss how we can work together.
            </p>

            <div className="space-y-8 mb-12">
              <button 
                onClick={() => setShowGmailModal(true)}
                className="flex items-center gap-6 group text-left"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface border border-border group-hover:border-primary/50 transition-colors flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                   <div className="text-xs text-text-secondary uppercase tracking-widest font-bold mb-1">Email Me</div>
                   <div className="text-xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                     abiram.r1010@gmail.com <ArrowUpRight size={16} />
                   </div>
                </div>
              </button>

              {/* GitHub Link */}
              <a 
                href="https://github.com/Abiram070207" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 group text-left"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface border border-border group-hover:border-primary/50 transition-colors flex items-center justify-center text-primary">
                   <div className="bg-primary/10 p-2 rounded-lg">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                   </div>
                </div>
                <div>
                   <div className="text-xs text-text-secondary uppercase tracking-widest font-bold mb-1">GitHub</div>
                   <div className="text-xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                     Abiram070207 <ArrowUpRight size={16} />
                   </div>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a 
                href="https://www.linkedin.com/in/abiram070207" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 group text-left"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface border border-border group-hover:border-primary/50 transition-colors flex items-center justify-center text-primary">
                   <div className="bg-primary/10 p-2 rounded-lg">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                   </div>
                </div>
                <div>
                   <div className="text-xs text-text-secondary uppercase tracking-widest font-bold mb-1">LinkedIn</div>
                   <div className="text-xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                     Abiram070207 <ArrowUpRight size={16} />
                   </div>
                </div>
              </a>

              {/* WhatsApp/Call Link */}
              <a 
                href="https://wa.me/919994395863" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 group text-left"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface border border-border group-hover:border-primary/50 transition-colors flex items-center justify-center text-primary">
                   <div className="bg-primary/10 p-2 rounded-lg">
                     <MessageCircle size={24} />
                   </div>
                </div>
                <div>
                   <div className="text-xs text-text-secondary uppercase tracking-widest font-bold mb-1">WhatsApp & Call</div>
                   <div className="text-xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                     +91-9994395863 <ArrowUpRight size={16} />
                   </div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 md:p-12 hover:scale-[1.01] relative overflow-hidden"
          >
            {/* Success Overlay */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-50 bg-surface/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6 animate-pulse">
                    <Send size={40} />
                  </div>
                  <h4 className="text-3xl font-bold font-outfit mb-4 text-foreground">Message Sent!</h4>
                  <p className="text-text-secondary max-w-xs mx-auto">
                    Thanks for reaching out! I've received your inquiry and will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-primary font-bold uppercase tracking-widest text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-sm font-bold uppercase tracking-widest text-text-secondary block">Your Name</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    placeholder="Abiram" 
                    className="w-full bg-background/50 border border-border focus:border-primary px-6 py-4 rounded-xl outline-none transition-colors"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-bold uppercase tracking-widest text-text-secondary block">Your Email</label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    placeholder="abiram@gmail.com" 
                    className="w-full bg-background/50 border border-border focus:border-primary px-6 py-4 rounded-xl outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                 <label className="text-sm font-bold uppercase tracking-widest text-text-secondary block">Subject</label>
                 <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full bg-background/50 border border-border focus:border-primary px-6 py-4 rounded-xl outline-none transition-all flex items-center justify-between group"
                    >
                      <span className="text-foreground">{selectedSubject}</span>
                      <ChevronDown 
                        size={20} 
                        className={`text-text-secondary group-hover:text-primary transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} 
                      />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute top-full left-0 w-full mt-2 bg-surface border border-border rounded-xl overflow-hidden z-50 shadow-2xl backdrop-blur-xl"
                        >
                          {subjects.map((subject) => (
                            <button
                              key={subject}
                              type="button"
                              onClick={() => {
                                setSelectedSubject(subject);
                                setIsDropdownOpen(false);
                              }}
                              className="w-full text-left px-6 py-4 hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium"
                            >
                              {subject}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </div>
              </div>

              <div className="space-y-4">
                 <label className="text-sm font-bold uppercase tracking-widest text-text-secondary block">Message</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    required
                    placeholder="Tell me about your project..." 
                    className="w-full bg-background/50 border border-border focus:border-primary px-6 py-4 rounded-xl outline-none transition-colors resize-none"
                  />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-3 py-5 text-lg disabled:opacity-50"
              >
                 {isSubmitting ? (
                   <>Sending... <Loader2 className="animate-spin" size={20} /></>
                 ) : (
                   <>Send Message <Send size={20} /></>
                 )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
