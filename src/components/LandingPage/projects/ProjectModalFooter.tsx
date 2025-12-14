'use client';

import type { ProjectModalFooterProps } from '@/components/types/landing/projects';

import { ExternalLink, Github } from 'lucide-react';

import { Button } from '../../ui/button';

export function ProjectModalFooter({ project }: ProjectModalFooterProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <p className="text-theme-text/60 text-xs tracking-[0.28em] uppercase">
        Scroll to explore the full canvas
      </p>
      <div className="flex gap-3">
        {project.liveUrl && (
          <Button
            className="border-theme-border/70 text-theme-text/85 hover:border-theme-primary hover:text-theme-primary focus-visible:ring-theme-primary/60 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase transition focus-visible:ring focus-visible:outline-none"
            asChild
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
              Live Site
            </a>
          </Button>
        )}
        {project.codeUrl && (
          <Button
            className="border-theme-border/70 text-theme-text/85 hover:border-theme-accent hover:text-theme-accent focus-visible:ring-theme-accent/60 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase transition focus-visible:ring focus-visible:outline-none"
            asChild
          >
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-3 w-3" aria-hidden="true" />
              Code
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
