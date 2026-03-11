'use client';

import { Badge } from '@/components/ui/Badge';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skills } from '@/lib/data/skills';
import { cn } from '@/lib/utils';
import { fadeUp, staggerContainer, staggerItem } from 'config/animations';
import { motion } from 'framer-motion';

export function SkillsSection({ className }: { className?: string }) {
  return (
    <section id="skills" className={cn('bg-canvas-sunken py-24', className)}>
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 flex flex-col gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <SectionEyebrow number="04">Tech Stack</SectionEyebrow>
          <SectionHeading accent="tools">The tools I reach for.</SectionHeading>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skills.map(category => (
            <motion.div key={category.label} variants={staggerItem} className="flex flex-col gap-3">
              <p className="text-mag-500 font-mono text-[0.68rem] font-medium tracking-[0.2em] uppercase">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map(skill => (
                  <Badge key={skill} variant="neutral">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
