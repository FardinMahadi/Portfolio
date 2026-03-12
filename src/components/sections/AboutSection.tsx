'use client';

import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';
import { fadeUp, staggerContainer, staggerItem } from 'config/animations';
import { motion } from 'framer-motion';

const HIGHLIGHTS = [
  { label: 'Stack', value: 'MERN · Next.js · TypeScript' },
  { label: 'Focus', value: 'Full-stack + AI Integration' },
  { label: 'Status', value: '▹ Open to collaboration' },
] as const;

export function AboutSection({ className }: { className?: string }) {
  return (
    <section id="about" className={cn('bg-canvas-sunken py-24', className)}>
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 flex flex-col gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="text-n400 font-mono text-[0.65rem] tracking-[0.12em]">// 00_about</span>
          <SectionEyebrow number="00">About</SectionEyebrow>
          <SectionHeading accent="build">I design, build, and ship.</SectionHeading>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Bio */}
          <motion.div variants={staggerItem} className="flex flex-col gap-5">
            <p className="text-n600 text-lg leading-relaxed">
              Full-stack engineer crafting resilient, accessible digital products with React,
              Next.js, and expressive motion design. I love bringing complex ideas to life with
              clean code and thoughtful storytelling.
            </p>
            <p className="text-n500 text-base leading-relaxed">
              From conference platforms at DevGenit to AI-powered learning tools, I partner closely
              with founders and product teams to ship experiences that feel as good as they look.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div variants={staggerItem} className="flex flex-col gap-3">
            {HIGHLIGHTS.map(({ label, value }) => (
              <div
                key={label}
                className="border-n200 bg-canvas-raised flex items-center gap-4 rounded-sm border px-5 py-4"
              >
                <span className="text-mag-500 shrink-0 font-mono text-[0.65rem] tracking-[0.15em] uppercase">
                  {label}
                </span>
                <span className="bg-n200 h-3 w-px shrink-0" />
                <span className="text-n700 font-mono text-sm">{value}</span>
              </div>
            ))}

            <div
              className="mt-2 rounded-sm px-5 py-4 font-mono text-sm"
              style={{
                background: 'color-mix(in srgb, var(--mag-500) 6%, var(--canvas-raised))',
                border: '1px solid color-mix(in srgb, var(--mag-500) 18%, transparent)',
              }}
            >
              <span className="text-n400">$ cat availability.txt</span>
              <br />
              <span className="text-mag-500">
                ✓ Available for collaborative builds &amp; speaking
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
