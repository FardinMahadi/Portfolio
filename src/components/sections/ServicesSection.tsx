'use client';

import { ServiceCard } from '@/components/cards/ServiceCard';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/lib/data/skills';
import { cn } from '@/lib/utils';
import { fadeUp, staggerContainer, staggerItem } from 'config/animations';
import { motion } from 'framer-motion';
import { Code2, Figma, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';

const ICON_MAP: Record<string, ReactNode> = {
  Code2: <Code2 size={20} />,
  Figma: <Figma size={20} />,
  Sparkles: <Sparkles size={20} />,
};

export function ServicesSection({ className }: { className?: string }) {
  return (
    <section id="services" className={cn('bg-canvas relative overflow-hidden py-24', className)}>
      {/* Ambient magenta glow — left side */}
      <div
        className="pointer-events-none absolute top-1/2 -left-32 h-[600px] w-[500px] -translate-y-1/2"
        style={{
          background:
            'radial-gradient(ellipse, color-mix(in srgb, var(--mag-500) 5%, transparent) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header — two-column split */}
        <motion.div
          className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="flex flex-col gap-4">
            <SectionEyebrow number="01">What I Do</SectionEyebrow>
            <SectionHeading accent="engineer">I design, build, and ship.</SectionHeading>
          </div>

          <div className="text-n400 flex flex-col gap-2 font-mono text-[0.7rem] tracking-[0.06em] lg:items-end lg:text-right">
            <span>// three focused disciplines</span>
            <span>// shipped in production</span>
            <span>// one goal: solve real problems</span>
          </div>
        </motion.div>

        {/* Cards + connector line */}
        <div className="relative">
          {/* Horizontal connector line */}
          <div
            className="absolute top-[52px] right-0 left-0 hidden h-px lg:block"
            style={{
              background:
                'linear-gradient(90deg, transparent, color-mix(in srgb, var(--mag-500) 20%, transparent) 30%, color-mix(in srgb, var(--mag-500) 20%, transparent) 70%, transparent)',
            }}
          />

          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {services.map((service, i) => (
              <motion.div key={service.title} variants={staggerItem}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  stack={service.stack}
                  icon={ICON_MAP[service.icon]}
                  number={String(i + 1).padStart(2, '0')}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
