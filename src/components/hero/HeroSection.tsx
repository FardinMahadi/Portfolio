'use client';

import type { HeroSectionProps } from '@/components/types/hero/hero';

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';

import { cn } from '@/lib/utils';
import { site } from '@/lib/data/site';
import { HeroCtas } from '@/components/hero/HeroCtas';
import { HeroText } from '@/components/hero/HeroText';
import { HeroPhoto } from '@/components/hero/HeroPhoto';
import { HeroStats } from '@/components/hero/HeroStats';

const PARTICLES: { x: string; y: string; size: number; delay: number; duration: number }[] = [
  { x: '6%', y: '18%', size: 3, delay: 0, duration: 4.2 },
  { x: '15%', y: '72%', size: 2, delay: 0.9, duration: 5.1 },
  { x: '38%', y: '12%', size: 2, delay: 1.5, duration: 6.0 },
  { x: '28%', y: '85%', size: 3, delay: 0.3, duration: 4.6 },
  { x: '48%', y: '55%', size: 2, delay: 2.1, duration: 5.4 },
  { x: '10%', y: '45%', size: 2, delay: 1.2, duration: 3.9 },
];

export function HeroSection({ className }: HeroSectionProps) {
  const rawX = useMotionValue(30);
  const rawY = useMotionValue(50);
  const glowX = useSpring(rawX, { stiffness: 50, damping: 22 });
  const glowY = useSpring(rawY, { stiffness: 50, damping: 22 });

  // Subtle parallax: left column drifts slightly toward the cursor
  const parallaxX = useTransform(glowX, [0, 100], [-6, 6]);
  const parallaxY = useTransform(glowY, [0, 100], [-4, 4]);

  const glowBg = useMotionTemplate`radial-gradient(700px circle at ${glowX}% ${glowY}%, color-mix(in srgb, var(--mag-500) 10%, transparent), transparent)`;

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set(((e.clientX - rect.left) / rect.width) * 100);
    rawY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <section
      className={cn('bg-canvas relative flex flex-col overflow-hidden', className)}
      aria-labelledby="hero-heading"
      onMouseMove={handleMouseMove}
    >
      {/* Static ambient gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 30% 50%, color-mix(in srgb, var(--mag-050) 90%, transparent), transparent)',
        }}
      />

      {/* Cursor-following glow */}
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: glowBg }} />

      {/* Floating ambient particles — left half only */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/2 overflow-hidden"
        aria-hidden
      >
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="bg-mag-500 absolute rounded-full"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{ y: [-14, 14, -14], opacity: [0.15, 0.35, 0.15] }}
            transition={{
              repeat: Infinity,
              duration: p.duration,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Two-column grid */}
      <div className="relative z-10 grid min-h-[calc(100vh-52px)] grid-cols-1 lg:grid-cols-2">
        {/* Left — text content */}
        <div className="flex flex-col justify-center px-8 py-20 lg:px-16 xl:px-20">
          <HeroText name={site.name} tagline={site.tagline} />
          <div className="mt-9">
            <HeroCtas />
          </div>
          <div className="mt-8">
            <HeroStats stats={site.stats.map(s => ({ ...s, suffix: s.suffix || undefined }))} />
          </div>
        </div>

        {/* Right — dark photo panel (desktop only) */}
        <div className="relative hidden overflow-hidden lg:block">
          {/* Static background — stays fixed */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(160deg, var(--mag-800) 0%, var(--canvas-dark) 65%)',
              clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)',
            }}
          />
          {/* Cursor parallax layer */}
          <motion.div
            className="absolute inset-0"
            style={{ x: parallaxX, y: parallaxY }}
          >
            <HeroPhoto
              src="/images/avatar/fardin-mahadi-no-bg.png"
              alt={`${site.name} — Full Stack Engineer`}
            />
          </motion.div>
        </div>
      </div>

      {/* Status bar */}
      <div className="bg-canvas-dark relative z-20 flex shrink-0 flex-wrap items-center gap-6 px-16 py-3.5 font-mono text-[0.65rem] tracking-[0.04em] text-white/30">
        <div className="flex items-center gap-2">
          <span>$</span>
          <span>cat status.txt</span>
        </div>
        <span className="text-white/10">·</span>
        <div className="flex items-center gap-1.5">
          Location:<span className="ml-1 text-teal-300">{site.location}</span>
        </div>
        <span className="text-white/10">·</span>
        <div className="flex items-center gap-1.5">
          Response:<span className="ml-1 text-teal-300">&lt; 24h</span>
        </div>
        <span className="text-white/10">·</span>
        <div className="flex items-center gap-2">
          <motion.span
            className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
          <span className="text-teal-300">Open to work</span>
        </div>
      </div>
    </section>
  );
}
