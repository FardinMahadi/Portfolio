import type { SectionEyebrowProps } from '@/components/types/ui/primitives';

import { cn } from '@/lib/utils';

export function SectionEyebrow({ children, number, className }: SectionEyebrowProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="bg-mag-500 h-px w-8 shrink-0" />
      {number && (
        <span className="text-mag-500 font-mono text-[0.65rem] font-medium tracking-[0.2em] uppercase">
          {number}
        </span>
      )}
      <span className="text-n400 font-mono text-[0.65rem] font-medium tracking-[0.2em] uppercase">
        {children}
      </span>
    </div>
  );
}
