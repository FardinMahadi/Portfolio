import type { FileTabProps } from '@/components/types/ui/primitives';

import { cn } from '@/lib/utils';

export function FileTab({ path, active = false, className }: FileTabProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-t-sm border-b-2 px-3 py-1 font-mono text-xs',
        active
          ? 'border-b-mag-500 bg-canvas-sunken text-mag-400'
          : 'bg-canvas-sunken text-n400 border-b-transparent',
        className
      )}
    >
      <span className="text-n400">~/</span>
      {path}
    </span>
  );
}
