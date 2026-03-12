import type { TerminalPromptProps } from '@/components/types/ui/primitives';
import { cn } from '@/lib/utils';

export function TerminalPrompt({ children, className }: TerminalPromptProps) {
  return (
    <div className={cn('flex items-start gap-2 font-mono text-sm', className)}>
      <span className="text-mag-300 mt-0.5 shrink-0 select-none">$</span>
      <span className="text-n200">{children}</span>
    </div>
  );
}
