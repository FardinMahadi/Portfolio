import type { Project } from '@/lib/types/project';

import { Calendar, Clock, ExternalLink, Github } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

type ProjectMetaProps = {
  project: Project;
  className?: string;
};

export function ProjectMeta({ project, className }: ProjectMetaProps) {
  const { role, company, stack, date, duration, liveUrl, codeUrl, category } = project;

  const formatted = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

  return (
    <aside
      className={cn(
        'border-n200 bg-canvas-raised sticky top-24 flex flex-col gap-6 rounded-sm border p-6',
        className
      )}
    >
      {/* File tab header */}
      <div
        className="rounded-xs -mt-1 -mx-2 flex items-center gap-2 px-2 py-1.5 font-mono text-[0.62rem]"
        style={{
          background: 'color-mix(in srgb, var(--mag-500) 8%, transparent)',
          color: 'var(--mag-500)',
        }}
      >
        <span>●</span>
        <span>project.meta</span>
      </div>

      {/* Role */}
      <div>
        <span className="text-n400 block font-mono text-[0.6rem] tracking-[0.15em] uppercase">
          Role
        </span>
        <span className="text-n900 mt-1 block text-sm font-semibold">{role}</span>
      </div>

      {/* Company */}
      {company && (
        <div>
          <span className="text-n400 block font-mono text-[0.6rem] tracking-[0.15em] uppercase">
            Company
          </span>
          <span className="text-teal-600 mt-1 block text-sm font-semibold">{company}</span>
        </div>
      )}

      {/* Date */}
      <div className="flex items-start gap-2">
        <Calendar size={12} className="text-n400 mt-0.5 shrink-0" />
        <div>
          <span className="text-n400 block font-mono text-[0.6rem] tracking-[0.15em] uppercase">
            Shipped
          </span>
          <span className="text-n900 mt-1 block text-sm">{formatted}</span>
        </div>
      </div>

      {/* Duration */}
      {duration && (
        <div className="flex items-start gap-2">
          <Clock size={12} className="text-n400 mt-0.5 shrink-0" />
          <div>
            <span className="text-n400 block font-mono text-[0.6rem] tracking-[0.15em] uppercase">
              Duration
            </span>
            <span className="text-n900 mt-1 block text-sm">{duration}</span>
          </div>
        </div>
      )}

      {/* Category */}
      <div>
        <span className="text-n400 mb-2 block font-mono text-[0.6rem] tracking-[0.15em] uppercase">
          Discipline
        </span>
        <div className="flex flex-wrap gap-1.5">
          {category.map(cat => (
            <Badge key={cat} variant="violet">
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      {/* Stack */}
      <div>
        <span className="text-n400 mb-2 block font-mono text-[0.6rem] tracking-[0.15em] uppercase">
          Stack
        </span>
        <div className="flex flex-wrap gap-1.5">
          {stack.map(tech => (
            <Badge key={tech} variant="neutral">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="border-n200 border-t pt-4">
        <span className="text-n400 mb-3 block font-mono text-[0.6rem] tracking-[0.15em] uppercase">
          Links
        </span>
        <div className="flex flex-col gap-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm px-4 py-2 text-center font-mono text-[0.7rem] font-medium text-white transition-all hover:brightness-110"
              style={{ background: 'linear-gradient(135deg, var(--mag-700), var(--mag-500))' }}
            >
              <ExternalLink size={12} />
              View Live Site
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-n200 text-n600 hover:border-n400 hover:text-n900 inline-flex items-center gap-2 rounded-sm border px-4 py-2 font-mono text-[0.7rem] font-medium transition-all"
            >
              <Github size={12} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}
