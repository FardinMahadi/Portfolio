'use client';

import { ExperienceCard } from '@/components/cards/ExperienceCard';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experience } from '@/lib/data/experience';
import { cn } from '@/lib/utils';
import { fadeUp, staggerContainer, staggerItem } from 'config/animations';
import { motion } from 'framer-motion';

export function ExperienceSection({ className }: { className?: string }) {
  return (
    <section id="experience" className={cn('py-24', className)}>
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 flex flex-col gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <SectionEyebrow number="03">Career</SectionEyebrow>
          <SectionHeading accent="built">Where I&apos;ve built.</SectionHeading>
          <p className="text-n500 max-w-xl text-base leading-relaxed">
            A focused track record — remote-first, impact-driven, and always shipping.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {experience.map((entry, i) => (
            <motion.div key={`${entry.company}-${entry.startDate}`} variants={staggerItem}>
              <ExperienceCard entry={entry} isLast={i === experience.length - 1} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
