export type SkillCategory = {
  label: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Firebase', 'REST APIs', 'JWT'],
  },
  {
    label: 'AI & Tools',
    skills: ['OpenAI API', 'Vercel AI SDK', 'Figma', 'Git', 'GitHub', 'Vercel', 'Postman'],
  },
  {
    label: 'Mobile',
    skills: ['React Native', 'Expo'],
  },
];

export const services = [
  {
    title: 'Full Stack Engineering',
    description: 'End-to-end product builds — from database schema to polished UI. Built for performance, scalability, and maintainability.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'TypeScript'],
    icon: 'Code2' as const,
  },
  {
    title: 'Product Design & UX',
    description: 'Interface architecture, interaction design, and accessibility. Bridging the gap between engineering constraints and great user experiences.',
    stack: ['Figma', 'Tailwind CSS', 'Framer Motion'],
    icon: 'Figma' as const,
  },
  {
    title: 'AI Integration',
    description: 'LLM-powered features embedded in production applications — from intelligent assistants to automated content workflows.',
    stack: ['OpenAI API', 'Vercel AI SDK', 'Python'],
    icon: 'Sparkles' as const,
  },
] as const;
