'use client';

import type { ButtonV2Props } from '@/components/types/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function ButtonV2({
  variant = 'primary',
  size = 'md',
  children,
  className,
  disabled,
  type = 'button',
  onClick,
  'aria-label': ariaLabel,
  id,
  tabIndex,
}: ButtonV2Props) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-sm font-display font-semibold transition-all duration-200 cursor-pointer select-none';

  const variants = {
    primary:
      'bg-mag-500 text-white hover:bg-mag-400 shadow-(--sh-mag) hover:shadow-[0_12px_40px_rgba(180,0,217,0.45)] active:scale-[0.97]',
    secondary:
      'bg-canvas-tinted text-mag-600 border border-mag-200 hover:bg-mag-100 hover:border-mag-400 active:scale-[0.97]',
    teal: 'bg-teal-500 text-white hover:bg-teal-400 shadow-(--sh-teal) active:scale-[0.97]',
    ghost: 'bg-transparent text-mag-500 underline-offset-4 hover:underline hover:text-mag-400',
    dark: 'bg-canvas-dark text-white border border-mag-800 hover:border-mag-500 hover:shadow-(--sh-mag) active:scale-[0.97]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={disabled}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      id={id}
      tabIndex={tabIndex}
    >
      {children}
    </motion.button>
  );
}
