import type { ExperienceEntry, EducationEntry } from '@/lib/types/experience';

export const experience: ExperienceEntry[] = [
  {
    company: 'DevGenit',
    role: 'Frontend Engineer',
    type: 'contract',
    startDate: '2025-07',
    endDate: 'present',
    impact: 'Shipped the ACS Bangladesh Youth Summit platform — ranked #1 on Google within days of launch.',
    description: [
      'Led frontend architecture for high-visibility conference and product experiences using React/Next.js.',
      'Collaborated with designers and backend engineers to hit sprint deadlines on tight cycles.',
      'Implemented performance optimizations improving Core Web Vitals across multiple surfaces.',
      'Integrated REST APIs and CMS data sources into reusable, typed UI modules.',
      'Established design token usage, prop contracts, and component architecture standards.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'MUI', 'Vercel'],
    logo: '/images/logos/devgenit.svg',
  },
  {
    company: 'Freelance',
    role: 'Full Stack Developer',
    type: 'freelance',
    startDate: '2024-01',
    endDate: '2025-06',
    impact: 'Delivered production web applications for clients across education, events, and SaaS verticals.',
    description: [
      'Designed and built end-to-end web applications from schema to deployment.',
      'Worked directly with clients to scope, prototype, and iterate on product requirements.',
      'Specialized in React/Next.js frontends with Node.js and MongoDB backends.',
      'Managed CI/CD pipelines and Vercel deployments for all projects.',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
  },
];

export const education: EducationEntry[] = [
  {
    institution: 'Comilla University',
    degree: 'Bachelor of Science',
    field: 'Computer Science & Engineering',
    startDate: '2023-01',
    endDate: 'present',
    highlights: ['Currently pursuing degree', 'Focus on software engineering and web technologies'],
  },
  {
    institution: 'Dhaka College',
    degree: 'Higher Secondary Certificate',
    field: 'Science',
    startDate: '2020-07',
    endDate: '2022-06',
    highlights: ['Completed HSC with science background'],
  },
];
