import type { TerminalBlockProps } from '@/components/types/ui/primitives';
import { cn } from '@/lib/utils';

export function TerminalBlock({ filename = 'status.ts', children, className }: TerminalBlockProps) {
  return (
    <div
      className={cn('border-n800 overflow-hidden rounded-sm border', className)}
      style={{ background: '#080612' }}
    >
      {/* Title bar */}
      <div className="border-n800 flex items-center gap-2 border-b px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="text-n500 ml-3 font-mono text-xs">{filename}</span>
      </div>
      {/* Body */}
      <div className="space-y-2 p-4">{children}</div>
    </div>
  );
}
