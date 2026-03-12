import type { ReactNode } from 'react';

export type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export type NavbarProps = {
  className?: string;
};

export type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type FooterProps = {
  className?: string;
};

export type PageTransitionProps = {
  children: ReactNode;
};
