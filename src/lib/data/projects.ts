import type { Project } from '@/lib/types/project';

export const projects: Project[] = [
  {
    slug: 'lern-beta-platform',
    title: 'Lern Beta Platform',
    shortDesc:
      'AI-powered learning platform landing page focused on delivering quality education access for all.',
    problem:
      "Students lacked a compelling entry point that communicated Lern's AI assistant value proposition clearly enough to drive sign-ups.",
    decision:
      'Built a conversion-focused landing page with a scroll-driven narrative — leading with the AI benefit, using social proof anchors, and a single dominant CTA pathway.',
    result:
      'Launched on Vercel with strong Core Web Vitals. The focused CTA flow increased engagement time compared to a prototype with multiple competing actions.',
    role: 'Product Designer & Engineer',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'AI'],
    category: ['frontend', 'ai'],
    featured: true,
    liveUrl: 'https://lern-beta.vercel.app/',
    codeUrl: 'https://github.com/FardinMahadi/Lern-AI-Powered-Study-Assistant-Uni-project-showcase',
    thumbnail: '/images/projects/lern-beta/cover.png',
    heroImage: '/images/projects/lern-beta/cover.png',
    screens: ['/images/projects/lern-beta/cover.png'],
    date: '2024-12',
    duration: '3 weeks',
  },
  {
    slug: 'acs-youth-summit',
    title: 'ACS Youth Summit Website',
    shortDesc:
      'Official conference platform for ACS Bangladesh ICESGE-2025, serving schedules, submissions, and partner showcases.',
    problem:
      'The ACS Bangladesh youth summit needed a production-grade web presence within a tight deadline — handling sponsors, speakers, abstract submissions, and live attendee traffic under the ACS brand.',
    decision:
      'Led the frontend architecture at DevGenit: established a component system with CMS-driven data, implemented submission workflows with state validation, and prioritized accessibility for a hybrid conference audience.',
    result:
      'Deployed on Vercel. Ranked #1 on Google for the conference name within days of launch. Served attendees and submission teams without downtime during peak registration.',
    role: 'Lead Frontend Engineer',
    company: 'DevGenit',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'MUI', 'Vercel'],
    category: ['fullstack', 'frontend'],
    featured: true,
    thumbnail: '/images/projects/acs-youth-summit/cover.png',
    heroImage: '/images/projects/acs-youth-summit/cover.png',
    screens: [
      '/images/projects/acs-youth-summit/cover.png',
      '/images/projects/acs-youth-summit/screenshot-1.png',
    ],
    date: '2025-07',
    duration: '2 months',
  },
];

export const featuredProjects = projects.filter(p => p.featured);
