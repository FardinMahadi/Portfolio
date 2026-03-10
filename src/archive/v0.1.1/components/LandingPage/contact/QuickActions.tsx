'use client';

import type { ContactPanelProps } from '@/components/types/landing/contact';

import { motion } from 'framer-motion';
import { FileText, Mail } from 'lucide-react';

export function QuickActions({ isInView }: ContactPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="border-theme-border/40 shadow-theme-primary/5 rounded-xl border p-6 shadow-xl backdrop-blur-sm"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in srgb, var(--color-surface) 80%, transparent), color-mix(in srgb, var(--color-background) 65%, transparent))',
      }}
    >
      <h3 className="text-theme-text/90 mb-4 font-mono text-sm tracking-[0.3em] uppercase">
        Quick Actions
      </h3>
      <div className="space-y-3">
        <a
          href="mailto:mahadihasanfardin2015@gmail.com"
          className="border-theme-border/40 text-theme-text hover:border-theme-primary/70 shadow-theme-primary/5 flex min-h-[44px] items-center justify-between rounded-lg border px-4 py-3 shadow-lg transition-colors hover:text-white"
          style={{
            background:
              'linear-gradient(120deg, color-mix(in srgb, var(--color-surface) 65%, transparent), color-mix(in srgb, var(--color-primary) 10%, transparent))',
          }}
        >
          <div className="flex items-center gap-3">
            <Mail className="text-theme-primary h-5 w-5 drop-shadow-[0_0_8px_rgba(6,182,212,0.45)]" />
            <div>
              <p className="text-theme-text font-medium">Send me an email</p>
              <span className="text-theme-text/80 text-sm">mahadihasanfardin2015@gmail.com</span>
            </div>
          </div>
          <span aria-hidden="true">↗</span>
        </a>
        <a
          href="/mahadi-hasan-fardin-cv.pdf"
          download="mahadi-hasan-fardin-cv.pdf"
          className="border-theme-border/40 text-theme-text hover:border-theme-primary/70 shadow-theme-primary/5 flex min-h-[44px] items-center justify-between rounded-lg border px-4 py-3 shadow-lg transition-colors hover:text-white"
          aria-label="Download CV"
          style={{
            background:
              'linear-gradient(120deg, color-mix(in srgb, var(--color-surface) 65%, transparent), color-mix(in srgb, var(--color-secondary) 10%, transparent))',
          }}
        >
          <div className="flex items-center gap-3">
            <FileText className="text-theme-secondary h-5 w-5 drop-shadow-[0_0_8px_rgba(139,92,246,0.45)]" />
            <div>
              <p className="text-theme-text font-medium">Download my CV</p>
              <span className="text-theme-text/80 text-sm">Updated November 2025</span>
            </div>
          </div>
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </motion.div>
  );
}
