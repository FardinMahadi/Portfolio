'use client';

import type { HeroPhotoProps } from '@/components/types/hero/hero';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CLIP = 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)';

export function HeroPhoto({ src, alt, className }: HeroPhotoProps) {
  return (
    <motion.div
      className={cn('absolute inset-0', className)}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
    >
      {/* Magenta glow orb */}
      <motion.div
        className="pointer-events-none absolute top-1/4 left-1/4 h-[400px] w-[300px]"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        style={{
          clipPath: CLIP,
          background:
            'radial-gradient(ellipse, color-mix(in srgb, var(--mag-500) 35%, transparent) 0%, transparent 70%)',
        }}
      />

      {/* Photo + floating metric cards */}
      <div className="absolute inset-0 flex items-end justify-center" style={{ clipPath: CLIP }}>
        <div className="relative">
          {/* Floating metric card — top left */}
          <div
            className="absolute top-8 -left-2.5 z-10 rounded-[10px] border border-white/12 p-3 font-mono backdrop-blur-md"
            style={{ background: 'rgba(12, 8, 20, 0.75)' }}
          >
            <div className="mb-1 text-[0.6rem] tracking-[0.08em] text-white/35 uppercase">
              Engineering
            </div>
            <div className="text-[0.72rem] text-teal-300">MERN STACK</div>
            <div className="text-[0.72rem] text-teal-300">SCALABLE ARCH.</div>
          </div>

          {/* Floating metric card — bottom right */}
          <div
            className="absolute -right-5 bottom-20 z-10 rounded-[10px] border border-white/12 p-3 font-mono backdrop-blur-md"
            style={{ background: 'rgba(12, 8, 20, 0.75)' }}
          >
            <div className="mb-1 text-[0.6rem] tracking-[0.08em] text-white/35 uppercase">
              Specialized
            </div>
            <div className="text-mag-300 text-[0.72rem]">UI/UX PERF.</div>
            <div className="text-mag-300 text-[0.72rem]">API OPTIM.</div>
          </div>

          {/* Photo */}
          <div className="relative h-[480px] w-[480px]">
            <Image src={src} alt={alt} fill className="object-cover object-top" priority />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
