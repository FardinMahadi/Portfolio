'use client';

import type { ExperienceCardProps } from '@/components/types/cards/cards';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

const TYPE_LABEL: Record<string, string> = {
  'full-time': 'Full-time',
  freelance: 'Freelance',
  contract: 'Contract',
  'part-time': 'Part-time',
};

export function ExperienceCard({ entry, isLast, className }: ExperienceCardProps) {
  const { company, role, type, startDate, endDate, impact, description, stack } = entry;
  const isCurrent = endDate === 'present';

  const start = new Date(startDate).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
  const end = isCurrent
    ? 'Present'
    : new Date(endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

  return (
    <div className={cn('relative flex gap-6', className)}>
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <motion.div
          className={cn(
            'mt-1.5 h-3 w-3 shrink-0 rounded-full border-2',
            isCurrent ? 'border-mag-500 bg-mag-500' : 'border-mag-500 bg-canvas'
          )}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.3, ease: 'backOut' }}
        />
        {!isLast && (
          <motion.div
            className="bg-n200 w-px flex-1"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          />
        )}
      </div>

      {/* Content */}
      <div className={cn('flex flex-col gap-3 pb-10', isLast && 'pb-0')}>
        <div className={cn(isCurrent && 'border-mag-200 bg-canvas-raised rounded-sm border p-4')}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-display text-n900 text-lg font-bold">{role}</span>
            <span className="text-n400 font-mono text-[0.65rem] tracking-[0.15em] uppercase">
              {TYPE_LABEL[type]}
            </span>
          </div>

          <div className="mt-2 flex flex-wrap gap-3">
            <span className="font-display text-mag-500 text-base font-semibold">{company}</span>
            <span className="text-n400 flex items-center gap-1.5 font-mono text-xs">
              {start} —{' '}
              {isCurrent ? (
                <span className="flex items-center gap-1.5">
                  <motion.span
                    className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  />
                  <span className="text-teal-600">Present</span>
                </span>
              ) : (
                end
              )}
            </span>
          </div>

          <p className="text-n700 mt-3 text-sm font-medium">{impact}</p>

          <ul className="mt-3 flex flex-col gap-1.5">
            {description.map((item, i) => (
              <li key={i} className="text-n500 flex gap-2 text-sm">
                <span className="text-mag-500">▹</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {stack.map(tech => (
              <Badge key={tech} variant="neutral">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
