import type { PulseDotProps } from '@/components/types/ui/primitives';
import { cn } from '@/lib/utils';

export function PulseDot({ color = 'teal', className }: PulseDotProps) {
  return (
    <span className={cn('relative inline-flex h-2.5 w-2.5', className)} aria-hidden="true">
      <span
        className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
        style={{ background: color === 'teal' ? 'var(--teal-300)' : 'var(--mag-400)' }}
      />
      <span
        className="relative inline-flex h-2.5 w-2.5 rounded-full"
        style={{ background: color === 'teal' ? 'var(--teal-500)' : 'var(--mag-500)' }}
      />
    </span>
  );
}
