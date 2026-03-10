'use client';

import type { ContactPanelProps } from '@/components/types/landing/contact';

import { motion } from 'framer-motion';

export function StatusPanel({ isInView }: ContactPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="border-theme-border/40 shadow-theme-primary/10 overflow-hidden rounded-lg border shadow-xl backdrop-blur"
      style={{
        background:
          'linear-gradient(150deg, color-mix(in srgb, var(--color-surface) 80%, transparent), color-mix(in srgb, var(--color-background) 60%, transparent))',
        boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--color-border) 40%, transparent)',
      }}
    >
      <header className="border-theme-border/40 flex items-center gap-2 border-b px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="bg-theme-primary/70 h-2.5 w-2.5 rounded-full" />
          <span className="bg-theme-accent/70 h-2.5 w-2.5 rounded-full" />
          <span className="bg-theme-secondary/70 h-2.5 w-2.5 rounded-full" />
        </div>
        <span className="text-theme-text/80 font-mono text-xs tracking-[0.3em] uppercase">
          status.txt
        </span>
      </header>
      <div className="space-y-2 px-4 pt-3 pb-4 font-mono text-sm">
        <div className="flex gap-2">
          <span className="text-theme-primary">$</span>
          <span className="text-theme-text/90">cat status.txt</span>
        </div>
        <div className="space-y-1 pl-4">
          <address className="text-theme-text/85 not-italic">
            <div>
              <span className="text-theme-primary/80">Location:</span> Remote / Dhaka / Cumilla
            </div>
            <div>
              <span className="text-theme-accent/80">Availability:</span> Open to opportunities
            </div>
            <div>
              <span className="text-theme-secondary/80">Response Time:</span> {'<'} 24 hours
            </div>
          </address>
        </div>
        <div className="mt-4 flex gap-2">
          <span className="text-theme-primary">$</span>
          <span className="text-theme-text/60 animate-pulse">_</span>
        </div>
      </div>
    </motion.div>
  );
}
