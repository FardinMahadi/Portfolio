'use client';

import type { Project } from '@/lib/types/project';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from 'config/animations';

import { cn } from '@/lib/utils';
import { ProjectGalleryCard } from '@/components/cards/ProjectGalleryCard';

type FilterKey = 'all' | 'frontend' | 'fullstack' | 'ai';

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'ai', label: 'AI' },
];

type ProjectsGalleryProps = {
  projects: Project[];
};

export function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [active, setActive] = useState<FilterKey>('all');

  const filtered =
    active === 'all' ? projects : projects.filter(p => p.category.includes(active));

  return (
    <div>
      {/* Filter bar */}
      <motion.div
        className="mb-10 flex flex-wrap gap-2"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {FILTERS.map(f => (
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

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
        >
          {filtered.length > 0 ? (
            filtered.map(project => (
              <motion.div key={project.slug} variants={staggerItem}>
                <ProjectGalleryCard project={project} />
              </motion.div>
            ))
          ) : (
            <motion.p
              variants={staggerItem}
              className="text-n400 col-span-full py-16 text-center font-mono text-sm"
            >
              No projects in this category yet.
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
