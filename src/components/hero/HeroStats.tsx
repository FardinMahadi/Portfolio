'use client';

import type { HeroStatsProps } from '@/components/types/hero/hero';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from 'config/animations';

import { cn } from '@/lib/utils';

export function HeroStats({ stats, className }: HeroStatsProps) {
  return (
    <motion.div
      className={cn(
        'text-n400 flex flex-wrap items-center gap-7 font-mono text-[0.7rem] tracking-[0.04em]',
        className
      )}
      variants={fadeIn}
      initial="hidden"
      animate="show"
    >
      {stats.map((stat, i) => (
        <Fragment key={stat.label}>
          {i > 0 && <span className="bg-n300 h-[3px] w-[3px] rounded-full" aria-hidden />}
          <div>
            <span className="text-mag-500 font-medium">
              {stat.value}
              {stat.suffix}
            </span>{' '}
            {stat.label.toLowerCase()}
          </div>
        </Fragment>
      ))}
    </motion.div>
  );
}
