'use client';

import type { ProjectsSectionProps } from '@/components/types/sections/projects';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { featuredProjects, projects } from '@/lib/data/projects';

function ProjectGridItem({
  project,
  index,
}: {
  project: (typeof featuredProjects)[number];
  index: number;
}) {
  const { slug, title, shortDesc, role, company, stack, liveUrl, codeUrl, thumbnail } = project;
  const visibleStack = stack.slice(0, 4);
  const overflow = stack.length - 4;

  return (
    <article
      className="group border-n200 bg-canvas-raised relative overflow-hidden rounded-sm border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-(--sh-mag)"
      aria-label={title}
    >
      <div className="bg-mag-500 absolute inset-y-0 left-0 w-[3px] opacity-40 transition-opacity duration-300 group-hover:opacity-100" />

      <Link
        href={`/projects/${slug}`}
        className="focus-visible:ring-mag-500 bg-canvas-dark relative block h-56 overflow-hidden focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset"
        aria-label={`View ${title} project details`}
      >
        <div
          className="absolute top-0 right-0 left-0 z-10 flex h-7 items-center gap-1.5 px-3"
          style={{ background: 'color-mix(in srgb, var(--canvas-dark) 92%, transparent)' }}
          aria-hidden="true"
        >
          <span className="bg-mag-400 h-2.5 w-2.5 rounded-full" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
          <span className="bg-n300 h-2.5 w-2.5 rounded-full" />
        </div>

        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover object-top opacity-85 transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, transparent 52%, color-mix(in srgb, var(--canvas-dark) 28%, transparent))',
          }}
        />
      </Link>

      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center gap-2">
          <span className="text-mag-500 font-mono text-[0.65rem] font-bold tracking-[0.2em]">
            #{String(index + 1).padStart(2, '0')}
          </span>
          <span className="bg-n200 h-px w-8" aria-hidden="true" />
          <span className="text-n400 font-mono text-[0.65rem] tracking-[0.12em] uppercase">
            featured
          </span>
        </div>

        <div>
          <h3 className="font-display text-n900 text-xl font-bold tracking-tight">{title}</h3>
          <p className="text-n500 mt-1 text-sm leading-relaxed">{shortDesc}</p>
        </div>

        <p className="text-n400 font-mono text-[0.65rem] tracking-[0.14em] uppercase">
          {role}
          {company ? (
            <>
              <span className="text-n300 mx-1.5">·</span>
              <span className="text-teal-600">{company}</span>
            </>
          ) : null}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {visibleStack.map(tech => (
            <Badge key={tech} variant="neutral">
              {tech}
            </Badge>
          ))}
          {overflow > 0 ? <Badge variant="neutral">+{overflow} more</Badge> : null}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          <Link
            href={`/projects/${slug}`}
            className="font-display inline-flex items-center gap-1.5 rounded-sm px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:brightness-110"
            style={{
              background: 'linear-gradient(135deg, var(--mag-700), var(--mag-500))',
              boxShadow: 'var(--sh-mag)',
            }}
          >
            View Case Study
            <ArrowRight size={14} aria-hidden="true" />
          </Link>

          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-n200 text-n600 font-display inline-flex items-center gap-1.5 rounded-sm border bg-transparent px-4 py-2 text-sm font-semibold transition-all duration-200 hover:border-teal-400 hover:text-teal-500"
            >
              Live Demo
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          ) : null}

          {codeUrl ? (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-n200 text-n600 font-display hover:border-n400 hover:text-n900 inline-flex items-center gap-1.5 rounded-sm border bg-transparent px-4 py-2 text-sm font-semibold transition-all duration-200"
            >
              <Github size={14} aria-hidden="true" />
              Code
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection({ className }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className={cn('bg-canvas relative overflow-hidden py-24', className)}
      aria-label="Featured projects"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 50%, color-mix(in srgb, var(--mag-050) 10%, transparent), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-12 flex flex-col gap-4">
          <span className="text-n400 font-mono text-[0.65rem] tracking-[0.12em]">
            // 02_projects
          </span>
          <SectionEyebrow number="02">Projects</SectionEyebrow>
          <SectionHeading accent="Work">Featured Work</SectionHeading>
          <p className="text-n500 max-w-2xl text-base leading-relaxed">
            Every project is a decision log - what problem needed solving, what trade-off was made,
            and what shipped.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectGridItem key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--n200)] pt-6">
          <p className="text-n400 font-mono text-[0.68rem] tracking-[0.14em] uppercase">
            {projects.length}+ shipped projects
          </p>
          <Link
            href="/projects"
            className="text-mag-500 font-display inline-flex items-center gap-2 text-sm font-bold underline-offset-4 transition-all duration-200 hover:gap-3 hover:underline"
          >
            View All Projects
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
