export const site = {
  name: 'Mahadi Hasan Fardin',
  title: 'Full Stack Engineer · MERN · Next.js · AI Integration',
  tagline: 'Building products that feel as good as they perform. MERN · Next.js · AI Integration.',
  email: 'mahadihasanfardin2015@gmail.com',
  location: 'Dhaka, Bangladesh',
  availability: 'available' as const,
  url: 'https://fardinmahadi.vercel.app',
  socials: {
    github: 'https://github.com/FardinMahadi',
    linkedin: 'https://www.linkedin.com/in/mahadi-hasan-fardin',
    discord: 'https://discord.com/users/fardinmahadi',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Blog', href: '/blog' },
  ],
  stats: [
    { value: 1, suffix: '+', label: 'Years Experience' },
    { value: 2, suffix: '+', label: 'Projects Shipped' },
    { value: 1, suffix: '', label: 'Companies' },
  ],
} as const;
