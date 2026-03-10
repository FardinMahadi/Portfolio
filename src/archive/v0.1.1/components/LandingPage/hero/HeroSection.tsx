'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

const TypeWriter = () => {
  const text = "FardinMahadi";
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (typing && displayed.length < text.length) {
      const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 120);
      return () => clearTimeout(t);
    }
    if (displayed.length === text.length) {
      setTimeout(() => setTyping(false), 2000);
    }
  }, [displayed, typing]);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden font-mono text-sm">
      <div className="px-4 py-2 border-b border-border flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-destructive/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-primary/60" />
        <span className="ml-2 text-muted-foreground text-xs">~/portfolio/dev.ts</span>
      </div>
      <div className="p-4 flex items-center gap-4">
        <span className="text-muted-foreground/50 select-none">1</span>
        <div className="text-base md:text-lg">
          <span className="text-primary">const</span>{" "}
          <span className="text-foreground">dev</span>{" "}
          <span className="text-muted-foreground">=</span>{" "}
          <span className="text-primary">&apos;{displayed}<span className="animate-pulse text-primary">|</span>&apos;</span>
          <span className="text-foreground">;</span>
        </div>
      </div>
    </div>
  );
};

const socials = [
  { icon: Mail, label: "Hire Me", href: "mailto:mahadihasanfardin2015@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/FardinMahadi" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mahadi-hasan-fardin" },
  { icon: MessageCircle, label: "Discord", href: "https://discord.gg/fardinmahadi" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-10"
        >
          <TypeWriter />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="shrink-0"
          >
            <div className="relative w-40 h-40 md:w-52 md:h-52">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30">
                <Image
                  src="/Images/me.jpg"
                  alt="Portrait of Fardin Mahadi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter leading-tight mb-4">
              Shipping purposeful digital products with{" "}
              <span className="text-gradient-primary">empathy and code.</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              Full-stack engineer focused on thoughtful UX and performant React & Next.js applications. I lean on calm interfaces, inclusive accessibility, and fast feedback loops.
            </p>

            <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start mb-6">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary/50 hover:text-primary transition-colors"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors animate-float">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
