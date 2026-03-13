export type SkillItem = {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  logo?: string;
};

export type SkillCategory = {
  label: string;
  skills: SkillItem[];
};

export const skills: SkillCategory[] = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', level: 5, logo: '/images/tech/react.png' },
      { name: 'Next.js', level: 5, logo: '/images/tech/nextjs.png' },
      { name: 'TypeScript', level: 4, logo: '/images/tech/typescript.png' },
      { name: 'Tailwind CSS', level: 5, logo: '/images/tech/tailwindcss.png' },
      { name: 'Framer Motion', level: 4, logo: 'https://cdn.simpleicons.org/framer/0055FF' },
      {
        name: 'HTML5',
        level: 5,
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS3',
        level: 5,
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', level: 4, logo: '/images/tech/nodejs.png' },
      { name: 'Express.js', level: 4, logo: '/images/tech/express.png' },
      { name: 'MongoDB', level: 4, logo: '/images/tech/mongodb.png' },
      { name: 'PostgreSQL', level: 3, logo: '/images/tech/postgresql.png' },
      { name: 'Firebase', level: 3, logo: 'https://cdn.simpleicons.org/firebase/FFCA28' },
      { name: 'REST APIs', level: 5, logo: 'https://cdn.simpleicons.org/fastapi/009688' },
      { name: 'JWT', level: 4, logo: 'https://cdn.simpleicons.org/jsonwebtokens/000000' },
    ],
  },
  {
    label: 'AI & Tools',
    skills: [
      { name: 'Vercel AI SDK', level: 3, logo: 'https://cdn.simpleicons.org/vercel/000000' },
      {
        name: 'Figma',
        level: 4,
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      },
      {
        name: 'Git',
        level: 5,
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      { name: 'GitHub', level: 5, logo: 'https://cdn.simpleicons.org/github/181717' },
      { name: 'Vercel', level: 4, logo: 'https://cdn.simpleicons.org/vercel/000000' },
      { name: 'Postman', level: 4, logo: 'https://cdn.simpleicons.org/postman/FF6C37' },
    ],
  },
  {
    label: 'Mobile',
    skills: [{ name: 'React Native', level: 3, logo: '/images/tech/react.png' }],
  },
];

export const services = [
  {
    title: 'Full Stack Engineering',
    description:
      'End-to-end product builds — from database schema to polished UI. Built for performance, scalability, and maintainability.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'TypeScript'],
    icon: 'Code2' as const,
  },
  {
    title: 'Product Design & UX',
    description:
      'Interface architecture, interaction design, and accessibility. Bridging the gap between engineering constraints and great user experiences.',
    stack: ['Figma', 'Tailwind CSS', 'Framer Motion'],
    icon: 'Figma' as const,
  },
  {
    title: 'AI Integration',
    description:
      'LLM-powered features embedded in production applications — from intelligent assistants to automated content workflows.',
    stack: ['OpenAI API', 'Vercel AI SDK', 'Python'],
    icon: 'Sparkles' as const,
  },
] as const;
