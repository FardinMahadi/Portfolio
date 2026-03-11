import type { TestimonialCardProps } from '@/components/types/cards/cards';
import { cn } from '@/lib/utils';

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const { name, role, company, avatar, quote } = testimonial;

  return (
    <figure
      className={cn(
        'border-n200 bg-canvas-raised flex flex-col gap-4 rounded-sm border p-6',
        'border-l-[3px]',
        className
      )}
      style={{ borderLeftColor: 'var(--mag-500)' }}
    >
      <blockquote>
        <p className="font-display text-n700 text-base leading-relaxed">"{quote}"</p>
      </blockquote>

      <figcaption className="mt-auto flex items-center gap-3">
        {avatar && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatar} alt={name} className="h-9 w-9 rounded-full object-cover" />
        )}
        <div>
          <p className="font-display text-n900 text-sm font-semibold">{name}</p>
          <p className="text-n400 font-mono text-[0.65rem] tracking-[0.12em] uppercase">
            {role}
            {company ? `, ${company}` : ''}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
