'use client';

import type { ProjectCardProps } from '@/components/types/cards/cards';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { FileTab } from '@/components/ui/FileTab';

const VISIBLE_TAGS = 4;

const btnBase =
  'inline-flex items-center gap-1.5 rounded-sm font-display font-semibold transition-all duration-200 select-none text-sm px-4 py-2';

export function ProjectCard({
  project,
  variant = 'default',
  onOpenModal,
  className,
}: ProjectCardProps) {
  const {
    slug,
    title,
    shortDesc,
    problem,
    decision,
    result,
    role,
    company,
    stack,
    liveUrl,
    codeUrl,
    thumbnail,
  } = project;

  const visibleStack = stack.slice(0, VISIBLE_TAGS);
  const overflow = stack.length - VISIBLE_TAGS;

  const imageZone = (
    <button
      type="button"
      onClick={e => onOpenModal(project, e.currentTarget)}
      aria-label={`View ${title} screenshots`}
      className={cn(
        'focus-visible:ring-mag-500 relative block w-full cursor-pointer overflow-hidden bg-[#080612] focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset',
        variant === 'hero' ? 'h-72' : 'min-h-80'
      )}
    >
      {/* Browser chrome mockup */}
      <div
        className="absolute top-0 right-0 left-0 z-10 flex h-7 items-center gap-2 px-3"
        style={{ background: 'rgba(8, 6, 18, 0.96)' }}
        aria-hidden="true"
      >
        <div className="flex shrink-0 gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        </div>
        {liveUrl && (
          <div className="mx-auto max-w-[55%] truncate rounded-full bg-white/10 px-3 py-0.5 text-center font-mono text-[0.6rem] text-white/40">
            {liveUrl.replace(/^https?:\/\//, '')}
          </div>
        )}
      </div>
      {thumbnail ? (
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
          sizes={variant === 'hero' ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-n500 font-mono text-xs opacity-40">no preview</span>
        </div>
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            variant === 'hero'
              ? 'linear-gradient(to bottom, transparent 55%, var(--canvas-raised))'
              : 'linear-gradient(to right, transparent 60%, var(--canvas-raised))',
        }}
      />
      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'color-mix(in srgb, var(--mag-500) 12%, transparent)' }}
      >
        <span className="rounded-sm border border-white/20 bg-black/30 px-3 py-1.5 font-mono text-[0.65rem] font-medium tracking-[0.15em] text-white uppercase backdrop-blur-sm">
          View Screenshots →
        </span>
      </div>
    </button>
  );

  const pdrBlock = (
    <dl className="flex flex-col gap-2">
      {[
        { label: 'Problem', value: problem },
        { label: 'Decision', value: decision },
        { label: 'Result', value: result },
      ].map(({ label, value }) => (
        <div key={label} className="grid grid-cols-[5rem_1fr] items-start gap-2">
          <dt className="text-mag-500 font-mono text-[0.65rem] font-medium tracking-[0.15em] uppercase">
            {label}
          </dt>
          <dd className="text-n600 text-xs leading-relaxed">{value}</dd>
        </div>
      ))}
    </dl>
  );

  const metaBlock = (
    <>
      <p className="text-n400 font-mono text-[0.68rem] tracking-[0.15em] uppercase">
        Role: <span className="text-n700">{role}</span>
        {company && (
          <>
            <span className="text-n300 mx-1.5">·</span>
            <span className="text-teal-600">{company}</span>
          </>
        )}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {visibleStack.map(tech => (
          <Badge key={tech} variant="neutral">
            {tech}
          </Badge>
        ))}
        {overflow > 0 && <Badge variant="neutral">+{overflow} more</Badge>}
      </div>
      <div className="mt-auto flex flex-wrap gap-2">
        <Link
          href={`/projects/${slug}`}
          className={cn(
            btnBase,
            'text-white shadow-(--sh-mag) transition-all hover:-translate-y-px hover:brightness-110 active:translate-y-0'
          )}
          style={{ background: 'linear-gradient(135deg, var(--mag-700), var(--mag-500))' }}
        >
          View Case Study
          <ArrowRight size={14} />
        </Link>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              btnBase,
              'border-n200 text-n600 border bg-transparent transition-all hover:border-teal-400 hover:text-teal-500'
            )}
          >
            Live Demo
            <ExternalLink size={14} />
          </a>
        )}
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              btnBase,
              'border-n200 text-n600 hover:border-n400 hover:text-n900 border bg-transparent transition-all'
            )}
          >
            <Github size={14} />
            Code
          </a>
        )}
      </div>
    </>
  );

  if (variant === 'hero') {
    return (
      <article
        className={cn(
          'group border-n200 bg-canvas-raised hover:border-mag-300 relative overflow-hidden rounded-sm border transition-all duration-300 hover:shadow-(--sh-mag)',
          className
        )}
      >
        <div className="bg-mag-500 absolute inset-y-0 left-0 w-[3px] opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
        {imageZone}
        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <FileTab path={`projects/${slug}`} active />
            <div>
              <h3 className="font-display text-n900 text-2xl font-bold">{title}</h3>
              <p className="text-n500 mt-1 text-sm">{shortDesc}</p>
            </div>
            {pdrBlock}
          </div>
          <div className="flex flex-col gap-4">{metaBlock}</div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        'group border-n200 bg-canvas-raised hover:border-mag-300 relative grid grid-cols-1 overflow-hidden rounded-sm border transition-all duration-300 hover:shadow-(--sh-mag) md:grid-cols-2',
        className
      )}
    >
      <div className="bg-mag-500 absolute inset-y-0 left-0 w-[3px] opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
      {imageZone}
      <div className="flex flex-col gap-4 p-6">
        <FileTab path={`projects/${slug}`} active />
        <div>
          <h3 className="font-display text-n900 text-xl font-bold">{title}</h3>
          <p className="text-n500 mt-1 text-sm">{shortDesc}</p>
        </div>
        {pdrBlock}
        {metaBlock}
      </div>
    </article>
  );
}
