'use client';

import type { ExperienceCardProps } from '@/components/types/experience';

import { motion } from 'framer-motion';
import { Calendar, ExternalLink, MapPin } from 'lucide-react';

export function ExperienceCard({ experience, isInView, index }: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div
        className="absolute top-0 left-6 hidden w-0.5 md:block"
        style={{
          background:
            'linear-gradient(to bottom, color-mix(in srgb, var(--color-primary) 35%, transparent), color-mix(in srgb, var(--color-secondary) 18%, transparent) 55%, transparent)',
        }}
      />

      <div
        className="group border-theme-border/60 bg-theme-surface/80 hover:border-theme-primary/50 hover:shadow-theme-primary/20 relative rounded-lg border p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg md:pl-12"
        style={{
          background:
            'linear-gradient(to bottom right, color-mix(in srgb, var(--color-surface) 92%, transparent), color-mix(in srgb, var(--color-background) 88%, transparent))',
        }}
      >
        <div className="border-theme-border/80 bg-theme-primary absolute top-8 left-6 hidden h-3 w-3 rounded-full border-2 md:block" />

        <header className="mb-4">
          <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-theme-text mb-1 text-xl font-bold">{experience.position}</h3>
              <div className="text-theme-text/80 flex flex-wrap items-center gap-3">
                {experience.companyUrl ? (
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group hover:text-theme-primary flex items-center gap-1 transition-colors"
                    aria-label={`Visit ${experience.company} website`}
                  >
                    <span className="font-semibold">{experience.company}</span>
                    <ExternalLink
                      className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <span className="font-semibold">{experience.company}</span>
                )}
                {experience.type && (
                  <>
                    <span className="text-theme-text/50" aria-hidden="true">
                      •
                    </span>
                    <span className="border-theme-border/60 bg-theme-surface/70 text-theme-text/75 rounded border px-2 py-1 text-sm">
                      {experience.type}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="text-theme-text/70 flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <span>{experience.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <time dateTime="2025-07">{experience.startDate}</time>
              {experience.endDate ? (
                <>
                  <span aria-hidden="true"> - </span>
                  <time dateTime={experience.endDate}>{experience.endDate}</time>
                </>
              ) : (
                <>
                  <span aria-hidden="true"> - </span>
                  <span className="border-theme-primary/40 bg-theme-primary/15 text-theme-primary rounded border px-2 py-0.5">
                    {experience.current ? 'Present' : 'Ongoing'}
                  </span>
                </>
              )}
            </div>
          </div>
        </header>

        <div className="space-y-4">
          <p className="text-theme-text/80 leading-relaxed">{experience.description}</p>

          {experience.responsibilities.length > 0 && (
            <div>
              <h4 className="text-theme-text/75 mb-3 text-sm font-semibold tracking-wide uppercase">
                Key Responsibilities
              </h4>
              <ul className="space-y-2" role="list">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="text-theme-text/80 flex items-start gap-3"
                    role="listitem"
                  >
                    <span className="text-theme-primary mt-1.5 shrink-0" aria-hidden="true">
                      ▹
                    </span>
                    <span className="leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {experience.technologies.length > 0 && (
            <div>
              <h4 className="text-theme-text/75 mb-3 text-sm font-semibold tracking-wide uppercase">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2" role="list">
                {experience.technologies.map(tech => (
                  <span
                    key={tech}
                    className="border-theme-border/60 bg-theme-surface/70 text-theme-text/80 hover:border-theme-primary/50 hover:text-theme-primary rounded border px-3 py-1 text-sm transition-colors"
                    role="listitem"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
