'use client';

import { ProjectCard } from '@/components/cards/ProjectCard';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { featuredProjects } from '@/lib/data/projects';
import { cn } from '@/lib/utils';
import { fadeUp, staggerContainer, staggerItem } from 'config/animations';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function ProjectsSection({ className }: { className?: string }) {
  return (
    <section id="projects" className={cn('bg-canvas-sunken py-24', className)}>
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 flex flex-col gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <SectionEyebrow number="02">Selected Work</SectionEyebrow>
          <SectionHeading accent="ship">Things I ship.</SectionHeading>
          <p className="text-n500 max-w-xl text-base leading-relaxed">
            Real products. Real problems. End-to-end ownership from architecture to deployment.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {featuredProjects.map(project => (
            <motion.div key={project.slug} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Link
            href="/projects"
            className="text-mag-500 font-mono text-sm font-medium underline-offset-4 hover:underline"
          >
            See all projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
