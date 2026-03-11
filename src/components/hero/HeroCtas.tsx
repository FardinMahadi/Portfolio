'use client';

import type { HeroCtasProps } from '@/components/types/hero/hero';
import { cn } from '@/lib/utils';
import { staggerContainer, staggerItem } from 'config/animations';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function HeroCtas({ className }: HeroCtasProps) {
  return (
    <motion.div
      className={cn('flex flex-wrap items-center gap-3.5', className)}
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={staggerItem}>
        <Link
          href="/#projects"
          className="font-display from-mag-700 to-mag-500 inline-flex items-center justify-center rounded-sm bg-gradient-to-br px-7 py-3.5 text-[0.82rem] font-bold tracking-[0.07em] text-white uppercase shadow-(--sh-mag) transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(180,0,217,0.45)]"
        >
          View My Work ↓
        </Link>
      </motion.div>
      <motion.div variants={staggerItem}>
        <Link
          href="/contact"
          className="font-display border-n300 text-n700 hover:border-mag-400 hover:text-mag-600 inline-flex items-center justify-center rounded-sm border bg-transparent px-6 py-3.5 text-[0.82rem] font-semibold tracking-[0.04em] transition-all duration-200"
        >
          Get In Touch
        </Link>
      </motion.div>
    </motion.div>
  );
}
