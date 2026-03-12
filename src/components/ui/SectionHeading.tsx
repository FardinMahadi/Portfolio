import type { SectionHeadingProps } from '@/components/types/ui/primitives';

import { cn } from '@/lib/utils';

export function SectionHeading({
  children,
  accent,
  as: Tag = 'h2',
  className,
}: SectionHeadingProps) {
  if (!accent) {
    return (
      <Tag
        className={cn(
          'font-display text-n900 text-3xl font-extrabold tracking-tight md:text-4xl',
          className
        )}
      >
        {children}
      </Tag>
    );
  }

  const text = typeof children === 'string' ? children : '';
  const parts = text.split(accent);

  return (
    <Tag
      className={cn(
        'font-display text-n900 text-3xl font-extrabold tracking-tight md:text-4xl',
        className
      )}
    >
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <span style={{ color: 'var(--mag-500)' }}>{accent}</span>}
        </span>
      ))}
    </Tag>
  );
}
