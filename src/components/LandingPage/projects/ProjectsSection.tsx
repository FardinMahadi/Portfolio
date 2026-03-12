'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Lern Beta Platform',
    description:
      'An AI-powered learning platform landing page focused on delivering quality education access for all.',
    image: '/images/projects/lern-beta/cover.png',
    tags: ['Next.js', 'Tailwind CSS', 'Vercel', 'AI'],
    bullets: [
      "Crafted messaging and visuals to tell the story behind Lern's AI assistant.",
      'Architected responsive layout and CTA flow to drive sign-ups on any device.',
      'Deployed to Vercel with performance budgets to keep the experience fast.',
    ],
    live: 'https://lern-beta.vercel.app/',
    code: 'https://github.com/FardinMahadi/Lern-AI-Powered-Study-Assistant-Uni-project-showcase',
  },
  {
    title: 'ACS Youth Summit',
    description:
      'Official ACS Bangladesh Youth Summit conference platform with schedules, submissions, and partner showcases.',
    image: '/images/projects/acs-youth-summit/cover.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    bullets: [
      'Coordinated stakeholder workshops to map sponsor, speaker, and attendee journeys.',
      'Implemented abstract submission workflows and timeline modules with CMS hooks.',
      'Optimized imagery, accessibility, and SEO to support hybrid conference audiences.',
    ],
    live: 'https://acsduyouthsummit2025.org/',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary mb-2 font-mono text-sm">{'// projects'}</p>
          <h2 className="text-2xl font-bold md:text-3xl">Featured Work</h2>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
            >
              <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="group border-border hover:border-glow relative aspect-video overflow-hidden rounded-xl border transition-all duration-300">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="from-background/80 absolute inset-0 bg-linear-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>

              <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 font-mono text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="mb-6 space-y-2">
                  {project.bullets.map((b, j) => (
                    <li key={j} className="text-muted-foreground flex gap-2 text-sm">
                      <span className="text-primary shrink-0">▹</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary flex items-center gap-2 text-sm font-medium underline-offset-4 transition-all hover:underline"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
                    >
                      <Github size={14} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
