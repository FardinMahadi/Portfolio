'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Note: Metadata export is not supported in client components
// Metadata will be handled by the layout or through other means

export default function NotFound() {
  return (
    <div
      className="text-theme-text flex min-h-screen items-center justify-center bg-(--color-background) px-4"
      style={{
        background:
          'radial-gradient(circle at top left, color-mix(in srgb, var(--color-primary) 22%, transparent), transparent 55%), radial-gradient(circle at bottom right, color-mix(in srgb, var(--color-accent) 20%, transparent), transparent 60%), var(--color-background)',
      }}
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Terminal-style error display */}
          <div
            className="border-theme-border/60 shadow-theme-primary/10 mb-8 rounded-lg border p-8 shadow-lg backdrop-blur"
            style={{
              background:
                'linear-gradient(to bottom right, color-mix(in srgb, var(--color-surface) 92%, transparent), color-mix(in srgb, var(--color-background) 88%, transparent))',
            }}
          >
            <div className="border-theme-border/60 bg-theme-surface/80 mb-4 flex items-center gap-2 rounded-t-lg border p-3 backdrop-blur">
              <div className="flex gap-1.5">
                <div className="bg-theme-primary/70 h-3 w-3 rounded-full" />
                <div className="bg-theme-accent/70 h-3 w-3 rounded-full" />
                <div className="bg-theme-secondary/70 h-3 w-3 rounded-full" />
              </div>
              <div className="ml-4 font-mono text-sm text-slate-400">~/error/404.ts</div>
            </div>

            <div className="text-theme-text/80 space-y-4 text-left font-mono">
              <div className="flex gap-4">
                <div className="text-theme-text/45 text-sm select-none">1</div>
                <div className="flex-1">
                  <span className="text-theme-accent">console</span>
                  <span className="text-theme-text/60">.</span>
                  <span className="text-theme-secondary">error</span>
                  <span className="text-theme-text/60">(</span>
                  <span className="text-theme-primary">&apos;404: Page Not Found&apos;</span>
                  <span className="text-theme-text/60">);</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-theme-text/45 text-sm select-none">2</div>
                <div className="flex-1">
                  <span className="text-theme-secondary">const</span>{' '}
                  <span className="text-theme-primary/90">error</span>{' '}
                  <span className="text-theme-accent/80">=</span>{' '}
                  <span className="text-theme-primary">&apos;Page does not exist&apos;</span>
                  <span className="text-theme-text/60">;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Error message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-theme-primary mb-4 font-mono text-6xl font-bold">404</h1>
            <h2 className="text-theme-text mb-4 font-mono text-2xl">Page Not Found</h2>
            <p className="text-theme-text/70 mx-auto max-w-md">
              The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get
              you back on track.
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="text-theme-primary-foreground min-h-[44px] shadow-lg transition-all duration-300 hover:shadow-xl"
              style={{
                background:
                  'linear-gradient(to right, var(--color-primary), var(--color-secondary))',
                boxShadow:
                  '0 10px 15px -3px rgba(0,0,0,0.2), 0 4px 6px -2px rgba(0,0,0,0.12), 0 0 25px -8px var(--color-primary)',
              }}
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-theme-border/70 text-theme-text/80 hover:border-theme-accent hover:bg-theme-surface/70 hover:text-theme-accent min-h-[44px] transition-all duration-300"
            >
              <Link
                href="#"
                onClick={e => {
                  e.preventDefault();
                  window.history.back();
                }}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Link>
            </Button>
          </motion.div>

          {/* Terminal prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-theme-border/60 bg-theme-surface/80 mx-auto mt-12 max-w-md rounded-lg border p-4 font-mono text-sm backdrop-blur"
          >
            <div className="flex gap-2">
              <span className="text-theme-primary">$</span>
              <span className="text-theme-text/70">cd /home</span>
            </div>
            <div className="mt-2 flex gap-2">
              <span className="text-theme-primary">$</span>
              <span className="text-theme-text/60 animate-pulse">_</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
