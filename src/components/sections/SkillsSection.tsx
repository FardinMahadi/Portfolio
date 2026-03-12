'use client';

import { SkillCard } from '@/components/cards/SkillCard';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skills } from '@/lib/data/skills';
import { cn } from '@/lib/utils';
import { fadeUp, staggerContainer, staggerItem } from 'config/animations';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type FilterKey = 'all' | string;

export function SkillsSection({ className }: { className?: string }) {
  const [active, setActive] = useState<FilterKey>('all');

  const filters = [
    { key: 'all', label: 'All' },
    ...skills.map(c => ({ key: c.label, label: c.label })),
  ];
  const visible = active === 'all' ? skills : skills.filter(c => c.label === active);

  return (
    <section id="skills" className={cn('bg-canvas-sunken py-24', className)}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-12 flex flex-col gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="text-n400 font-mono text-[0.65rem] tracking-[0.12em]">
            {'// 04_tech_stack'}
          </span>
          <SectionEyebrow number="04">Tech Stack</SectionEyebrow>
          <SectionHeading accent="tools">The tools I reach for.</SectionHeading>
          <p className="text-n500 max-w-xl text-base leading-relaxed">
            Chosen for shipping speed, type safety, and long-term maintainability.
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          className="mb-10 flex flex-wrap gap-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={cn(
                'rounded-sm border px-4 py-1.5 font-mono text-[0.7rem] tracking-widest uppercase transition-all duration-200',
                active === f.key
                  ? 'border-mag-400 bg-mag-500 text-white'
                  : 'border-n200 bg-canvas-raised text-n500 hover:border-mag-300 hover:text-mag-500'
              )}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Category cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            {visible.map(category => (
              <motion.div
                key={category.label}
                variants={staggerItem}
                className="group border-n200 bg-canvas-raised hover:border-mag-200 relative flex flex-col gap-4 rounded-sm border p-5 transition-all duration-300 hover:shadow-(--sh-mag)"
              >
                {/* Left accent bar */}
                <div className="bg-mag-500 absolute inset-y-0 left-0 w-[3px] rounded-l-sm opacity-40 transition-opacity duration-300 group-hover:opacity-100" />

                <p className="text-mag-500 font-mono text-[0.68rem] font-medium tracking-[0.2em] uppercase">
                  {category.label}
                </p>

                <div className="flex flex-col gap-1.5">
                  {category.skills.map(skill => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
