'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { generateProfessionalServiceSchema } from '@/lib/seo';

import { AboutCopy } from './AboutCopy';
import { TechStackGrid } from './TechStackGrid';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const professionalServiceSchema = generateProfessionalServiceSchema(
    'Full Stack Web Development',
    'MERN stack development services including React, Next.js, Node.js, MongoDB, and TypeScript. Specializing in building scalable web applications and modern user interfaces.',
    'Worldwide'
  );

  return (
    <section
      id="about"
      className="text-theme-text relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Background accents */}
      <div
        className="absolute top-0 right-0 h-96 w-96 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, color-mix(in srgb, var(--color-accent) 24%, transparent), transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 h-96 w-96 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, color-mix(in srgb, var(--color-primary) 26%, transparent), transparent 70%)',
        }}
      />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-theme-primary font-mono" aria-hidden="true">
              {'<'}
            </span>
            <h2 className="text-theme-primary text-3xl font-bold">About Me</h2>
            <span className="text-theme-primary font-mono" aria-hidden="true">
              {'/>'}
            </span>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <AboutCopy isInView={isInView} />
            <TechStackGrid isInView={isInView} />
          </div>
        </motion.header>
      </div>
    </section>
  );
}
