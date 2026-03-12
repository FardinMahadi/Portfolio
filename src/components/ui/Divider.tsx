import type { DividerProps } from '@/components/types/ui/primitives';
import { cn } from '@/lib/utils';

export function Divider({ label, className }: DividerProps) {
  if (!label) {
    return <hr className={cn('border-n200 border-0 border-t', className)} />;
  }

  return (
    <div className={cn('flex items-center gap-4', className)}>
      <span className="bg-n200 h-px flex-1" />
      <span className="text-n400 font-mono text-[0.65rem] tracking-widest uppercase">{label}</span>
      <span className="bg-n200 h-px flex-1" />
    </div>
  );
}
