'use client';

import { ProjectCard } from '@/components/cards/ProjectCard';
import { ProjectScreenshotModal } from '@/components/effects/ProjectScreenshotModal';
import type { ModalProject } from '@/components/types/shared/effects';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { featuredProjects } from '@/lib/data/projects';
import type { Project } from '@/lib/types/project';
import { cn } from '@/lib/utils';
import { fadeUp } from 'config/animations';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';

type FilterKey = 'all' | 'frontend' | 'fullstack' | 'ai';

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'ai', label: 'AI' },
];

function toModalProject(p: Project): ModalProject {
  return {
    title: p.title,
    description: p.shortDesc,
    tags: p.stack,
    image: p.thumbnail,
    width: 1600,
    height: 900,
    liveUrl: p.liveUrl,
    codeUrl: p.codeUrl,
    role: p.role,
    gallery: p.screens.map(src => ({
      src,
      width: 1600,
      height: 900,
      alt: `${p.title} screenshot`,
    })),
  };
}

export function ProjectsSection({ className }: { className?: string }) {
  const [active, setActive] = useState<FilterKey>('all');
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const focusRef = useRef<HTMLElement | null>(null);

  const filtered =
    active === 'all' ? featuredProjects : featuredProjects.filter(p => p.category.includes(active));

  function openModal(project: Project, el: HTMLElement) {
    focusRef.current = el;
    setModalProject(project);
    setModalOpen(true);
  }

  return (
    <section id="projects" className={cn('bg-canvas py-24', className)}>
      <div className="container mx-auto px-4 md:px-10">
        {/* Eyebrow */}
        <motion.div
          className="mb-4 flex items-center gap-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.span
            className="bg-mag-500 block h-px"
            initial={{ width: 0 }}
            whileInView={{ width: 22 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
            viewport={{ once: true }}
          />
          <span className="text-n400 font-mono text-[11px] tracking-[0.25em] uppercase">
            // 02 · projects
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          className="mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeading accent="Work">Featured Work</SectionHeading>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          className="mb-10 flex flex-wrap gap-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <LayoutGroup id="project-filters">
            {FILTERS.map(f => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={cn(
                  'relative rounded-sm border px-4 py-1.5 font-mono text-[0.7rem] tracking-widest uppercase transition-colors duration-200',
                  active === f.key
                    ? 'border-mag-400 text-white'
                    : 'border-n200 bg-canvas-raised text-n500 hover:border-mag-300 hover:text-mag-500'
                )}
              >
                {active === f.key && (
                  <motion.span
                    layoutId="active-pill"
                    className="bg-mag-500 absolute inset-0 rounded-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            ))}
          </LayoutGroup>
        </motion.div>

        {/* Card stack */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="flex flex-col gap-7"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <ProjectCard project={project} onOpenModal={openModal} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <motion.div
          className="mt-14 flex items-center justify-center gap-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Link
            href="/projects"
            className="font-display text-mag-500 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 transition-all duration-200 hover:gap-3.5 hover:underline"
          >
            View All Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M8 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <span className="border-n200 bg-n100 text-n500 rounded-sm border px-2 py-0.5 font-mono text-[10px]">
            10+ shipped
          </span>
        </motion.div>
      </div>

      <ProjectScreenshotModal
        project={modalProject ? toModalProject(modalProject) : null}
        isOpen={modalOpen}
        modalId="projects-section-modal"
        onClose={() => setModalOpen(false)}
        focusReturnPoint={focusRef.current}
      />
    </section>
  );
}
