'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import type { ProjectCardProps } from '@/components/types/cards/cards';
import { Badge } from '@/components/ui/Badge';
import { FileTab } from '@/components/ui/FileTab';
import { cn } from '@/lib/utils';

const btnBase =
  'inline-flex items-center gap-1.5 rounded-sm font-display font-semibold transition-all duration-200 select-none text-sm px-4 py-2';

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { slug, title, shortDesc, problem, decision, result, role, stack, liveUrl, codeUrl, thumbnail } = project;

  return (
    <article
      className={cn(
        'group grid grid-cols-1 overflow-hidden rounded-sm border border-n200 bg-canvas-raised transition-shadow duration-300 hover:shadow-(--sh-mag) md:grid-cols-2',
        className,
      )}
    >
      {/* Image zone */}
      <div className="relative min-h-52 overflow-hidden bg-[#080612] md:min-h-72">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-xs text-n500 opacity-40">no preview</span>
          </div>
        )}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, transparent 60%, var(--canvas-raised))' }}
        />
      </div>

      {/* Content zone */}
      <div className="flex flex-col gap-4 p-6">
        <FileTab path={`projects/${slug}`} active />

        <div>
          <h3 className="font-display text-xl font-bold text-n900">{title}</h3>
          <p className="mt-1 text-sm text-n500">{shortDesc}</p>
        </div>

        <dl className="flex flex-col gap-2">
          {[
            { label: 'Problem', value: problem },
            { label: 'Decision', value: decision },
            { label: 'Result', value: result },
          ].map(({ label, value }) => (
            <div key={label} className="grid grid-cols-[5rem_1fr] items-start gap-2">
              <dt className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.15em] text-mag-500">
                {label}
              </dt>
              <dd className="text-xs leading-relaxed text-n600">{value}</dd>
            </div>
          ))}
        </dl>

        <p className="font-mono text-[0.68rem] uppercase tracking-[0.15em] text-n400">
          Role: <span className="text-n700">{role}</span>
        </p>

        <div className="flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <Badge key={tech} variant="neutral">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          <Link
            href={`/projects/${slug}`}
            className={cn(btnBase, 'bg-transparent text-mag-500 hover:underline underline-offset-4')}
          >
            View Case Study →
          </Link>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                btnBase,
                'bg-canvas-tinted text-mag-600 border border-mag-200 hover:bg-mag-100',
              )}
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                btnBase,
                'bg-canvas-tinted text-mag-600 border border-mag-200 hover:bg-mag-100',
              )}
            >
              <Github size={14} />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
