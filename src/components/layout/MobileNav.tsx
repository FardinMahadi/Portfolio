'use client';

import type { MobileNavProps } from '@/components/types/layout/layout';
import { site } from '@/lib/data/site';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-canvas-dark/60 fixed inset-0 z-40 backdrop-blur-sm"
            onClick={onClose}
          />
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-canvas fixed top-0 right-0 z-50 flex h-full w-80 flex-col px-8 py-8 shadow-(--sh-xl)"
          >
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="text-n500 hover:text-n900 mb-10 ml-auto flex h-9 w-9 items-center justify-center rounded-sm transition-colors"
            >
              <X size={20} />
            </button>

            <nav className="flex flex-col gap-6">
              {site.nav.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={onClose}
                  className={cn(
                    'font-display text-2xl font-bold transition-colors duration-200',
                    (!href.includes('#') && pathname === href) ? 'text-mag-500' : 'text-n800 hover:text-mag-500'
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto space-y-4">
              <a
                href="/docs/mahadi-hasan-fardin-cv.pdf"
                download="Mahadi_Hasan_Fardin_CV.pdf"
                onClick={onClose}
                className="bg-mag-500 font-display hover:bg-mag-400 flex w-full items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold text-white shadow-(--sh-mag) transition-all"
              >
                Download CV
              </a>
              <p className="text-n400 text-center font-mono text-xs">{site.location}</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
