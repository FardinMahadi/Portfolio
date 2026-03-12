'use client';

import type { StatCardProps } from '@/components/types/cards/cards';
import { cn } from '@/lib/utils';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function StatCard({ value, suffix = '', label, className }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const prefersReduced = useReducedMotion();
  const [count, setCount] = useState(prefersReduced ? value : 0);

  useEffect(() => {
    if (!isInView || prefersReduced) return;
    let start = 0;
    const duration = 1200;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(value);
    };
    requestAnimationFrame(step);
  }, [isInView, value, prefersReduced]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn('flex flex-col items-center gap-1 text-center', className)}
    >
      <span className="font-display text-mag-400 text-4xl leading-none font-extrabold md:text-5xl">
        {count}
        {suffix}
      </span>
      <span className="text-n400 font-mono text-xs tracking-widest uppercase">{label}</span>
    </motion.div>
  );
}
