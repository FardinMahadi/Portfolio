'use client';

import type { CursorProps } from '@/components/types/ui/primitives';

import { cn } from '@/lib/utils';

export function Cursor({ className }: CursorProps) {
  return (
    <span
      className={cn(
        'bg-mag-500 ml-0.5 inline-block h-[1em] w-0.5 animate-[blink_1s_step-end_infinite] align-middle',
        className
      )}
      aria-hidden="true"
    />
  );
}
