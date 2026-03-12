'use client';

import type { Project } from '@/lib/types/project';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { featuredProjects, projects } from '@/lib/data/projects';
import { cn } from '@/lib/utils';
import { fadeUp } from 'config/animations';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type ProjectRowProps = {
  project: Project;
  index: number;
};

function ProjectRow({ project, index }: ProjectRowProps) {
  const isReversed = index % 2 === 1;
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-24"
    >
      {/* Image */}
      <div className={cn(isReversed && 'md:order-2')}>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="group relative overflow-hidden rounded-xl bg-[#080612]"
          style={{ boxShadow: 'var(--sh-lg)' }}
        >
          {/* Browser chrome */}
          <div
            className="relative z-10 flex h-7 items-center gap-2 px-3"
            style={{ background: 'rgba(8, 6, 18, 0.96)' }}
            aria-hidden="true"
          >
            <div className="flex shrink-0 gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            </div>
            {project.liveUrl && (
              <div className="mx-auto max-w-[55%] truncate rounded-full bg-white/10 px-3 py-0.5 text-center font-mono text-[0.6rem] text-white/40">
                {project.liveUrl.replace(/^https?:\/\//, '')}
              </div>
            )}
          </div>

          {/* Screenshot */}
          <div className="relative aspect-video">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Edge fade toward content side */}
            <div
              className="absolute inset-0"
              style={{
                background: isReversed
                  ? 'linear-gradient(to left, transparent 60%, color-mix(in srgb, var(--canvas) 18%, transparent))'
                  : 'linear-gradient(to right, transparent 60%, color-mix(in srgb, var(--canvas) 18%, transparent))',
              }}
            />
            {/* Hover overlay */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: 'color-mix(in srgb, var(--mag-500) 10%, transparent)' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className={cn(isReversed && 'md:order-1')}>
        {/* Project number + role */}
        <div className="mb-5 flex items-center gap-3">
          <span
            className="font-mono text-[0.65rem] font-bold tracking-[0.25em]"
            style={{ color: 'var(--mag-500)' }}
          >
            #{num}
          </span>
          <span className="bg-n100 h-px flex-1 max-w-6" aria-hidden="true" />
          <span className="text-n400 font-mono text-[0.65rem] tracking-[0.15em] uppercase">
            {project.role}
            {project.company && (
              <>
                <span className="text-n300 mx-1">·</span>
                <span style={{ color: 'var(--teal-600)' }}>{project.company}</span>
              </>
            )}
          </span>
        </div>

        <h3 className="font-display text-n900 mb-3 text-2xl font-extrabold tracking-tight md:text-3xl">
          {project.title}
        </h3>

        <p className="text-n500 mb-6 text-sm leading-relaxed md:text-base">{project.shortDesc}</p>

        {/* PDR highlights */}
        <dl className="mb-6 flex flex-col gap-2.5">
          {(
            [
              { label: 'Problem', value: project.problem },
              { label: 'Decision', value: project.decision },
              { label: 'Result', value: project.result },
            ] as const
          ).map(({ label, value }) => (
            <div key={label} className="flex gap-3 text-sm">
              <span
                className="mt-0.5 shrink-0 select-none font-mono text-[0.65rem] font-bold tracking-[0.15em] uppercase"
                style={{ color: 'var(--mag-500)', minWidth: '4.5rem' }}
              >
                {label}
              </span>
              <span className="text-n600 leading-relaxed">{value}</span>
            </div>
          ))}
        </dl>

        {/* Stack tags */}
        <div className="mb-8 flex flex-wrap gap-2">
          {project.stack.map(tag => (
            <Badge key={tag} variant="neutral">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm px-4 py-2 font-display text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              style={{ background: 'var(--mag-500)' }}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-n500 hover:text-n900 inline-flex items-center gap-2 font-display text-sm font-semibold transition-colors duration-200"
            >
              <Github size={14} />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="overflow-hidden py-24" style={{ background: 'var(--canvas)' }}>
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
            className="block h-px"
            style={{ background: 'var(--mag-500)' }}
            initial={{ width: 0 }}
            whileInView={{ width: 22 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
            viewport={{ once: true }}
          />
          <span className="text-n400 font-mono text-[11px] tracking-[0.25em] uppercase">
            {'// 03 · projects'}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          className="mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeading accent="Work">Featured Work</SectionHeading>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-col gap-24 md:gap-32">
          {featuredProjects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="border-n200 mt-20 flex items-center justify-center gap-3 border-t pt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Link
            href="/projects"
            className="font-display inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 transition-all duration-200 hover:gap-3.5 hover:underline"
            style={{ color: 'var(--mag-500)' }}
          >
            View All Projects
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <span className="border-n200 bg-n100 text-n500 rounded-sm border px-2 py-0.5 font-mono text-[10px]">
            {projects.length}+ shipped
          </span>
        </motion.div>
      </div>
    </section>
  );
}
