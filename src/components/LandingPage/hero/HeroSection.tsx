'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const TypeWriter = () => {
  const text = 'FardinMahadi';
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (typing && displayed.length < text.length) {
      const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 120);
      return () => clearTimeout(t);
    }
    if (displayed.length === text.length) {
      setTimeout(() => setTyping(false), 2000);
    }
    return () => {};
  }, [displayed, typing]);

  return (
    <div className="bg-card border-border overflow-hidden rounded-lg border font-mono text-sm">
      <div className="border-border flex items-center gap-2 border-b px-4 py-2">
        <div className="bg-destructive/60 h-3 w-3 rounded-full" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
        <div className="bg-primary/60 h-3 w-3 rounded-full" />
        <span className="text-muted-foreground ml-2 text-xs">~/portfolio/dev.ts</span>
      </div>
      <div className="flex items-center gap-4 p-4">
        <span className="text-muted-foreground/50 select-none">1</span>
        <div className="text-base md:text-lg">
          <span className="text-primary">const</span> <span className="text-foreground">dev</span>{' '}
          <span className="text-muted-foreground">=</span>{' '}
          <span className="text-primary">
            &apos;{displayed}
            <span className="text-primary animate-pulse">|</span>&apos;
          </span>
          <span className="text-foreground">;</span>
        </div>
      </div>
    </div>
  );
};

const socials = [
  { icon: Mail, label: 'Hire Me', href: 'mailto:mahadihasanfardin2015@gmail.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/FardinMahadi' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mahadi-hasan-fardin' },
  { icon: MessageCircle, label: 'Discord', href: 'https://discord.gg/fardinmahadi' },
];

const HeroSection = () => (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="bg-primary/5 pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-accent/5 pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-10 max-w-3xl"
        >
          <TypeWriter />
        </motion.div>

        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="shrink-0"
          >
            <div className="relative h-40 w-40 md:h-52 md:w-52">
              <div className="from-primary/30 to-accent/30 absolute inset-0 rounded-full bg-linear-to-br blur-xl" />
              <div className="border-primary/30 relative h-full w-full overflow-hidden rounded-full border-2">
                <Image
                  src="/images/avatar/fardin-mahadi.jpg"
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
            <h1 className="font-inter mb-4 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
              Shipping purposeful digital products with{' '}
              <span className="text-gradient-primary">empathy and code.</span>
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl text-base leading-relaxed md:text-lg">
              Full-stack engineer focused on thoughtful UX and performant React & Next.js
              applications. I lean on calm interfaces, inclusive accessibility, and fast feedback
              loops.
            </p>

            <div className="mb-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a
                href="#projects"
                className="bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium transition-opacity hover:opacity-90"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border-border text-foreground hover:border-primary/50 hover:text-primary rounded-lg border px-6 py-3 font-medium transition-colors"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 md:justify-start">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
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
          className="mt-16 flex justify-center"
        >
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary animate-float transition-colors"
          >
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );

export default HeroSection;
