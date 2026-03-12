'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp } from 'config/animations';
import { Mail, MapPin } from 'lucide-react';

import { cn } from '@/lib/utils';
import { site } from '@/lib/data/site';
import { PulseDot } from '@/components/ui/PulseDot';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';

export function ContactSection({ className }: { className?: string }) {
  return (
    <section id="contact" className={cn('relative overflow-hidden py-32', className)}>
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 50%, color-mix(in srgb, var(--mag-500) 10%, transparent), var(--canvas))`,
        }}
      />
      <NoiseOverlay opacity={0.03} />

      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="mx-auto flex max-w-2xl flex-col items-center gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <SectionEyebrow number="06">Contact</SectionEyebrow>

          <h2 className="font-display text-n900 text-4xl font-bold md:text-5xl">
            Got something to build?
          </h2>

          <p className="text-n500 text-base leading-relaxed">
            I&apos;m available for freelance projects, contract roles, and interesting
            collaborations. If you have a product idea or a problem that needs engineering,
            let&apos;s talk.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="text-n400 flex items-center gap-2 font-mono text-xs">
              <PulseDot color="teal" />
              {site.location}
            </div>
            <div className="text-n400 flex items-center gap-2 font-mono text-xs">
              <MapPin size={12} />
              Remote-first
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-mag-500 font-display hover:bg-mag-400 inline-flex items-center gap-2 rounded-sm px-8 py-4 text-base font-bold text-white shadow-(--sh-mag) transition-all duration-200"
            >
              <Mail size={16} />
              Start a conversation
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="text-mag-500 font-mono text-sm underline-offset-4 hover:underline"
            >
              or email directly →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
