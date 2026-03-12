import type { AvailabilityChipProps } from '@/components/types/ui/primitives';

import { cn } from '@/lib/utils';
import { PulseDot } from '@/components/ui/PulseDot';

const statusConfig = {
  available: { label: 'Available for hire', color: 'teal' as const },
  busy: { label: 'Currently engaged', color: 'mag' as const },
  open: { label: 'Open to opportunities', color: 'teal' as const },
};

export function AvailabilityChip({ status = 'available', className }: AvailabilityChipProps) {
  const { label, color } = statusConfig[status];

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs',
        color === 'teal'
          ? 'border-teal-200 bg-teal-100 text-teal-700'
          : 'border-mag-200 bg-mag-100 text-mag-700',
        className
      )}
    >
      <PulseDot color={color} />
      {label}
    </span>
  );
}
