'use client';

import type { HeroTextProps } from '@/components/types/hero/hero';

import { motion } from 'framer-motion';
import { heroEntrance } from 'config/animations';

import { cn } from '@/lib/utils';
import { useTypewriter } from '@/hooks/use-typewriter';

const ROLES = [
  'Full Stack Engineer',
  'Product Designer',
  'AI Integrator',
  'MERN Developer',
] as const;

export function HeroText({ name, tagline, className }: HeroTextProps) {
  const { display, blink } = useTypewriter(ROLES);
  const parts = name.split(' ');
  const solid = parts.slice(0, -1).join(' ');
  const outline = parts[parts.length - 1] + '.';

  return (
    <div className={cn('flex flex-col', className)}>
      {/* File tab */}
      <motion.div
        custom={1}
        variants={heroEntrance}
        initial="hidden"
        animate="show"
        className="mb-5"
      >
        <div className="border-mag-500 bg-canvas-sunken inline-flex w-fit items-center gap-2 border-b-2 px-3.5 py-1.5">
          <span className="bg-mag-500 h-2 w-2 rounded-full" />
          <span className="text-n400 font-mono text-[0.7rem] tracking-[0.03em]">
            ~/portfolio/dev.ts
          </span>
        </div>
      </motion.div>

      {/* Name */}
      <motion.div
        custom={2}
        variants={heroEntrance}
        initial="hidden"
        animate="show"
        className="mb-4"
      >
        <span
          id="hero-heading"
          className="font-display text-n900 block text-[clamp(2.8rem,5vw,4.2rem)] leading-[0.95] font-extrabold tracking-[-0.04em]"
        >
          {solid}
        </span>
        <span
          className="font-display mb-6 block text-[clamp(2.8rem,5vw,4.2rem)] leading-[0.95] font-extrabold tracking-[-0.04em]"
          style={{ color: 'transparent', WebkitTextStroke: '2px var(--mag-500)' }}
        >
          {outline}
        </span>
      </motion.div>

      {/* Role typewriter */}
      <motion.div
        custom={3}
        variants={heroEntrance}
        initial="hidden"
        animate="show"
        className="text-n500 mb-4 flex h-5 items-center font-mono text-[0.82rem] tracking-[0.03em]"
        aria-live="polite"
        aria-atomic="true"
      >
        {display}
        <span
          className="bg-mag-400 ml-0.5 inline-block h-[1em] w-0.5"
          style={{ opacity: blink ? 1 : 0, transition: 'opacity 0.1s' }}
          aria-hidden
        />
      </motion.div>

      {/* Tagline */}
      <motion.div custom={4} variants={heroEntrance} initial="hidden" animate="show">
        <p className="text-n600 max-w-[400px] text-base leading-[1.55]">{tagline}</p>
      </motion.div>
    </div>
  );
}
