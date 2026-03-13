'use client';

import type { ReactNode } from 'react';
import type { LinkProps } from 'next/link';

import Link from 'next/link';
import { forwardRef } from 'react';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

interface NavLinkProps extends Omit<LinkProps, 'className'> {
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ children, className, activeClassName, exact = false, href, ...props }, ref) => {
    const pathname = usePathname();
    const hrefString = typeof href === 'string' ? href : href.pathname || '';

    // Check if the link is active
    const isActive = exact
      ? pathname === hrefString
      : pathname.startsWith(hrefString) &&
        (pathname === hrefString || pathname.charAt(hrefString.length) === '/');

    return (
      <Link ref={ref} href={href} className={cn(className, isActive && activeClassName)} {...props}>
        {children}
      </Link>
    );
  }
);

NavLink.displayName = 'NavLink';

export { NavLink };
