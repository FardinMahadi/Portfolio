import type { MouseEventHandler, ReactNode } from 'react';

export type ButtonV2Props = {
  variant?: 'primary' | 'secondary' | 'teal' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  'aria-label'?: string;
  id?: string;
  tabIndex?: number;
};
