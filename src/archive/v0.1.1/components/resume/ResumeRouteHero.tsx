'use client';

import type { ResumeHeroProps } from '@/components/types/resume';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function ResumeHero({ portfolioUrl }: ResumeHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border-theme-border/40 relative mb-14 overflow-hidden rounded-3xl border bg-gradient-to-br from-[color-mix(in_srgb,var(--color-surface)_95%,transparent)] via-[color-mix(in_srgb,var(--color-background)_90%,transparent)] to-[color-mix(in_srgb,var(--color-background)_70%,transparent)] p-8 shadow-[0_40px_120px_-50px_rgba(14,165,233,0.5)]"
    >
      <div className="bg-theme-primary/10 pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full blur-3xl" />
      <div className="bg-theme-secondary/20 pointer-events-none absolute bottom-0 left-8 h-40 w-40 rounded-full blur-3xl" />
      <p className="text-theme-primary font-mono text-sm tracking-[0.5em] uppercase">
        Resume Library
      </p>
      <h1 className="text-theme-text text-4xl font-semibold md:text-5xl">
        Polished PDFs that mirror the product storytelling on my portfolio.
      </h1>
      <p className="text-theme-text/80 max-w-3xl text-lg leading-relaxed">
        Each variant uses the same up-to-date data pulled directly from my{' '}
        <a
          href={portfolioUrl}
          target="_blank"
          rel="noreferrer"
          className="text-theme-primary underline-offset-4 hover:underline"
        >
          portfolio site
        </a>
        , making it easy to choose the tone that matches any pitch, interview, or partnership
        discussion.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link
          href={portfolioUrl}
          target="_blank"
          rel="noreferrer"
          className="border-theme-primary/40 bg-theme-primary/10 text-theme-primary hover:border-theme-primary hover:bg-theme-primary/20 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition"
        >
          Explore Portfolio <ArrowUpRight className="h-4 w-4" />
        </Link>
        <div className="border-theme-border/40 text-theme-text/80 rounded-full border px-4 py-2 text-sm">
          3 PDF layouts · A4 · Theme adaptive
        </div>
      </div>
    </motion.div>
  );
}
