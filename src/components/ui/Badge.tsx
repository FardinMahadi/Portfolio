import type { BadgeProps } from '@/components/types/ui/primitives';
import { cn } from '@/lib/utils';

export function Badge({ variant = 'neutral', children, className }: BadgeProps) {
  const variants = {
    neutral: 'bg-n100 text-n700 border border-n200',
    violet: 'bg-mag-100 text-mag-700 border border-mag-200',
    teal: 'bg-teal-100 text-teal-700 border border-teal-200',
    plum: 'bg-plum-800 text-mag-200 border border-plum-600',
    dark: 'bg-n800 text-n200 border border-n700',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-xs px-2.5 py-0.5 font-mono text-[0.68rem] font-medium tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
