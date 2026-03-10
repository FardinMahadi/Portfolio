'use client';

import type { AboutCopyProps } from '@/components/types/about';

import { motion } from 'framer-motion';

import { GlassmorphismPanel } from '../effects/GlassmorphismPanel';

export function AboutCopy({ isInView }: AboutCopyProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-4"
    >
      <GlassmorphismPanel className="text-theme-text/80 p-6">
        <p className="leading-relaxed">
          I&apos;m a Full Stack Developer passionate about creating seamless web experiences. With
          expertise in the MERN stack (MongoDB, Express, React, Node.js) and modern frameworks like
          Next.js, I transform ideas into robust, scalable applications.
        </p>
        <p className="mt-4 leading-relaxed">
          My approach combines clean code architecture with cutting-edge technologies, ensuring
          every project is performant, maintainable, and user-focused. I focus on writing quality
          code that solves real-world problems.
        </p>
      </GlassmorphismPanel>

      <div className="border-theme-border/60 bg-theme-surface/70 flex w-fit items-center gap-3 rounded border px-4 py-2 backdrop-blur">
        <div className="bg-theme-primary h-2 w-2 animate-pulse rounded-full" />
        <span className="text-theme-text/70 font-mono text-sm">Available for new projects</span>
      </div>
    </motion.article>
  );
}
