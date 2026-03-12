'use client';

import type { NavLinkProps } from '@/components/types/layout/layout';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const isHashLink = href.includes('#');
  const isActive = isHashLink ? false : pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'font-display relative text-sm font-medium transition-colors duration-200',
        'text-n600 hover:text-n900',
        isActive && 'text-mag-500',
        className
      )}
    >
      {children}
      {isActive && (
        <span className="bg-mag-500 absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full" />
      )}
    </Link>
  );
}
