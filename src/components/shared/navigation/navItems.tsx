'use client';

import type { NavItemsProps } from '@/components/types/shared/navigation';

export const navItems: NavItemsProps[] = [
  {
    name: 'Home',
    href: '/',
    icon: '<>',
    isRoute: true,
  },
  {
    name: 'About',
    href: '/about',
    icon: '::',
    isRoute: true,
  },
  {
    name: 'Experience',
    href: '/experience',
    icon: '>>',
    isRoute: true,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: '~~',
    isRoute: true,
  },
  {
    name: 'Blog',
    href: '/blog',
    icon: '##',
    isRoute: true,
  },
  {
    name: 'Resume',
    href: '/resume',
    icon: '**',
    isRoute: true,
  },
];
