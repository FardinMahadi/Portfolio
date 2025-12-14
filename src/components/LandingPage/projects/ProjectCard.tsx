'use client';

import type { ProjectCardProps } from '@/components/types/landing/projects';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import { Button } from '../../ui/button';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { GlassmorphismPanel } from '../../effects/GlassmorphismPanel';

export function ProjectCard({ project, index, isInView, onOpen }: ProjectCardProps) {
  const modalId = `project-modal-${index}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <GlassmorphismPanel className="overflow-hidden" hover>
        <div className="overflow-hidden rounded-lg">
          <header
            className="border-theme-border/50 bg-theme-surface/80 flex items-center gap-2 border-b px-4 py-2 backdrop-blur"
            role="presentation"
          >
            <div className="flex gap-1.5" aria-hidden="true">
              <div className="bg-theme-primary/60 h-3 w-3 rounded-full" />
              <div className="bg-theme-accent/60 h-3 w-3 rounded-full" />
              <div className="bg-theme-secondary/60 h-3 w-3 rounded-full" />
            </div>
            <div className="text-theme-text/60 ml-2 font-mono text-xs">
              ~/{project.title.toLowerCase().replace(/\s+/g, '-')}
            </div>
          </header>

          <figure className="bg-theme-surface/70 relative h-48 overflow-hidden">
            <button
              type="button"
              aria-haspopup="dialog"
              aria-controls={modalId}
              onClick={event => onOpen(event)}
              className="peer group/button focus-visible:ring-theme-primary/70 relative inline-flex h-full w-full cursor-zoom-in items-center justify-center overflow-hidden focus-visible:ring focus-visible:outline-none"
            >
              <span className="sr-only">Open full-size screenshot of {project.title}</span>
              <ImageWithFallback
                src={project.image}
                alt={`${project.title} project screenshot - ${project.description}`}
                width={project.width}
                height={project.height}
                className="h-full w-full object-cover transition-transform duration-300 peer-hover:scale-110 peer-focus-visible:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-300"
                aria-hidden="true"
                style={{
                  background:
                    'linear-gradient(to top, color-mix(in srgb, var(--color-background) 92%, transparent), color-mix(in srgb, var(--color-background) 40%, transparent) 45%, transparent)',
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 peer-hover:opacity-100 peer-focus-visible:opacity-100"
                aria-hidden="true"
              >
                <span className="bg-[color:color-mix(in_srgb,var(--color-surface) 92%,transparent)] text-theme-text ring-theme-border/60 rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase shadow-lg ring-1 backdrop-blur">
                  View Screenshot
                </span>
              </div>
            </button>
          </figure>

          <div className="space-y-4 p-6">
            <header>
              <h3 className="text-theme-text mb-2 font-mono text-xl">{project.title}</h3>
              <p className="text-theme-text/75 text-sm">{project.description}</p>
              {project.role && (
                <p className="text-theme-text/60 mt-3 font-mono text-xs tracking-[0.2em] uppercase">
                  {project.role}
                </p>
              )}
            </header>

            <div className="flex flex-wrap gap-2" role="list">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="border-theme-border/60 bg-theme-surface/70 text-theme-primary rounded border px-2 py-1 font-mono text-xs"
                  role="listitem"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.highlights && project.highlights.length > 0 && (
              <ul className="text-theme-text/85 space-y-2" role="list">
                {project.highlights.map(point => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    role="listitem"
                  >
                    <span className="text-theme-primary mt-0.5" aria-hidden="true">
                      ▹
                    </span>
                    <span className="text-theme-text/75">{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {(project.liveUrl || project.codeUrl) && (
              <div className="flex gap-3 pt-2">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-theme-border/70 text-theme-text/80 hover:border-theme-primary hover:bg-theme-primary/10 hover:text-theme-primary flex-1 transition-all duration-300"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    </a>
                  </Button>
                )}
                {project.codeUrl && project.codeUrl !== '#' && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-theme-border/70 text-theme-text/80 hover:border-theme-accent hover:bg-theme-accent/10 hover:text-theme-accent flex-1 transition-all duration-300"
                    asChild
                  >
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </GlassmorphismPanel>

      <div
        className="absolute inset-0 -z-10 rounded-lg opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to bottom right, color-mix(in srgb, var(--color-primary) 30%, transparent), color-mix(in srgb, var(--color-accent) 28%, transparent))',
        }}
      />
    </motion.article>
  );
}
