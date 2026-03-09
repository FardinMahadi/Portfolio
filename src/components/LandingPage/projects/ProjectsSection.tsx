'use client';

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Lern Beta Platform",
    description: "An AI-powered learning platform landing page focused on delivering quality education access for all.",
    image: "/Projects/Lern/image.png",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "AI"],
    bullets: [
      "Crafted messaging and visuals to tell the story behind Lern's AI assistant.",
      "Architected responsive layout and CTA flow to drive sign-ups on any device.",
      "Deployed to Vercel with performance budgets to keep the experience fast.",
    ],
    live: "https://lern-beta.vercel.app/",
    code: "https://github.com/FardinMahadi/Lern-AI-Powered-Study-Assistant-Uni-project-showcase",
  },
  {
    title: "ACS Youth Summit",
    description: "Official ACS Bangladesh Youth Summit conference platform with schedules, submissions, and partner showcases.",
    image: "/Projects/ACS/image.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    bullets: [
      "Coordinated stakeholder workshops to map sponsor, speaker, and attendee journeys.",
      "Implemented abstract submission workflows and timeline modules with CMS hooks.",
      "Optimized imagery, accessibility, and SEO to support hybrid conference audiences.",
    ],
    live: "https://acsduyouthsummit2025.org/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-primary mb-2">// projects</p>
          <h2 className="text-2xl md:text-3xl font-bold">Featured Work</h2>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative group overflow-hidden rounded-xl border border-border aspect-video">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-mono bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-6">
                  {project.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
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
                    className="flex items-center gap-2 text-sm text-primary font-medium hover:underline underline-offset-4 transition-all"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
