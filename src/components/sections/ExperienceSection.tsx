'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from 'config/animations';

import { cn } from '@/lib/utils';
import { site } from '@/lib/data/site';
import { education, experience } from '@/lib/data/experience';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ExperienceCard } from '@/components/cards/ExperienceCard';

export function ExperienceSection({ className }: { className?: string }) {
  return (
    <section id="experience" className={cn('relative overflow-hidden py-24', className)}>
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 0% 50%, color-mix(in srgb, var(--mag-050) 8%, transparent), transparent)',
        }}
      />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-12 flex flex-col gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="text-n400 font-mono text-[0.65rem] tracking-[0.12em]">// 03_career</span>
          <SectionEyebrow number="03">Career</SectionEyebrow>
          <SectionHeading accent="built">Where I&apos;ve built.</SectionHeading>
          <p className="text-n500 max-w-xl text-base leading-relaxed">
            A focused track record — remote-first, impact-driven, and always shipping.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="mb-12 flex flex-wrap gap-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {site.stats.map((s, i) => (
            <div key={i} className="flex items-baseline gap-2">
              <span className="font-display text-mag-500 text-2xl font-bold">
                {s.value}
                {s.suffix}
              </span>
              <span className="text-n400 font-mono text-xs">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_auto]">
          {/* Left — work experience */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3 className="text-n400 mb-8 font-mono text-[0.7rem] tracking-widest uppercase">
              Work Experience
            </h3>
            {experience.map((entry, i) => (
              <motion.div key={`${entry.company}-${entry.startDate}`} variants={staggerItem}>
                <ExperienceCard entry={entry} isLast={i === experience.length - 1} />
              </motion.div>
            ))}
          </motion.div>

          {/* Right — education */}
          <motion.div
            className="w-full lg:w-80"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3 className="text-n400 mb-8 font-mono text-[0.7rem] tracking-widest uppercase">
              Education
            </h3>
            {education.map((edu, i) => {
              const start = new Date(edu.startDate).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
              });
              const end =
                edu.endDate === 'present'
                  ? 'Present'
                  : new Date(edu.endDate).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    });
              return (
                <motion.div key={i} variants={staggerItem} className="relative flex gap-5">
                  {/* Spine */}
                  <div className="flex flex-col items-center">
                    <div className="border-n300 bg-canvas mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2" />
                    {i < education.length - 1 && <div className="bg-n200 w-px flex-1" />}
                  </div>
                  {/* Content */}
                  <div className={cn('flex flex-col gap-2', i < education.length - 1 && 'pb-8')}>
                    <span className="font-display text-n900 text-base font-bold">
                      {edu.institution}
                    </span>
                    <span className="text-mag-500 font-mono text-[0.65rem] tracking-[0.12em] uppercase">
                      {edu.degree} · {edu.field}
                    </span>
                    <span className="text-n400 font-mono text-xs">
                      {start} — {end}
                    </span>
                    {edu.highlights && (
                      <ul className="mt-1 flex flex-col gap-1">
                        {edu.highlights.map((h, j) => (
                          <li key={j} className="text-n500 flex gap-2 text-sm">
                            <span className="text-n300">▹</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
