import type { ServiceCardProps } from '@/components/types/cards/cards';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

export function ServiceCard({
  title,
  description,
  stack,
  icon,
  number,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        'group bg-canvas-raised border-n200 relative flex flex-col gap-5 rounded-sm border p-6',
        'hover:border-mag-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-(--sh-mag)',
        'will-change-transform',
        className
      )}
    >
      {/* Left border accent */}
      <span
        className="absolute top-0 left-0 h-full w-[3px] origin-top rounded-l-sm opacity-40 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'var(--mag-500)' }}
      />

      {/* Decorative number watermark */}
      <span
        className="font-display absolute top-4 right-5 text-5xl font-extrabold tracking-tight select-none"
        style={{ color: 'var(--mag-500)', opacity: 0.06 }}
        aria-hidden
      >
        {number}
      </span>

      {/* Icon */}
      <span
        className="flex h-10 w-10 items-center justify-center rounded-sm transition-colors duration-300 group-hover:shadow-[0_0_16px_rgba(180,0,217,0.25)]"
        style={{ background: 'var(--canvas-tinted)', color: 'var(--mag-500)' }}
      >
        {icon}
      </span>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-n900 text-lg font-bold">{title}</h3>
        <p className="text-n500 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Stack badges */}
      <div className="mt-auto flex flex-wrap gap-1.5">
        {stack.map(tech => (
          <Badge key={tech} variant="violet">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
